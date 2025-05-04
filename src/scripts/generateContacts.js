import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  console.log(number);

  const oldContacts = await readContacts();
  const newContacts = [];
  for (let i = 1; i <= number; i += 1) {
    // console.log(number);
    // console.log(i);

    const contact = createFakeContact();
    newContacts.push(contact);
  }
  await writeContacts([...oldContacts, ...newContacts]);
};

console.log(generateContacts(5));
