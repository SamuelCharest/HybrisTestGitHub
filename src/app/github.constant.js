(function (angular) {
    'use strict'

    angular.module('github')
        .constant('github.GitHubConstant', {
            CREATED: 'Created',
            UPDATED: 'Updated',
            PUSHED: 'Pushed',
            FULLNAME: 'Full Name'
        });
})(angular);