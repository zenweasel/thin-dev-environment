# Development Process

Where a `reaction` CLI exists:

## Getting Started

`reaction create-project api` (later on `create-project storefront` and `create-project admin` will exist)

Copies the files in this repo and `git init`s it (this will also be the repo they will use for deployment)

`reaction develop`

1. Launches the mongo docker
2. Runs `npm run start:dev` in watch mode

`reaction create-plugin api my-plugin` (later on this should have more specific templates for types of plugins)

1. Places templated plugin in `custom-packages` directory and adds it to `plugins.json`

`reaction publish`

1. Publish packages in `custom-packages` directory to npm (or github) via Lerna

`reaction docker build`

1. Change links in `plugins.json` to point to npm packages, not local
2. Builds docker file


### Possibly

`reaction deploy`

