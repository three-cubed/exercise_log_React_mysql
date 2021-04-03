This application is fully functional and ready to use. There are, however, various improvements that I wish to make, and various features that I wish to introduce, so this is an on-going project.

### Project overview
This is a relatively simple "SERN stack" application, 
i.e. a full-stack application using an **S**QL database + **E**xpress + **R**eact + **N**odeJS. 
The basic concept of the application is to allow a user to record the exercise they have done.

The application is a variation upon my similar project using a MongoDB database (which was thus a MERN stack application.)

Users can create records of their exercise as 'exercise events' which are saved on the database. 
The application displays existing records from the database. 
The user can also delete any existing records. 

### Preparing to use the application
To use this application, you must have installed Node.js and have an installation of, or connection to, MySQL.

On first being run, the application will create a database (called `exercise_log_sern`), and a table within it.

*Before* first running the application, however, the user must create a `.env` file in the root directory, containing relevant MySQL connection information for the application to use: `MYSQL_HOST=`, `MYSQL_USER=`, and `MYSQL_PASSWORD=`. Note that these must be followed by strings in quotes. 

An example would be:
`MYSQL_HOST='localhost'`  
`MYSQL_USER='root'`  
`MYSQL_PASSWORD='hello4321'`  

Before first use of the application, the command `npm install` must be used on both the root directory and the client directory.

### Running the application
Once the machine and application are prepared, as explained above, the application is run with the command `npm start`, to be used on both the root directory and the client directory.

### Tests 
The application is not particularly complicated, but tests can be found in `/client/src/components/__tests__` and in `/client/src/App.test.js`. They can be run in the *client* directory by using `npm test`, or, for a more verbose version, `npm test -- --verbose`.

### Other notes
The initial set-up uses the standard create-react-app package from NPM in the client sub-directory (including the various boilerplates.)
