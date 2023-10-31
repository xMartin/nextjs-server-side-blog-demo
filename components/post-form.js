export default function PostForm({ action, post = {} }) {
  return (
    <form action={action} className="w-full">
      <div className="mb-3">
        <input name="title" type="text" placeholder="Title" defaultValue={post.title} className="w-full p-2" />
      </div>
      <div className="mb-3">
        <textarea name="body" placeholder="Article" defaultValue={post.body} className="w-full h-96 p-2" />
      </div>
      <div className="text-right">
        <button type="submit" className="py-2 px-4 border">Save</button>
      </div>
    </form>
  )
}
