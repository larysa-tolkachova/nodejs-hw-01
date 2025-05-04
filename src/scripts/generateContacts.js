import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const oldContacts = await readContacts();
  const newContacts = [];
  for (let i = 0; i <= number; i++) {
    const contact = createFakeContact();
    newContacts.push(contact);
  }
  await writeContacts([...oldContacts, ...newContacts]);
};

console.log(generateContacts(5));
