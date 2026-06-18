# DevTinder

- Created a vite + react application
- Removed unnecessary code and create a Hello World app
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar Component to App.jsx file
- Create a NavBar.jsx seprate component file
- Install React Router DOM
- Create BrowserRouter > Routes > Route=/body > RouteChildren
- Create an Outlet inside the Body Component
- Create a Footer
- Create a Login Page
- Install axios
- CORS - Install cors in backend => add middleware in configuration: origin, credentials: true
- Whenever you are making an API call so pass axios => { withCredentials : true }
- Install react-redux + @reduxjs/toolkit => https://redux-toolkit.js.org/tutorials/quick-start
- configureStore => Provider => createSlice => add reducer to store
- Add redux devTool in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user login
- Refactor code => add constant file inside utils + create components folder
- You should not be able to access other routes without login
- If token is not present then, redirect user to login page

Body
NavBar
Route=/ => Feed API
Route=/login => Login API
Route=/connections => Connection List of User
Route=/profile => User Profile
