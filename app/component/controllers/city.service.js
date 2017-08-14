'use strict';

app.service('cityService', ['$http', '$q', '$log',
    function ($http, $q, $log) {


    this.getCities = function () {

        var deferred = $q.defer();

        var url = __env.apiUrl + __env.baseUrl + "/cities";
        $log.debug("API cities Url: ", url);

        $http.get(url).then(function (response) {
            $log.debug("getCities successful: ", response);
            $log.debug("getCities successful: ", response.status);
            $log.debug("getCities successful: ", response.data);

            // return a promise of data
            return deferred.resolve(response.data);
            // return $q.resolve();
            // return response.data;
        }, function (response) {
            // failed
            $log.debug("getCities failed: ", response);
            $log.debug("getCities failed: ", response.status);
            $log.debug("getCities failed: ", response.data);

            return deferred.reject(response.data);
        });

        return deferred.promise;

        // return [{name: "Alex", id: "1"},
        //     {name: "Cairo", id: "2"},
        //     {name: "Matrouh", id: "3"},
        //     {name: "Montreal", id: "4"},
        //     {name: "Montcail", id: "4"},
        //     {name: "Toronto", id: "5"}];

    };

}]);