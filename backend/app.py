from flask import Flask, request, jsonify
import db
import os
from services.memoService import MemoPuller


app = Flask(__name__, instance_relative_config=True)
app.config.from_mapping(
    SECRET_KEY='dev',
    DATABASE=os.path.join(app.instance_path, 'backend.sqlite'),
)

#services
mp = MemoPuller()



@app.route("/")
def hello_world():
    db.init_db()
    #load data about stored cards if any
    return "<p>Hello, World!</p>"

@app.route("/memos", methods=['GET'])
def get_memos():
    memos_list = mp.get_memos()
    return jsonify(memos_list)

@app.route("/memos/put", methods=['POST'])
def get_memos():
    data = request.get_json()
    title = data.get('title')
    content = data.get('content')
    mp.putMemo(title,content)
    return jsonify({"message": "Memo added!"}), 201

app.run(host="0.0.0.0", port=80)