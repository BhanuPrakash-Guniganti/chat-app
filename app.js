let currentUser = "";
let currentRoom = "";
let rooms = {"General": [], "Tech": [], "Movies": []};

function joinChat() {
  currentUser = document.getElementById("username").value;
  if (!currentUser) { alert("Enter a username"); return; }
  document.getElementById("login").style.display = "none";
  document.getElementById("chat").style.display = "block";
  
  let roomSelect = document.getElementById("roomSelect");
  roomSelect.innerHTML = "";
  for (let room in rooms) {
    let option = document.createElement("option");
    option.value = room;
    option.innerText = room;
    roomSelect.appendChild(option);
  }
  roomSelect.onchange = switchRoom;
  currentRoom = roomSelect.value;
  showMessages();
}

function switchRoom() {
  currentRoom = document.getElementById("roomSelect").value;
  showMessages();
}

function sendMessage() {
  let msgBox = document.getElementById("messageInput");
  let message = msgBox.value.trim();
  if (!message) return;
  rooms[currentRoom].push({user: currentUser, text: message, time: new Date().toLocaleTimeString()});
  msgBox.value = "";
  showMessages();
}

function showMessages() {
  let msgs = rooms[currentRoom];
  let messagesTbody = document.getElementById("messages");
  messagesTbody.innerHTML = "";
  for (let msg of msgs) {
    let row = document.createElement("tr");
    let timeCell = document.createElement("td");
    timeCell.textContent = msg.time;
    timeCell.style.fontWeight = "bold";
    timeCell.style.color = "#6366f1";
    let messageCell = document.createElement("td");
    messageCell.innerHTML = `<strong>${msg.user}</strong>: ${msg.text}`;
    messageCell.style.fontSize = "1rem";
    row.appendChild(timeCell);
    row.appendChild(messageCell);
    messagesTbody.appendChild(row);
  }
}
