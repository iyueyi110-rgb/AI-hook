import { agentHttpHandlers } from "@/lib/agent/http";

interface Context { params: Promise<{ runId: string }> }

export const runtime = "nodejs";
// The model budget is 30s; leave enough room to persist a recoverable result
// after an upstream timeout instead of letting the platform kill the request.
export const maxDuration = 60;

export async function POST(request: Request, context: Context): Promise<Response> {
  return agentHttpHandlers.turn(request, (await context.params).runId);
}
