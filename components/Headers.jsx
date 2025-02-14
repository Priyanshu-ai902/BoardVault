import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./header-client";

const Headers = async () => {
  const user = await checkUser(); // Fetch user data on server-side
  return <HeaderClient user={user} />; // Pass it to Client Component
};

export default Headers;
