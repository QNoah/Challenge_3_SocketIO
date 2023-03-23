const chatForm = document.getElementById("chat-form");

const socket = io();

//berichten van de server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);
});

//Bericht versturen
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //bericht krijgen
  const msg = e.target.elements.msg.value;

  //message emit server
  socket.emit("chatMessage", msg);
});

//berichten naar de DOM
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `
    <p class="meta">Brad <span>9:12pm</span></p>
						<p class="text">
							${message}
						</p>`;
                        document.querySelector(".chat-messages").appendChild(div);
}
