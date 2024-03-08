import Link from 'next/link';
export default function SnipperCreatePage() {
  return (
    <form className=" ">
      <h2 className="ml-2">
        <Link href="/">Home</Link>
      </h2>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex gap-4 ml-4 mb-3">
        <label>Title</label>
        <input className="border-2 border-gray-400" />
      </div>
      <div className="flex gap-2 ml-4">
        <label>Code</label>
        <textarea name="code" id="code" className="border-2 border-gray-400" />
      </div>

      <button type="submit" className="ml-5 mt-5 border-2 border-gray-500 rounded-[10px] p-2">
        Save
      </button>
    </form>
  );
}
