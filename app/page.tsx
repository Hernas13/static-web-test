import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is a static web app test!</h1>
      <Link href="/test1">Test 1</Link>
      <Link href="/test2">Test 2</Link>
    </main>
  );
}
