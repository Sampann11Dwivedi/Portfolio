import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { type ProjectResponse } from "@shared/routes";

export function useProjects() {
  return useQuery<ProjectResponse[]>({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(buildUrl(api.projects.list.path), { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}
