const http = require("http");
const {WebSocketServer} = require("ws");

const url = require("url");
const uuidv4 = require("uuid").v4;

const server = http.createServer();
const wsServer = new WebSocketServer({server});
const port = 8080;

wsServer.on("connection", (connection, request) => {
    // ws://localhost:8080?username=Alex

    const {username} = url.parse(request.url,true).query
    const uuid = uuidv4()
    console.log(username);
    console.log(uuid);
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});