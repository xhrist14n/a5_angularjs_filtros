/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'DirectivesCtrl', 
    function ($scope) {
        var id="directives";
    	activeMenu(id);
        
        $scope.nombres=[
            {
                nombre:'juan',
                pais:'peru'
            },
            {
                nombre:'pedro',
                pais:'paraguay'
            },
            {
                nombre:'carlos',
                pais:'brasil'
            }
        ];
    }
);