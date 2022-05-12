# Task Instructions

After you've completed the tasks below, please follow these [instructions](../../../resources/GET_STARTED.md#how-to-submit-assignments) for submitting your assignment.

## TASK 1 - Initialize the DataStoreProvider

- In this task you will import a DataStoreProvider and render it as a wrapper around the application contents
- Specify the namespace "my-custom-app-namespace-1234"
- Check comments `@TODO-1`
- You will be working in the `src/App.js` component

## TASK 2 - Render a list of saved visualization objects

- Check the comments in the `src/VisualizationList.js` component starting with `@TODO-2`
- In this task you will use the `useSavedObjectList` hook to show a list of saved objects in your userDataStore namespace

## TASK 3 - Support adding new visualizations

- Here you will be working in the `src/VisualizationList.js` and `src/AddControl.js` components
- Check for comments starting with `@TODO-3`
- The goal of this task is to make the Add button work

## TASK 4 - Support deleting visualizations

- Here you will be working in the `src/RemoveButton.js` component
- Check for comments starting with `@TODO-4`
- The goal of this task is to make the Remove buttons work

## TASK 5 - Add offline support for your app

- Enabe PWA in d2.config.js
- Use the `useOnlineStatus` hook from `@dhis2/app-runtime` to disable all interactivity in the application when the user is offline

## Reference

- Check the [slides](https://docs.google.com/presentation/d/1OHwNn4TABl4dRoTTAAmyDw3GQo41HGgmAZ4MaTzbTmo/edit?usp=sharing) for code examples for these 4 tasks
- DataStore [API documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-236/data-store.html)
- App Service Datastore [documentation](https://github.com/dhis2/app-service-datastore)
