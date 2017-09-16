var beacon_util = {};

beacon_util.beaconRegions =
[
	{
		id: 'tainan',
		uuid:'B01BCFC0-8F4B-11E5-A837-0821A8FF9A66'
	}
];

// Record the received collections (Only for Tests, use local storage instead)
beacon_util.collections = {}

beacon_util.init_beacon_detection = function()
{
	// Specify a shortcut for the location manager that
	// has the iBeacon functions.
	window.locationManager = cordova.plugins.locationManager;

	locationManager.isBluetoothEnabled()
  	.then(function(isEnabled) {
    	console.log("isEnabled: " + isEnabled);
    	if (!isEnabled) {
    		if(device.platform == 'Android'){
    			myApp.confirm('開啟藍牙就能獲得特殊收藏品哦！！是否開啟？', '啟用藍芽？',
    				function () {
    					locationManager.enableBluetooth();
    				}
    			);
    	  }
        else{
        	myApp.alert('開啟藍牙就能獲得特殊收藏品哦！！', '啟用藍芽？');
        }
      }
    })
    .fail()
    .done();

  //Retrieve Collection Record from local storage
  for(var i = 0; i < ftd.length; i++)
  {
    var collection = 'Collection' + i.toString() + '2';
    beacon_util.collections[collection] = window.localStorage.getItem(collection);
  }
  beacon_util.setIBeaconCallback();
}


beacon_util.setIBeaconCallback = function()
{
	// The delegate object contains iBeacon callback functions.
	var delegate = new cordova.plugins.locationManager.Delegate();

	delegate.didRangeBeaconsInRegion = function(pluginResult)
	{
		beacon_util.didRangeBeaconsInRegion(pluginResult);
	}
	
	delegate.didEnterRegion = function(pluginResult)
	{
		
	}

	delegate.didExitRegion = function(pluginResult)
	{

	}

	// Set the delegate object to use.
	locationManager.setDelegate(delegate);
	//IOS authorization
	locationManager.requestAlwaysAuthorization();
	
	
}

beacon_util.startScanForBeacons = function()
{
	// Start monitoring and ranging our beacons.
	for (var r in beacon_util.beaconRegions)
	{
		var region = beacon_util.beaconRegions[r];

		var beaconRegion = new locationManager.BeaconRegion(
			region.id, region.uuid, region.major, region.minor);
		
		// Start monitoring.
		locationManager.startMonitoringForRegion(beaconRegion)
			.fail()
			.done()

		// Start ranging.
		locationManager.startRangingBeaconsInRegion(beaconRegion)
			.fail()
			.done()
	}
}

beacon_util.stopScanForBeacons = function()
{
  // Stop monitoring and ranging our beacons.
  for (var r in beacon_util.beaconRegions)
  {
    var region = beacon_util.beaconRegions[r];

    var beaconRegion = new locationManager.BeaconRegion(
      region.id, region.uuid, region.major, region.minor);
    
    // Stop monitoring.
    locationManager.stopMonitoringForRegion(beaconRegion)
      .fail()
      .done()

    // Stop ranging.
    locationManager.stopRangingBeaconsInRegion(beaconRegion)
      .fail()
      .done()
  }
}

beacon_util.transformToPlatformID = function(beacon)
{
  var uuid = beacon.uuid;
  var major = beacon.major;
  var minor = beacon.minor;
  
  var shortUUID = beacon_util.mappingShortUUID(uuid);
  
  //The ID on the SPOT platform
  var ID = shortUUID +'-'+ major +'-'+ minor;
  
  return ID;
}

beacon_util.mappingShortUUID = function(UUID)
{
  var shortUUID = "";
  UUID = UUID.toUpperCase();
  if(UUID == "B01BCFC0-8F4B-11E5-A837-0821A8FF9A66")
    shortUUID = "801";
  else if(UUID == "B01BCFC0-8F4B-11E5-A837-0821A8FFFFFF")
    shortUUID = "995801";
  else if(UUID == "D3556E50-C856-11E3-8408-0221A885EF40")
    shortUUID = "1";
  else if(UUID == "4408D700-8CC3-42E6-94D5-ADA446CF2D72")
    shortUUID = "2";
  else if(UUID == "D3556E50-C856-11E3-8408-0221A8FFEF40")
    shortUUID = "1";
  else if(UUID == "D3556E50-C856-11E3-8408-0221A8FFFFFF")
    shortUUID = "9951";
  else if(UUID == "D3556E50-C856-11E3-8408-0221A885FFFF")
    shortUUID = "9951";
  else
    shortUUID = "000";
  
  return shortUUID;
  
}

// Actions when any beacon is in range
beacon_util.didRangeBeaconsInRegion = function(pluginResult)
{ 
  // There must be a beacon within range.
  if (0 == pluginResult.beacons.length)
  {
    return;
  }

  for (var i=0;i < pluginResult.beacons.length ; i++)
  {
    var beacon = pluginResult.beacons[i];

    var platformID = beacon_util.transformToPlatformID(beacon)

    if ((beacon.proximity == 'ProximityImmediate' || beacon.proximity == 'ProximityNear' || beacon.proximity == 'ProximityFar'))
    {
      for (var station = 0; station < ftd.length; station++)
      {
        var collection = 'Collection' + station.toString() + '2';
        if( !beacon_util.collections[collection] )
        {
          if( ftd[station].beacons.indexOf(platformID) != -1)
          {
            // Get the collection of the station 
            myApp.addNotification({
                title: '獲得收藏品',
                message: '你已獲得' + station + '的收藏品: '+ ftd[station].items[1].title,
            });

            beacon_util.collections[collection] = true;
            window.localStorage.setItem(collection, true);
            
            break;
          }
        }
      }
    }

    if (beacon.proximity == 'ProximityUnknown')
    {

    }
  }
  return 
}
