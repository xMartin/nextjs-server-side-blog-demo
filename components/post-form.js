export default function PostForm({ action, post }) {
  return (
    <form action={action}>
      <div className="mb-3">
        <input name="title" type="text" placeholder="title" defaultValue={post.title} />
      </div>
      <div className="mb-3">
        <textarea name="body" defaultValue={post.body} />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}
