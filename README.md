# Final Project

For this application I decided to go with a dynamic web app powered by the MERN tech stack. MERN is made up of MongoDB, Express JS, React JS, and Node JS. The application is a 3-tier application where the presentation tier is a React JS frontend, the application tier is the Express JS backend, which is itself on top of Node JS, and the data tier is a MongoDB database. All 3 tiers each have their own service via docker-compose. The backend uses port 9000, the database uses port 27017, and the frontend uses port 3000.

## Running the App Locally
The following commands are applicable to Windows PowerShell terminal

After cloning the repo and navigating to the project's root folder, run the docker-compose using:
```
docker-compose up
```
Once all 3 containers are running you can navigate to localhost:3000 to see the React frontend. 