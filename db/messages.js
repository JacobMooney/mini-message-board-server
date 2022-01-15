const Joi = require("joi");
const db = require("./connection");

const schema = Joi.object().keys({
  username: Joi.string().required(),
  subject: Joi.string().required(),
  message: Joi.string().max(500).required(),
  imgURL: Joi.string().uri({
    scheme: [/https?/],
  }),
});

const messages = db.get("messages");

function getAll() {
  return messages.find();
}

function create(message) {
  if (!message.username) {
    message.username = "Anonymous";
  }
  const result = schema.validate(message);
  if (result.error == null) {
    message.create = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return messages.insert(message);
  } else {
    console.log(result.error);
    return Promise.reject(result.error);
  }
}

module.exports = {
  getAll,
  create,
};
