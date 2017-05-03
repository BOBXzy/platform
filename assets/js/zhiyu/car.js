/**
 * Created by zhiyu on 2017/3/27.
 */
$(window).on('load', function() {
    var map = new AMap.Map('mapContainer', {
        resizeEnable: true,
        city:'杭州',
        zoom: 12
    });
    map.setMapStyle('blue_night');

    // 定义小车的点
    var CarMarkers = [{
        id:1,
        icon: "../platform/assets/img/people.png",
        position: [120.155105,30.270681],
        platenumber: "浙AV506C"

    },{
        id:2,
        icon: "http://webapi.amap.com/images/car.png",
        position: [120.03932,30.225342],
        platenumber: "浙AV506C"

    },{
        id:3,
        icon: "http://webapi.amap.com/images/car.png",
        position: [120.267404,30.164806],
        platenumber: "浙AV506C"

    }];

    var PassengerMarkers = [{
        id:1,
        icon: "../../img/people.png",
        position: [120.155105,30.270681],
        platenumber: "浙AV506C"

    },{
        id:2,
        icon: "http://webapi.amap.com/images/car.png",
        position: [120.03932,30.225342],
        platenumber: "浙AV506C"

    },{
        id:3,
        icon: "http://webapi.amap.com/images/car.png",
        position: [120.267404,30.164806],
        platenumber: "浙AV506C"

    }];

    PassengerMarkers.forEach(function (marker) {

    });






    CarMarkers.forEach(function(marker){
        mymarker=new AMap.Marker({
            map: map,
            icon: marker.icon,
            position: [marker.position[0], marker.position[1]],
            offset: new AMap.Pixel(-26, -13),
            autoRotation: true,
        });
    });
    map.setFitView();





});
//map html 中的地图 实现人工叫车











