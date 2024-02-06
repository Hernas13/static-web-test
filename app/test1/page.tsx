import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col">
        <h1>This is the first test page</h1>
        <Link href="/">Home</Link>
        <Link href={"/test2"}>Test 2</Link>
    </div>
  )
}

export default page