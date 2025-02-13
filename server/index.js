const http = require("http");
const {WebSocketServer} = require("ws");

const url = require("url");
const uuidv4 = require("uuid").v4;

const server = http.createServer();
const wsServer = new WebSocketServer({server});
const port = 8080;

const connections = {}
const users = {}

const broadcast = () => {

}

const handleMessage = (bytes, uuid) => {
    // message = {"x": 0, "y": 0}
    const message  = JSON.parse(bytes.toString())
    const user = users[uuid];
    user.state = message
    console.log(message)
}

const handleClose = (uuid) => {

}

wsServer.on("connection", (connection, request) => {
    // ws://localhost:8080?username=Alex

    const {username} = url.parse(request.url,true).query
    const uuid = uuidv4()
    console.log(username);
    console.log(uuid);

    connections[uuid] = connection;
    users[uuid] = {
        username: username,
        state: { }
    };

    connection.on("message", (message) => handleMessage(message, uuid));
    connection.on("close", () => handleClose(uuid));
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});