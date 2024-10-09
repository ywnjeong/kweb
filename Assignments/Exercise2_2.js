const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const stats = util.promisify(fs.stat);
const isDirectory = stats.isDirectory;
const extname = path.extname;
const join = path.join;

const dirSearch = async (dir) => {
    try {
        const files = await readdir(dir);

        for (const file of files) {
            const filePath = join(dir, file);
            const fileStat = await stat(filePath);

            if (await isDirectory(fileStat)) {
                await dirSearch(filePath);
            } else {
                if (extname(file) === '.js') {
                    console.log(filePath);
                }
            }
        }

    } catch (err) {
        console.error(err);
    }
};

dirSearch('test');

