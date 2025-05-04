import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const oldContacts = await readContacts();
  const newContact = createFakeContact(1);
  await writeContacts([...oldContacts, newContact]);
};

addOneContact();
