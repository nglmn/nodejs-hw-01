import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const currentData = await fs.readFile(PATH_DB);
        const prevContacts = JSON.parse(currentData);

        const newContactsData = [];
        for (let i = 0; i < number; i++) {
            newContactsData.push(createFakeContact());
        }
        const createdDataContacts = [...prevContacts, ...newContactsData];
        await fs.writeFile(PATH_DB, JSON.stringify(createdDataContacts), "utf-8");
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
};

await generateContacts(5);
