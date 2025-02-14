// const ContactsModel = require("../../model/contacts");

// const listContacts = async (req, res) => {
//   const contacts = await ContactsModel.listContacts();
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       result: contacts,
//     },
//   });
// };

const { Contact } = require("../../model");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  let filter = { owner: _id };
  if (favorite) {
    filter = { owner: _id, favorite };
  }
  const result = await Contact.find(filter, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "id email");
  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};
module.exports = listContacts;
