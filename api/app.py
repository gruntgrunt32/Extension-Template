from flask import Flask, request, jsonify
from sqlalchemy.orm.exc import NoResultFound
from database import (
    Example,
    SessionLocal
    )


app = Flask(__name__)

def uniform_response(status="success", message="", data=None, status_code=200):
    return jsonify({"status": status, "message": message, "data": data}), status_code


@app.route("/example", methods=["GET"])
def get_example():
    db = SessionLocal()
    examples = db.query(Example).all()
    db.close()
    return uniform_response(data=[example.__dict__ for example in examples])

@app.route("/example", methods=["POST"])
def create_example():
    data = request.json
    db = SessionLocal()
    example = Example(**data)
    db.add(example)
    db.commit()
    db.close()
    return uniform_response(data=example.__dict__)

@app.route("/example/<id>", methods=["GET"])
def get_example_by_id(id):
    db = SessionLocal()
    try:
        example = db.query(Example).filter(Example.id == id).one()
    except NoResultFound:
        return uniform_response("error", "Example not found", status_code=404)
    db.close()
    return uniform_response(data=example.__dict__)

@app.route("/example/<id>", methods=["PUT"])
def update_example(id):
    data = request.json
    db = SessionLocal()
    try:
        example = db.query(Example).filter(Example.id == id).one()
    except NoResultFound:
        return uniform_response("error", "Example not found", status_code=404)
    for key, value in data.items():
        setattr(example, key, value)
    db.commit()
    db.close()
    return uniform_response(data=example.__dict__)

@app.route("/example/<id>", methods=["DELETE"])
def delete_example(id):
    db = SessionLocal()
    try:
        example = db.query(Example).filter(Example.id == id).one()
    except NoResultFound:
        return uniform_response("error", "Example not found", status_code=404)
    db.delete(example)
    db.commit()
    db.close()
    return uniform_response(data=example.__dict__)


if __name__ == '__main__':
    app.run(debug=True)