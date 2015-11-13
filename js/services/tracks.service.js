let TracksService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/tracks';

  let checkAuth = function () {
    return true;
  };

  this.getTracks = function () {
    if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getTracks = function (tracksId) {
    if (checkAuth()){      
      return $http({
        method: 'GET',
        url: url + '/' + tracksId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let Tracks = function (obj) {
    this.track = obj.name;
    this.artist = obj.maker;
    this.hasHeard= false;
  };

  this.addTracks = function (obj) {
    let t = new Tracks(obj);
    return $http.post(url, w, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

  this.rate = function (obj, rating) {
    obj.rating = rating;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

};

TracksService.$inject = ['$http', 'PARSE'];

export default TracksService;