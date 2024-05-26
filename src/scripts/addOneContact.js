import fs from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";

export const addOneContact = async () => {
    try {
        const prevData = JSON.parse(await fs.readFile(PATH_DB));
        const newContact = createFakeContact();
        const data = [...prevData, newContact];

        await fs.writeFile(PATH_DB, JSON.stringify(data), "utf-8");
    } catch (error) {
        console.log(error);
    }
};

await addOneContact();
