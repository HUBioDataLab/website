import fs from "fs";

const collectionsDir: string = "./src/content/";

export const allCollections: string[] = fs.readdirSync(collectionsDir, { withFileTypes: true })

// We need to select only the folders as collections
    .filter((file): boolean => {
        return file.isDirectory();
    })

// And their names for urls
    .map((file): string => {
        const { name } = file;
        return name;
    });

export const sortedPosts = (allPosts) => {
    const toReturn = allPosts.sort((post_a, post_b) => {
        const { data: data_a } = post_a;
        const { data: data_b } = post_b;
        const date_a = data_a.date;
        const date_b = data_b.date;

        if (date_a < date_b) {
            return -1;
        }

        else if (date_a > date_b) {
            return 1;
        }

        return 0;
    });

    return toReturn;
}

