export default function PostForm({ action }) {
  return (
    <form action={action}>
      <div className="mb-3">
        <input name="title" placeholder="title" />
      </div>
      <div className="mb-3">
        <textarea name="body" />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}
