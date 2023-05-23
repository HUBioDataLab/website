# Website Documentation

## First install

Clone repo and install dependencies:
```
git clone https://github.com/HUBioDataLab/website.git
cd website
npm install
```

## Developing the website
You can test the website with the following command. If everything is okay, send a PR and describe what you did in detail.
```
npm run dev
```

## Project Structure

Inside of your the website, you'll see the following folders and files:

```
/
├── public/
|   |
│   └── project-images/
|       └── crossbar.png
|
├── src/
|   |
│   ├── components/
│   │   └── Card.astro
|   |
|   ├── content/
|   |   |
|   |   ├── members/
|   |   |   └── melih-darcan.mdx
|   |   |
|   |   └── projects/
|   |       └── crossbar.mdx
|   |   
│   ├── layouts/
│   │   └── Layout.astro
|   |
│   └── pages/
│       └── index.astro
|
└── package.json
```

Any static assets, like images, should be placed in the `public/` directory.

You will mostly deal with `content/` folder.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
