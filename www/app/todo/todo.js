(function() {
    'use strict';

    angular.module('todo').controller('TodoCtrl', ['$state', todoCtrl]);

    function todoCtrl($state) {
        var self = this;
        self.input = "";
        self.data = [];
        self.add = function() {

            self.data.push({
                todo: self.input
            });
            self.input = "";
            console.log(self.data);
        };

    };
})();