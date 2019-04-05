const cloudinary = require('cloudinary');
const axios = require('axios');
const multer = require('multer');

const router = require("express").Router();

// Configure cloudinary with information from your .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer helps us with multi-part form data (Forms with files)
// We're going to use memory storage since we're not saving to disk
// The file will be streamed from the upload straight to cloudinary via our middleware
const storage = multer.memoryStorage();
const multerUpload = multer({ storage });

// Express route where we receive files from the client
// passing multer middleware
router.post('/', multerUpload.single('file'), (req, res) => {
  console.log('Got file:', req.file.originalname);
  console.log('Extra form fields:', req.body);

  // Send the file to Cloudinary
  // resource_type should be "video" for audio files!
  // https://cloudinary.com/documentation/image_upload_api_reference
  cloudinary.uploader.upload_stream(cloudinaryDone, { resource_type: "video" }).end(req.file.buffer);

  // After the upload is completed, this callback gets called
  function cloudinaryDone(result) {
    if (result.error) {
      console.log("Error in cloudinary.uploader.upload_stream\n", result.error);
      return;
    }

    console.log("Cloudinary audio info: ", result.audio);

    // If you want to see all the data that Cloudinary comes back with
    // console.log(result);
    
    console.log('Cloudinary url', result.url);
    
    // Send back the working URL for the client to display.
    res.json({ cdn_url: result.url });
  }
});

module.exports = router;