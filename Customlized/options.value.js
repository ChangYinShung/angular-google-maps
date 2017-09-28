/**
* @auther ChangYinShung
* @copyright  豐碩資訊有限公司 @ 2016
* @description  For Value Setting
*/
(function (app) {
    'use strict';
    app.value('ycGmapValue', 預設);

    /**
     * @description 取的自訂預設 GoogleMap, map , maker 
     * @param map {object} GoogleMap's MapOptions object
     * @param marker {object} GoogleMap's MarkerOptions object
     */

    function 預設(map, marker) {

        /**
         * @link https://developers.google.com/maps/documentation/javascript/reference#MapOptions
         */
        var defaultOption = {
            disableDefaultUI: true,
            draggable: true,
            disableDoubleClickZoom: true,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            styles: 預設地圖樣式()
        };
        angular.extend(defaultOption, map);

        /**
         * @link https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions
         */
        var defaultMarker = {
            options: {
                icon: Root + 'Content/marker.png'
            }
        }
        angular.extend(defaultMarker.options, marker);

        var result = {
            Map: defaultOption,
            Marker: defaultMarker
        }

        return result;

    };

    function 預設地圖樣式() {
        /**
         * @link  https://snazzymaps.com/style/71410/usc or StylesTemplates
         */
        var mapStyle = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 51
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 30
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 40
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
        ]
        return mapStyle;
    }
})(angular.module('uiGmapgoogle-maps'));