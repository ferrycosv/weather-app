# WEATHER-APP: development strategy

---

## 0. Setup

- Setup the boilerplate for building a REACT application using the `create-react-app` script, this script initialize all the configuration needed automatically and let you start building REACT applications without this tedious process of configuring all the necessary packages.

---

## 1. User Story: `Form and API call`

- Creation of the basic components used for rendering the user interface in REACT.
- Inside `./src/components` we define the jsx code classes to separate concerns of the user interface in `title`, `form` and `weather` components.
- `App.js` includes the code to render the main application by calling the previously created UI components, it also contains the logic for perform and process the data from the external API.

---

## 2. User Story: `State`

- `App.js` we define the state object with the properties needed for the interaction with the different components.
- Perform the logic to update the state of the application and refresh the components from the UI.

---

## 3. User Story: `Styling`

- Installation of bootstrap libraries to style the UI components rendered.
- Use of the properties parameter to exchange data from the main application to the different components.

---
