console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

client.on('connect', function () {
    console.log('connected')
  client.subscribe('april/messages', function (err) {
    if (err) {
      alert("Error in subscribing topic!")
    }
  })
})

client.on('message', function (topic, message) {
  if(topic== document.getElementById('sub-topic').value){
    document.getElementById('display').innerHTML += `<tr><td>${topic}</td><td>${message}</td></tr>`;
  }
})

function publish(){
  var topic = document.getElementById('pub-topic').value;
  var payload = document.getElementById('pub-payload').value;

  if(topic != "" && payload != ""){
    client.publish(topic,payload);
  }
  else{
    alert("Please input!")
  }

}

function subscribe(){
  var sub_topic = document.getElementById('sub-topic').value;
  if(sub_topic != ""){
    client.subscribe(sub_topic,function(error){
      if(error){
        alert("Error in subscribing topic!")
      }
    })
  }
  else{
    alert("Please input!")
  }
}