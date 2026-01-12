import { db } from "./db";
import {
  projects,
  messages,
  type InsertMessage,
  type Message,
  type Project
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    // Return featured projects first
    return await db.select().from(projects).orderBy(projects.isFeatured);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
