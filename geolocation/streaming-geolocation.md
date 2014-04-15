### Transportation Classification ExampleA random forest classifier can be used to help classify a stream of transportation sensor data.  Assume we have historical (training) data regarding user GPS data with classification labels for resting, walking, running, and riding a train.#### Streaming target data in

Here's a sample [client](http://ws-clients.algorithms.io/geolocation.html) using HTML5 to retrieve and send geolocation data to Algorithsm.io.
First it uses socket.io to connect and open socket to Algorithms.io 

	socket = io.connect('http://ws.algorithms.io:8080');

Use this to get geolocation data, which is retrieved by ``window.navigator.geolocation.watchPosition``  

    	socket.emit('event_save', {
            'authToken': '<auth token>',
            'device_id': 'geolocation1',
            'label': $('#input_label').val(),
            'data': {
            	'timestamp': position.timestamp;
               	'latitude': position.coords.latitude,
          		'longitude': position.coords.longitude,
         		'accuracy': position.coords.accuracy,
              	'speed': position.coords.speed
            }
        });

* ``label`` is used when the data used to train the machine learning model.  If not available, it can be null if only classification results are needed
  
* The ``speed`` attribute denotes the magnitude of the horizontal component of the hosting device's current velocity and is specified in meters per second. If the **implementation** cannot provide speed information, the value of this attribute must be null, The ``speed`` and time duration will then be **calculated** by default geodesic function and used by classifiers as independent variables. Otherwise, it will be used as-in for classifiers


The data streamed to Algorithms.io will look like these:

| timestamp | latitude | longitude | accuracy | speed | ``label`` | 
| :-------- | :------- | :-------- | :------- | :---- | :---- |
|1387357180.338160|35.511416|139.619904|65|null|rest|
|1387357180.346586|35.511416|139.619904|65|null|rest|
|1387357180.902525|35.511463|139.619745|65|null|rest|
|1387357182.047721|35.511505|139.620024|65|null|walk|
|1387357191.938179|35.511496|139.619697|65|null|walk|
|1387357193.084510|35.511515|139.619998|65|null|run|
#### Receiving classifications

	socket.on('random_forest_geolocation_classified_result', function(data)
	{
    	$('#motionClassified').text(data.data);
    });