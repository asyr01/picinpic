const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to select media stream pass to video element, then play
async function selectMediaStream(){
    try {
      styleMedia;
    } catch(err) {
        // Catch errors
        console.log('Whoops, error!', err);
    }
}


// On Load
selectMediaStream();