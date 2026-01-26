---
title: Schreiben eines WebSocket-Servers in JavaScript (Deno)
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: 456178386f8464618bd6a8f08a2e199a1022f590
---

{{DefaultAPISidebar("WebSockets API")}}

Dieses Beispiel zeigt Ihnen, wie Sie einen WebSocket-API-Server mit Deno erstellen können, zusammen mit einer begleitenden Webseite.

Deno ist eine JavaScript-Laufzeitumgebung, die TypeScript-Kompilierung und Caching im Handumdrehen unterstützt. Deno verfügt über einen integrierten Formatter, Linter, Test-Runner und mehr und implementiert außerdem viele Web-APIs. Da Deno mit den Webstandards konform ist, werden alle Deno-spezifischen APIs unter dem `Deno`-Namespace implementiert.

Auf der [Deno-Website](https://deno.com/) finden Sie Anweisungen zur Installation von Deno.

Deno-Version zum Zeitpunkt der Erstellung: `2.6`.

## Code

Der Code wird in zwei Dateien enthalten sein, eine für den Server und eine für den Client.

### Server

Erstellen Sie eine `main.js`-Datei. Diese Datei enthält den Code für einen einfachen HTTP-Server, der auch die Client-HTML bereitstellt.

```js
Deno.serve({
  port: 8080,
  async handler(request) {
    if (request.headers.get("upgrade") !== "websocket") {
      // If the request is a normal HTTP request,
      // we serve the client HTML file.
      const file = await Deno.open("./index.html", { read: true });
      return new Response(file.readable);
    }
    // If the request is a websocket upgrade,
    // we need to use the Deno.upgradeWebSocket helper
    const { socket, response } = Deno.upgradeWebSocket(request);

    socket.onopen = () => {
      console.log("CONNECTED");
    };
    socket.onmessage = (event) => {
      console.log(`RECEIVED: ${event.data}`);
      socket.send("pong");
    };
    socket.onclose = () => console.log("DISCONNECTED");
    socket.onerror = (error) => console.error("ERROR:", error);

    return response;
  },
});
```

`Deno.upgradeWebSocket()` verbessert die Verbindung zu einer WebSocket-Verbindung, welche im [Leitfaden zu Protokoll-Upgrades](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) näher erläutert wird.

### Client

Erstellen Sie eine `index.html`-Datei. Diese Datei wird ein Skript ausführen, das den Server alle fünf Sekunden nach dem Herstellen einer Verbindung pingt. Es sollte auch das folgende Markup enthalten:

```html
<h2>WebSocket Test</h2>
<p>Sends a ping every five seconds</p>
<div id="output"></div>
```

```js
const wsUri = "ws://127.0.0.1:8080/";
const output = document.querySelector("#output");
const websocket = new WebSocket(wsUri);
let pingInterval;

function writeToScreen(message) {
  output.insertAdjacentHTML("afterbegin", `<p>${message}</p>`);
}

function sendMessage(message) {
  writeToScreen(`SENT: ${message}`);
  websocket.send(message);
}

websocket.onopen = (e) => {
  writeToScreen("CONNECTED");
  sendMessage("ping");
  pingInterval = setInterval(() => {
    sendMessage("ping");
  }, 5000);
};

websocket.onclose = (e) => {
  writeToScreen("DISCONNECTED");
  clearInterval(pingInterval);
};

websocket.onmessage = (e) => {
  writeToScreen(`RECEIVED: ${e.data}`);
};

websocket.onerror = (e) => {
  writeToScreen(`ERROR: ${e.data}`);
};
```

## Ausführen des Codes

Mit den zwei Dateien führen Sie die App mit Deno aus.

```sh
deno run --allow-net=0.0.0.0:8080 --allow-read=./index.html main.js
```

Deno erfordert, dass wir explizite Berechtigungen für den Zugriff auf den Host-Computer erteilen.

- `--allow-net=0.0.0.0:8080` erlaubt der App, sich an Localhost auf Port 8080 anzuschließen
- `--allow-read=./index.html` erlaubt den Zugriff auf die HTML-Datei für den Client

## Siehe auch

- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
