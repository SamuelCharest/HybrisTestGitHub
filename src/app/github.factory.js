(function (angular) {
    'use strict'

    angular.module('github')
        .factory('github.GitHubFactory', GitHubFactory);

    GitHubFactory.$inject = [
        '$resource'
    ];

    function GitHubFactory($resource) {
        return {
            gitHubResource: gitHubResource
        };

        function gitHubResource() {
            return $resource('https://api.github.com/users/:user/repos');
        }
    }
})(angular);