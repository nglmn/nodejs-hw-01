import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";

export const thanos = async () => {
    const prevData = JSON.parse(await fs.readFile(PATH_DB));
    let data = null;
    if (prevData.length) {
        data = prevData.filter(() => Math.random() > 0.5);
    } else {
        data = prevData;
    }

    await fs.writeFile(PATH_DB, JSON.stringify(data), "utf-8");
};

await thanos();
