import { serve } from "https://deno.land/std@0.55.0/http/server.ts";

async function main() {
  for await (const req of serve({ port: 8000 })) {
    req.respond({ body: "Hello World\n" });
  }
}

main()
