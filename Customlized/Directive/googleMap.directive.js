/*
 *@param ngModel {object} {Latitude:number,Longitude:number}
 * @param zoom {number} number
 * @example <google-map ng-model={location}></google-map>
 */

(function () {
    'use strict';
    var app = angular.module('uiGmapgoogle-maps');
    app.component('googleMap', googleMap());

    function googleMap() {
        return {
            templateUrl: 'SearchBox.tpl',
            controller: googleMapController,
            controllerAs: 'Ctrl',
            bindings: {
                searchParentDiv: '@?',
                draggable: '=?',
                type: '@',
                ngModel: '=',
                zoom: '=?',
                MarkerDraggable: '@'
            }
        };
    }
    googleMapController.$inject = ['$timeout', '$log', '$scope', 'uiGmapIsReady'];
    function googleMapController($timeout, $log, $scope, uiGmapIsReady) {
        var vm = this;

        vm.Center = {};
        vm.Marker = {};
        vm.MarkerOption = {
            draggable: vm.draggable
        }
        SetDefaultValue(vm.Center, vm.ngModel); //預設地圖中心
        SetDefaultValue(vm.Marker, vm.ngModel); //預設Marker 中心
        vm.zoom = vm.zoom || 13;
        vm.SearchBox = {
            template: 'SearchBox',
            events: {
                places_changed: function (result) {
                    if (result.getPlaces() != undefined) {
                        var cooridnate = result.getPlaces()[0].geometry.location;
                        vm.Marker.latitude = cooridnate.lat();
                        vm.Marker.longitude = cooridnate.lng();
                        vm.Center.latitude = cooridnate.lat();
                        vm.Center.longitude = cooridnate.lng();
                    }
                }
            }
        }
        $scope.$watch('Ctrl.Marker', function (newValue, oldValue) {
            if (!newValue) return;
            if (vm.ngModel == undefined) vm.ngModel = {};
            vm.ngModel.Latitude = newValue.latitude;
            vm.ngModel.Longitude = newValue.longitude;
        }, true);
        active();
        function active() {
            //Resize avoid google map  render partical error
            //縮放大小和第二次執行在tab會跑掉位置的fix
            $timeout(function () {
                vm.Open = true;
                AvoidGoogleMapRenderParticalMap();
            });
        }
        //Private

        function SetDefaultValue(target, model) {
            var defaultLat = 22.6292807;
            var defaultLng = 120.322124;
            if (model == undefined || model == null) {
                target.latitude = defaultLat;
                target.longitude = defaultLng;
            } else {
                target.latitude = model.Latitude;
                target.longitude = model.Longitude;
            }
        }

        function AvoidGoogleMapRenderParticalMap() {

            uiGmapIsReady.promise(1).then(function (instances) {
                instances.forEach(function (inst) {
                    google.maps.event.trigger(inst.map, 'resize');

                });
            });
        }

    }

    app.run(function ($templateCache) {
        $templateCache.put('SearchBox', '<input type="text" placeholder="請輸入地標" style="margin-top:10px" placeholder="Search">');
        $templateCache.put('Org', '<section ng-if="Ctrl.Open"><ui-gmap-google-map center="Ctrl.Center" zoom="Ctrl.zoom" data-tap-disabled="true"> ' +
                           '<ui-gmap-search-box template="Ctrl.SearchBox.template" events="Ctrl.SearchBox.events"></ui-gmap-search-box>' +
                           '<ui-gmap-marker coords="Ctrl.Marker" options="{draggable:true}" idkey="1">' +
                           '</ui-gmap-marker>' +
                           '</ui-gmap-google-map></section>');

        $templateCache.put('MarkerOnly.tpl', '<section ng-if="Ctrl.Open"><ui-gmap-google-map center="Ctrl.Center" zoom="Ctrl.zoom" data-tap-disabled="true"> ' +
                           '<ui-gmap-marker coords="Ctrl.Marker" options="Ctrl.MarkerOption" idkey="1">' +
                           '</ui-gmap-marker>' +
                           '</ui-gmap-google-map></section>');
        $templateCache.put('SearchBox.tpl', '<section ng-if="Ctrl.Open"><ui-gmap-google-map center="Ctrl.Center" zoom="Ctrl.zoom" data-tap-disabled="true"> ' +
            '<ui-gmap-search-box parentdiv="Ctrl.searchParentDiv" template="Ctrl.SearchBox.template" events="Ctrl.SearchBox.events" options="Ctrl.SearchBox.options"></ui-gmap-search-box>' +
                   '<ui-gmap-marker coords="Ctrl.Marker" options="Ctrl.MarkerOption" idkey="1">' +
                   '</ui-gmap-marker>' +
                   '</ui-gmap-google-map></section>');
    });

})();