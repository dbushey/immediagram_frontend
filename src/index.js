
function createPictureObjs(pictureData){
  return pictureData.map(pic => new Picture(pic))
}

function renderPictures(pictureArray){
  const pictureListTag = document.getElementById('picture-list')

  const picturesHTML = pictureArray.map(pic => pic.createPictureHTML()).join('')

  pictureListTag.innerHTML += picturesHTML
}

///////////////////////////////////////////////

function createCommentObj(resp){
  console.log(resp)
  return new Comment(resp)
}

function renderComment(commentObj){


}




 ////////////////////////////////////////////////

function initializeApp() {

  const pictureAPI = new PicturesAdapter('http://localhost:3000/pictures')

  pictureAPI.getAllPictureData()
  .then(createPictureObjs)
  .then(renderPictures)
  .then(renderForm)


////////////////////////////////////////////////

function renderForm(){
  const commentFormTag = document.querySelectorAll('.comment-form')
console.dir(commentFormTag)
  commentFormTag.forEach(one => one.addEventListener("submit", getInput) )


  //console.log("hi")
  function getInput(e){
    console.log(e.target.comment.value)
    e.preventDefault();
    data = {
      picture_id: e.target.dataset.pictureId,
      content: e.target.comment.value
    }


    const commentForm = new CommentsAdapter('http://localhost:3000/comments')

    commentForm.createComment(data)
     // .then(createCommentObj)
     // .then(renderComment)
  }


}




}

document.addEventListener('DOMContentLoaded', initializeApp)
