const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to select media stream pass to video element, then play
async function selectMediaStream(){
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream; // depends selected media.
      videoElement.onloadedmetadata = () => {
          videoElement.play();
      }
    } catch(err) {
        // Catch errors
        console.log('Whoops, error!', err);
    }
}

button.addEventListener('click', async () => {
   // Disable button
   button.disabled = true;

   // Start picture in picture automatically.
   await videoElement.requestPictureInPicture();

   // Reset Button
   button.disabled = false;
});

// On Load
selectMediaStream();