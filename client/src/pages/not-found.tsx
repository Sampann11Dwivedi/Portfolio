import { Card, CardContent } from "@/components/ui/card";
import { CornerDownLeft,Home } from "lucide-react";


export default function NotFound() {

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]">
      <Card className="w-full max-w-md mx-4 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <CardContent className="pt-8 pb-7 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center rotate-[-6deg]">
              <CornerDownLeft className="h-7 w-7 text-indigo-400" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-white tracking-tight mb-2">
            Wrong Turn
          </h1>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed px-6">
            This route leads nowhere.  
          </p>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Button */}
          <div className="mt-6 flex justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="group flex items-center gap-2 rounded-xl bg-indigo-500/90 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Go to Main Page
          </button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
