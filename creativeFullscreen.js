function creativeGenerator(url, height, width) {
  const createVids = document.createElement("video");
  createVids.setAttribute('id', 'video')
  createVids.setAttribute('src', `${url !== undefined ? url : 'https://upload.wikimedia.org/wikipedia/commons/transcoded/0/05/The_Power_of_Hundreds_%28video_game%29_teaser_trailer_HD.webm/The_Power_of_Hundreds_%28video_game%29_teaser_trailer_HD.webm.360p.vp9.webm'}`);
  createVids.setAttribute('controls', 'false');
  createVids.setAttribute('type', 'video/mp4');
  createVids.setAttribute('autoplay', '');
  createVids.style.display = 'none';
  // Inject video element to the body
  document.body.appendChild(createVids);
  // Create the canvas
  const createCanvas = document.createElement('canvas');
  createCanvas.setAttribute('id', 'canvas');
  // Resize the canvas top adapt to the mobile device
  createCanvas.width = width !== undefined ? width : window.innerWidth ;
  createCanvas.height = height !== undefined ? height : window.innerHeight;
  //Inject the canvas to the body
  document.body.appendChild(createCanvas);

  // Define content injected
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const video = document.getElementById('video');


  // Define volume & style
  const volumeIco = document.createElement("img");
  volumeIco.setAttribute('src', 'http://simpleicon.com/wp-content/uploads/volume-mute.png');
  volumeIco.style.width = "10%";
  volumeIco.style.height = "10%";
  volumeIco.style.position = "absolute";
  volumeIco.style.top = "5%";
  volumeIco.style.right = "5%";
  document.body.appendChild(volumeIco);

  // Define reload & style
  const reloadIco = document.createElement("img");
  reloadIco.setAttribute('src', 'https://cdn.iconscout.com/icon/free/png-256/reload-91-475019.png');
  reloadIco.style.width = '10%';
  reloadIco.style.height = '10%';
  reloadIco.style.position = 'absolute';
  reloadIco.style.top = '15%';
  reloadIco.style.right = '5%';
  document.body.appendChild(reloadIco);

  // Event
  // Cut the sound at click event on the picture
  canvas.addEventListener('click', () => {
    if (!video.paused) {
      video.pause();
    }
    else if (video.paused) {
      video.play();
    }
  })
  volumeIco.addEventListener('click', () => video.muted = !video.muted);
  // Reload the video at click event
  reloadIco.addEventListener('click', () => video.load());
  video.addEventListener('play', function () {
    const $this = this; //cache
    video.style.display = "none";
    (function loop() {
      if (!$this.paused && !$this.ended) {
        ctx.drawImage($this, 0, 0, window.innerWidth, window.innerHeight);
        setTimeout(loop, 1000 / 30); // drawing at 30fps
      }
    })();
  });
};