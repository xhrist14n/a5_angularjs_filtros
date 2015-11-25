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
    'FiltersCtrl', 
    function ($scope) {
        var id="filters";
    	activeMenu(id);
        
        $scope.apellidos = 'Portilla Pauca';
        
        $scope.nombres='Christian';
        
        $scope.dinero= 89.9;
        
    }
);