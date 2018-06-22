class Picture {
  constructor({id, photographer, description, url, like_count, comments }){
      this.id = id
      this.photographer = photographer
      this.description = description
      this.url = url
      this.likeCount = like_count

      this.comments = comments.map(commentData => new Comment(commentData))
  }

  createPictureHTML(){
    return `
    <li>
      <ul id="picture-${this.id}">
       <li><img src="${this.url}" alt="${this.description}"></li>
       <li>${this.description}</li>
       <li>${this.photographer}</li>
       <li>${this.likeCount}</li>
       <ul>
        ${this.comments.map(comment => comment.createCommentHTML())}
      </ul>
      <form class="comment-form" data-picture-id="${this.id}">
        <input id="comment-input-${this.id}" type="text" name="comment" placeholder="Add Comment"/>
        <input type="submit" value="Submit"/>
      </form>
      </ul>
    </li>
    `
  }



}
