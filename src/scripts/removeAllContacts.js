import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    let allData = JSON.parse(await fs.readFile(PATH_DB));
    if (allData.length) {
        allData = [];
    }
    await fs.writeFile(PATH_DB, JSON.stringify(allData), "utf-8");
};

await removeAllContacts();
