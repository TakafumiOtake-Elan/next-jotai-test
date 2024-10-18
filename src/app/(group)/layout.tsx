import { cookies } from "next/headers";
import Layout from "./_components/Layout";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  cookies();

  const date = new Date().toISOString();
  console.log("Top layout called with" + date);

  return <Layout date={date}>{children}</Layout>;
}
