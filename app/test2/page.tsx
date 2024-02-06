import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col">
        <h1>This is the second test page</h1>
        <Link href="/">Home</Link>
        <Link href={"/test1"}>Test 1</Link>
    </div>
  )
}

export default page