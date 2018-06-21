class PicturesAdapter {

    constructor(url){
      this.url = url;
    }

    getAllPictureData() {
      return fetch(this.url)
        .then(resp => resp.json());
      // .then(resp => {console.log(resp.json());
      // return resp.json()})
    }

}
