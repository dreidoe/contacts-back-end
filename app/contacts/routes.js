import { Router } from "express";
const router = new Router();
export default router;

const CONTACTS = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

router.get("/", (_, response) => {
  response.json(CONTACTS);
});

router.get("/:id", (request, response) => {
  const { id } = request.params;

  const contact = CONTACTS.find((contact) => contact.id === Number(id));

  /**
   * If the contact is not found, we return a 404 status code
   * and a message to the user
   * 404 means the resource was not found
   * Otherwise, send back the found contact with a 200 status code
   * 200 means the resource was found
   */
  if (contact) {
    response.json(contact);
  } else {
    response.status(404).json({ message: "Contact not found" });
  }
});

router.put("/:id", (request, response) => {
  // Id that needs to be updated
  const id2Update = request.params.id;
  const updatedContact = request.body;

  // Use map to update the contact
  // If the contact id matches the id in the request params, update it
  // Otherwise, return the original contact
  CONTACTS.map((contact) => {
    if (contact.id === Number(id2Update)) {
      return updatedContact;
    }

    return contact;
  });

  response.json({
    message: `Contact updated successfully with id: ${id2Update}`,
  });
});
router.listen(3000, () => {
  console.info("Server is running on port 3000");
});
router.delete("/:id", (request, response) => {
  const id2Delete = request.params.id;

  // Filter out the contact with the id to delete
  const updatedContacts = CONTACTS.filter(
    (contact) => contact.id !== Number(id2Delete)
  );

  response.json({
    message: `Contact deleted successfully with id: ${id2Delete}`,
    updatedContacts,
  });
});
