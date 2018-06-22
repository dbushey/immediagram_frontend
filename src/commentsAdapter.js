class CommentsAdapter {
    constructor(url){
      this.url = url
    }


    createComment(data) {
       fetch(this.url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((resp) => resp.json())
        return data
      }
    }
