class Comment {

  constructor({id, content, picture_id}){
      this.id = id;
      this.content = content;
      this.picture_id = picture_id;
  }

  createCommentHTML(){
    return `
        <li id="comment-${this.id}">${this.content}</li>
    `;
  }
}
