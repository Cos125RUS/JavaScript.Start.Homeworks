const container = document.querySelector('div.container');

const titleEl = document.createElement('h2');
titleEl.classList.add('title');
container.appendChild(titleEl);

const videoEl = document.createElement('video');
videoEl.classList.add('video');
container.appendChild(videoEl);

const uiDiv = document.createElement('div');
uiDiv.classList.add('ui');
container.appendChild(uiDiv);

const loadBox = document.createElement('div');
loadBox.classList.add('load-box');
uiDiv.appendChild(loadBox);

const loadIconEl = document.createElement('i');
loadIconEl.classList.add('fa-solid');
loadIconEl.classList.add('fa-download');
loadIconEl.classList.add('load-file-icon');
loadBox.appendChild(loadIconEl);

const loadFileEl = document.createElement('input');
loadFileEl.classList.add('load-file');
loadFileEl.type = 'file';
loadFileEl.name = 'load-file';
loadFileEl.accept = 'video/*';
loadBox.appendChild(loadFileEl);

const fileNameEl = document.createElement('span');
fileNameEl.classList.add('file-name');
loadBox.appendChild(fileNameEl);

const progressBox = document.createElement('div');
progressBox.classList.add('progress-box');
uiDiv.appendChild(progressBox);

const progressEl = document.createElement('input');
progressEl.type = 'range';
progressEl.classList.add('progress');
progressEl.min = 0;
progressEl.max = 100;
progressEl.value = 0;
progressBox.appendChild(progressEl);

const currentTimeEl = document.createElement('p');
currentTimeEl.innerHTML = '0 / 0';
progressBox.appendChild(currentTimeEl);

const playEl = document.createElement('i');
playEl.classList.add('fas');
playEl.classList.add('fa-play');
uiDiv.appendChild(playEl);

const pauseEl = document.createElement('i');
pauseEl.classList.add('fas');
pauseEl.classList.add('fa-pause');
uiDiv.appendChild(pauseEl);

const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 10;
volumeEl.value = 10;
uiDiv.appendChild(volumeEl);



loadIconEl.addEventListener('click', function (e) {
    loadFileEl.click();
});

loadFileEl.addEventListener('change', (e) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    videoEl.src = url;
    fileNameEl.innerText = e.target.files[0].name;
    videoEl.addEventListener('load', function (e) {
        currentTimeEl.innerHTML = '0 / ' + Math.round(videoEl.duration);
    });
});

volumeEl.addEventListener('change', (e) => {
    videoEl.volume = e.target.value / 10;
});

playEl.addEventListener('click', (e) => {
    videoEl.play();
});

pauseEl.addEventListener('click', (e) => {
    videoEl.pause();
});

progressEl.addEventListener('change', (e) => {
    videoEl.currentTime = videoEl.duration * (e.target.value / 100);
});

videoEl.addEventListener('timeupdate', function (e) {
    currentTimeEl.innerText = Math.floor(videoEl.currentTime) + ' / ' + Math.floor(videoEl.duration);
    progressEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
});