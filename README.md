# Daily Quiz App

This is a little web application that enables you to quickly setup a few challenges containing quizzes. After completing them you land on a congrats page, which then links you to a price.

It is fully customizable using json config files.

> Note: **Do not use this in a production environment.** This app does not contain any security checks and also no logic to prevent cheating, you can literally just go to `/success` without doing any of the challenges. I have kept this application as simple and minimal as possible. **For now the only purpose of this app is so I can go surprise my gf with new challenges from time to time, because she loves quizzes. It is not build for any other use-case.**

| Startpage                        | Quizzpage                         | Win Page                          |
| -------------------------------- | --------------------------------- | --------------------------------- |
| ![Screenshot 1](/docs/image.png) | ![Screenshot 2](/docs/image2.png) | ![Screenshot 3](/docs/image3.png) |

## Contributions

I do not take any contributions to this project, but feel free to do whatever you want with the code.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vue Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Project Setup

```sh
npm install
```

After installing the package go to the `src/config` folder, copy all `example.*.json` files and remove the `example.` prefix.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Guidelines

### UI Components

For UI components we use [Primevue Tailwind](https://tailwind.primevue.org/). Before adding any new components, please make sure it's not already existing in their component library and use their components whenever possible. We use the [Lara Preset](https://tailwind.primevue.org/vite/#preset).

Components are imported globally in the App.vue. If a component is available in the docs you may need to import it here and/or add a preset for the component.

### CSS-Styling/ Theming

For CSS styling and Theming we use [Tailwind](https://tailwindcss.com/). Please use tailwind classes for styling, whenever possible. The default theme is defined in the `/src/assets/main.css`file. The structure of the theme is predefined by Primevue.

### Formatting and Linting

Please make sure to format and lint your code before merging to main.

### Testing

#### Unit and Integration testing

For unit and integration tests, we use [Vitest](https://vitest.dev/). When testing Vue components we use [Vue Test Utils](https://test-utils.vuejs.org/).

#### E2E Testing

For E2E testing we use [Cypress](https://www.cypress.io/). We only define E2E tests for critical user journeys.

### Folder structure

#### /api

Contains all http requests. Functions defined here should not have any sideeffects.

#### /assets

Put css or img files here.

#### /components

Contains all vue components, that are not a view. Files stored here are not allowed to access the store, do api calls or have any other sideeffects. This is done to make the components easier to test, the app as a whole easier to debug and the components more reusable.

#### /locales

Contains the i18n initialization and language files. Right now we only support german. Text should always be stored in i18n files, hardcoded text in components is not allowed.

#### /presets

This contains presets for Primevue components. Read more in their [docs](https://https://primevue.org/)

#### /router

Contains all routes and guards for the routes. Routes can only links to files stored in the /views directory.

#### /stores

Contains all stores. We use Pinia for state management. Stores are responsible for loading and storing data, aswell as providing status informations, such as the error and loading state of a specific ressource. For api calls, function from the /api folder are used in the action. The store is not allowed to contain any direct api calls.

#### /types

Most typescript types are stored here.

#### /utils

General purpose functions that can be reused throughout the app, that have no real place anywhere else.

#### /views

This contains files for routes. The are the only .vue files that are allowed to access the store. Views are not allowed to to anything visual, there main purpose is to load and provide data for child components, which are stored in the /components directory.
