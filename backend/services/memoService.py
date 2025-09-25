import requests

from db import get_db

class MemoPuller:

    def __init__(self):
        self.db_url = f"host=http://127.0.0.1:80"


    def get_memos():
        db = get_db()
        cur = db.execute('SELECT id, title, content FROM memos')
        memos = cur.fetchall()
        return [dict(row) for row in memos]
    
    def putMemo(t, c):
        db = get_db()
        cur = db.execute(
            'INSERT INTO memo (title, content) VALUES (?, ?);',
            (t,c)
        )
        db.commit()