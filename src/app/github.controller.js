(function (angular) {
    'use strict'

    angular.module('github')
        .controller('GitHubController', GitHubController);

    GitHubController.$inject = [
        'github.GitHubConstant',
        'github.GitHubService'
    ];

    function GitHubController(GitHubConstant, GitHubService) {
        var vm = this;
        vm.searchRepo = searchRepo;

        vm.username = 'hybris';
        vm.sortBy = GitHubConstant.FULLNAME;
        vm.sortList = GitHubConstant;

        searchRepo();

        function searchRepo() {
            GitHubService.getApi(vm.username, vm.sortBy).then(function (data) {
                vm.repos = data;
            }, function () {
                vm.repos = [];
            });
        }
    }
})(angular);