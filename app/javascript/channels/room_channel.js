import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("connected")
    setTimeout(()=>{
      let roomId = $("[data-channel='rooms']").data('room-id')
      console.log($("[data-channel='rooms']"),roomId)
      this.perform('follow', {room_id: roomId})
    }, 100)
    // let roomId = $("[data-channel='rooms']").data('room-id')
    // perform ('follow', {room_id: roomId})
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("disconnected")
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log("recived")
    console.log(data.content)
    
    $('#msg').append('<div class="message"> ' + data.content + '</div>')

    // Called when there's incoming data on the websocket for this channel
  }
});


// consumer.subscriptions.create({ channel: "RoomChannel", room: "room 3" }, {
//   connected() {
//     console.log("connected")
//     let roomId = $("[data-channel='rooms']").data('room-id')
//     perform ('follow', {room_id: roomId})

//     // Called when the subscription is ready for use on the server
//   },

//   disconnected() {
//     console.log("disconnected")
//     // Called when the subscription has been terminated by the server
//   },

//   received(data) {
//     console.log("recived")
//     console.log(data.content)
    
//     $('#msg').append('<div class="message"> ' + data.content + '</div>')

//     // Called when there's incoming data on the websocket for this channel
//   }
// });

// consumer.subscriptions.create({ channel: "RoomChannel", room: "room 2" }, {
//   connected() {
//     console.log("connected2")
//     // Called when the subscription is ready for use on the server
//   },

//   disconnected() {
//     console.log("disconnected")
//     // Called when the subscription has been terminated by the server
//   },

//   received(data) {
//     console.log("recived")
//     console.log(data.content)
    
//     $('#msg').append('<div class="message"> ' + data.content + '</div>')

//     // Called when there's incoming data on the websocket for this channel
//   }
// });
