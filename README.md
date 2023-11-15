# WebTect

Project inspired by a course on machine learning.

## Installation
1. Download project
2. Inside the project folder, install all the dependencies running `npm install`
3. Start the app running `npm start`
4. See the demo at `http://localhost:300` 
5. To stop the process enter `CTRL+C` in command line, from which the app was started 


## Details

### Public
The models used for detection are stored in the `models` folder: there are models for gender, age and face detection. Mobilenet is used as the backbone, the base is MTCNN. In order to replace some models with others, you should carefully watch the file names and imports.


`index.html` - demo skeleton, where you can add necessary scripts, styles and such.

### Src
The `components` folder contains the main elements of the page: the button that takes the photo, the camera classes themselves, the gallery and so on. Styles are located next to their elements.

The `helpers` folder contains elements for convenient visualization of the result: emoticons, faces, as well as the use of `face-api.js`. For a deeper acquaintance it is recommended to look through their contents.

`serviceWorker.js` - for working with the host and launching the application.


## Misc.
- To work offline and increase speed in `index.js` file you can replace `unregister()` with `register()`, more details here: https://create-react-app.dev/docs/making-a-progressive-web-app/.

## TODO:
- video face recognition
- photo download (under development)
- cache facial expression masks so that they are not created anew each time when selecting a photo from the gallery
