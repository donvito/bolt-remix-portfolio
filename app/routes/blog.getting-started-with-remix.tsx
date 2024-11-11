import { redirect } from "@remix-run/node";

export async function loader() {
  return redirect("/blog/getting-started-with-remix");
}