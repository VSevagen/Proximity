# Instructions

For a quick view of the work done, I've deployed the website on netlify. Please find it at the following link, [https://kind-ptolemy-1b353a.netlify.app/](https://kind-ptolemy-1b353a.netlify.app/)

### Steps to run locally
1. Make sure you have node and npm installed. (I'm running node v16.6.1 and npm
   8.4.0 in my system).
2. Run `npm install` to install the required dependencies.
3. After installing the dependencies, run `npm start` to start the development
   environment.
4. It should automatically open a new tab in your browser but if it does not,
   open [http://localhost:3000](http://localhost:3000) to view it in your
   browser.

### Structure of directory
1. `src` - contains all the components, styles, fonts, state and static assets
   used in the project.
2. `components` - contains the website components.
    1. `Header` is the header part of the website, including the headerbar, the
       language selector, the video and video poster.
    2. `Footer` is the footer of the website, containing the privacy statement
       and the social icons.
    3. `Mission` is the first section of the website, following the `Header`
       component.
    4. `SolvedProb` is the second part of the website, following the `Mission`
       component.
    5. `elements` is the directory containing messy components that are used in
       the above described components. I'm calling them as messy because they
       are repetitive and contain a lot of classNames by default.
3. `styles` - the collection of stylesheets used within the website.
4. `fonts` - collection of fonts used.
5. `static` - collection of static assets used in the project.
6. `state` - directory containing the redux store and the reducers to deal with
   the `lang` state value. It is used to set the language used on the website
   and change all the text accordingly.

### Packages used
1. `React` - used as the main library for developing the interface
2. `react-redux` - used to handle and pass the `lang` state value to every
   components without worrying about hierarchical structure of components. (
   Also Mr Danilo requested the use of react redux ).