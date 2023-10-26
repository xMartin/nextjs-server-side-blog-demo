const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db.sqlite3')

function setup() {
	db.serialize(() => {
		db.run('CREATE TABLE posts (title TEXT, body TEXT, date TEXT)')

		const stmt = db.prepare('INSERT INTO posts VALUES (?, ?, ?)')
    posts.forEach((post) => stmt.run(post.title, post.body, post.date))
		stmt.finalize()

		db.each('SELECT rowid AS id, * FROM posts', (err, row) => {
			console.log(row)
		})
	})
}

const posts = [
  {
    title: 'Finished server-side blog project',
    body: `Finished server-side blog project Finished server-side blog project Finished server-side blog project Finished server-side blog project

Finished server-side blog project Finished server-side blog project Finished server-side blog project`,
    date: "2023-10-26T20:59:54.070Z",
  },
  {
    title: 'Posts can now can be posted to DB',
    body: `Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB 

Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB Posts can now can be posted to DB `,
    date: '2023-10-26T19:29:54.070Z',
  },
  {
    title: 'Blog works fully server-side from DB',
    body: `Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB Blog works fully server-side from DB 

Blog works fully server-side from DB Blog works fully server-side from DB `,
    date: '2023-10-26T18:04:54.070Z',
  },
  {
    title: 'Finished server-side blog project',
    body: `Started server-side blog project Started server-side blog project Started server-side blog project Started server-side blog project

Started server-side blog project Started server-side blog project Started server-side blog project`,
    date: '2023-10-26T15:39:54.070Z',
  },
]

setup()
