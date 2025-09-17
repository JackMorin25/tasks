from flask import Flask
import db
import os


app = Flask(__name__, instance_relative_config=True)
app.config.from_mapping(
    SECRET_KEY='dev',
    DATABASE=os.path.join(app.instance_path, 'backend.sqlite'),
)


@app.route("/")
def hello_world():
    db.init_db()
    return "<p>Hello, World!</p>"

app.run(host="0.0.0.0", port=80)