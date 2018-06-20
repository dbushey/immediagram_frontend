class PicturesAdapter {
    constructor(url){
      this.url = url
    }


     getAllPictureData() {
        return fetch(this.url)
        // .then(resp => {console.log(resp.json());
        // return resp.json()})
        .then(resp => resp.json())

    }
}
