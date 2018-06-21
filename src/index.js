function createPictureObjs(pictureData){
  return pictureData.map(pic => new Picture(pic));
}

function renderPictures(pictureArray){
  const pictureListTag = document.getElementById('picture-list');
  const picturesHTML = pictureArray.map(pic => pic.createPictureHTML()).join('');

  pictureListTag.innerHTML += picturesHTML;
}

function initializeApp() {
  const pictureAPI = new PicturesAdapter('http://localhost:3000/pictures');

  pictureAPI.getAllPictureData()
    .then(createPictureObjs)
    .then(renderPictures);
}

document.addEventListener('DOMContentLoaded', initializeApp);
