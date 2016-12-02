/**
* @auther ChangYinShung
* @copyright  豐碩資訊有限公司 @ 2016
* @description  For configuration Setting
*/
(function () {
    'use strict';

    angular
        .module('uiGmapgoogle-maps')
        .config(angularGoogleMaps);
        
    angularGoogleMaps.$inject = ['uiGmapGoogleMapApiProvider'];
    function angularGoogleMaps(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyChOr9qCcGlBjJwOKIQF9DimZE3dPqM0h8', //Google API KEY
            //v: '3', //defaults to latest 3.X anyhow
            libraries: 'places',
            language:'zh-tw'
        });
    }
})();