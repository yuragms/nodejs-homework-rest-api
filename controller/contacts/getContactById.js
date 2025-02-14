const { NotFound } = require("http-errors");
// const ContactsModel = require("../../model/contacts");
const { Contact } = require("../../model");

// const getContactById = async (req, res) => {
//   const { contactId } = req.params;
//   const contact = await ContactsModel.getContactById(contactId);

//   if (!contact) {
//     throw new NotFound(`Contact with id '${contactId}'not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     data: {
//       result: contact,
//     },
//   });
// };

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);

  if (!contact) {
    throw new NotFound(`Contact with id '${contactId}'not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getContactById;
