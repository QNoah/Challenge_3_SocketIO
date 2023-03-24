const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//static folder aanzetten..
app.use(express.static(path.join(__dirname, "public")));

const botName = "Admin";

//run when client connects
io.on("connection", (socket) => {
  socket.emit("message", formatMessage(botName,"Welcome to ChatQ"));

  //wanneer een persoon verbindt
  socket.broadcast.emit("message", formatMessage(botName, "A user has joined"));

  //when client disconnect

  socket.on("disconnect", () => {
    io.emit("message", formatMessage(botName, "A user has disconnected"));
  });
  // Listen for chatMessages
  socket.on("chatMessage", (msg) => {
    io.emit('message', formatMessage("USER", msg));
  });
});

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
