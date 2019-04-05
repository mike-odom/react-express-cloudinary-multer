# Create React Express App

## About This Boilerplate

This is a working example using React / Express / Node / Multer / Cloudify

It allows for uplading audio/video files to Cloudify and getting the URL back

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

There's no database functionality here, but it does setup Sequelize

##

To get this example working, you'll need to add a .env file with the following.

CLOUDINARY_CLOUD_NAME=adsf
CLOUDINARY_API_KEY=asdf
CLOUDINARY_API_SECRET=asdf

DB_USERNAME=root
DB_PASSWORD=whateveryourpasswordis
DB_NAME=our_group_project_database_name
DB_HOST=127.0.0.1