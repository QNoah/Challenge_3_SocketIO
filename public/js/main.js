const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

//krijg Username en kamer van de URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

//Join chatRoom
socket.emit("joinRoom", { username, room });

//krijg room en users
socket.on('roomUsers', ({room,users}) => {
  outputRoomName(room);
  outputUsers(users);
})

//berichten van de server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  //Scrollen naar beneden
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//Bericht versturen
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //bericht krijgen
  const msg = e.target.elements.msg.value;

  //message emit server
  socket.emit("chatMessage", msg);

  //Input verwijderen
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

//berichten naar de DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
						<p class="text">
							${message.text}
						</p>`;
  document.querySelector(".chat-messages").appendChild(div);
}

//voeg kamer naam toe aan de DOM
function outputRoomName(room){
  roomName.innerText = room;
}

//voeg users toe aan de DOM

function outputUsers(users){
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}