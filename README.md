# Coupon Check

## Project Description

This is a simple app to act as a utility to validate coupon codes. The main page contains an input box for the user to enter the coupon code they wish to validate, and a button to submit the code for validation. Upon submission, the inputted coupon code is sent to the backend server, which determines whether the coupon code is valid or not, and then sends its response back to the web page. The user is then told whether the coupon code they entered is valid or not.

## Usage

### Setup

- `git clone` the repository into a directory
- Navigate into the newly cloned directory and run `npm install` if using npm or `yarn install` if using yarn to install the backend dependencies.
- Navigate into the `frontend` directory and run `npm install` or `yarn install` as before to install the dependencies for the frontend.

### Running in development mode

Once the setup has been completed, take the following steps to run the app in development mode

- in the `frontend` directory run `npm run start` if using npm or `yarn start` if using yarn. This runs the React frontend in development mode its own web server.
- - The React development server will run on port 3000

- Navigate to the root directory of the project and run `npm run dev` or `yarn dev` to start the Express backend in development mode
- - The port the Express server will run on can be specified using the PORT environment variable. By default it will run on port 5000 
- - If you choose to modify the port the backend runs on you will need to change the `proxy` line in `frontend/tsconfig.json` accordingly to ensure the frontend correctly proxies requests to the backend.

### Running in production mode

Once the setup has been completed, take the following steps to run the app in production mode

- Navigate to the `frontend` directory, run `npm run build` or `yarn build` and wait for the build process to finish to build the frontend.
- Navigate to the root directory of the project and run `npm run build` or `yarn build` to build the backend
- The project is now ready to be started. Run `npm run start` or `yarn start` to start the project
- - As with the development mode, the port the server runs on can be specified using the PORT environment variable. The server will run on port 5000 by default.


