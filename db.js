import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('./db.sqlite3')

export function fetchPosts() {
	return new Promise((resolve, reject) => {
		db.all("SELECT rowid AS id, * FROM posts", (err, rows) => {
			if (err) {
				reject(err)
			}

			resolve(rows)
		})
	})
}

export function fetchPost(id) {
	return new Promise((resolve, reject) => {
		db.get(`SELECT rowid AS id, * FROM posts WHERE id = ${id}`, (err, row) => {
			if (err) {
				reject(err)
			}

			resolve(row)
		})
	})
}
