'use strict';

app.controller('SimpleCtrl', ['$scope', '$log', 'cityService',
    function ($scope, $log, cityService) {

        $scope.cities = [];

        $scope.loadCities = function (query) {

            var searchText = query.toLowerCase();
            $log.debug("tag input search query: ", searchText);

            // we can return a promise
            return cityService.getCities().then(function (data) {
                return filterCities(data, searchText)
            }, function (data) {
                $log.debug("============= ERROR ==============");

                //todo how to handle the error
            });

        };

        function filterCities(cities, searchText){
            var filtered = [];
            angular.forEach(cities, function (city) {

                $log.debug("----> city: ", city);
                $log.debug("----> city: ", city.name);

                if (city.name.toLowerCase().indexOf(searchText) >= 0) {

                    $log.debug("----> inside");
                    filtered.push(city);
                }
            });

            $log.debug("filtered cities: ", filtered);
            return filtered;
        }

    }]);