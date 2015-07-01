app
  .factory('PokemonModel', function ($q, $http) {

    var PokemonModel = {};

    PokemonModel.get = function () {
      var deferred = $q.defer();

      if ( USE_MOCK_DATA ){
        deferred.resolve(res.results.collection1); // see mock_data.js
        return deferred.promise;
      }

      $http
       .jsonp("https://www.kimonolabs.com/api/74dfm89w?apikey=Zgn83shuWLFhlB7k5n4arKz3Z18Z5lvr&callback=JSON_CALLBACK")
       .success(function(res){
          deferred.resolve(res.results.collection1);
        })
       .error(function (rejection) {
          deferred.reject(rejection);
       });

      return deferred.promise;
    };

    return PokemonModel;
  });
