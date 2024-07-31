import { createClient } from "@supabase/supabase-js";

const URL = "https://nscrtdpvldedrakfzval.supabase.co";

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY3J0ZHB2bGRlZHJha2Z6dmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMDA0OTMsImV4cCI6MjAzNzg3NjQ5M30.p2sGDd9VOTxjRkPCo41GkVyI4sFaVxhbR2QqyZzXPw0";

export const supabase = createClient(URL,API_KEY);