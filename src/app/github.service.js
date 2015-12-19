(function (angular) {
    'use strict'

    angular.module('github')
        .service('github.GitHubService', GitHubService);

    GitHubService.$inject = [
        'github.GitHubFactory'
    ];

    function GitHubService(GitHubFactory) {
        this.getApi = getApi;

        function getApi(user, sortBy) {
            return GitHubFactory.gitHubResource().query({
                user: user,
                sort: sortBy.toLowerCase().replace(/ /g, "_")
            }).$promise;
        }
    }
})(angular);