import { config } from "https://deno.land/x/dotenv/mod.ts";


export const clientId = config()["GITHUB_CLIENT_ID"]
export const clientSecret = config()["GITHUB_CLIENT_SECRET"]