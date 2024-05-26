import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    const allData = JSON.parse(await fs.readFile(PATH_DB));
    let count = 0;
    allData.forEach(element => {
        if (element) count++;
    });
    return count;
};

console.log(await countContacts());
