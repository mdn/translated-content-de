---
title: Schreiben eines WebSocket-Servers in JavaScript (Deno)
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: 7a4f2c94798ab3b2355accd50cb4f1f8451b346b
---

{{DefaultAPISidebar("WebSockets API")}}

Dieses Beispiel zeigt Ihnen, wie Sie einen WebSocket-API-Server mit Deno erstellen, zusammen mit einer dazugehörigen Webseite.

Deno ist eine JavaScript-Laufzeitumgebung, die das Kompilieren und Zwischenspeichern von TypeScript im laufenden Betrieb unterstützt. Deno verfügt über einen integrierten Formatter, Linter, Test Runner und mehr und implementiert auch viele Web-APIs. Indem es den Webstandards entspricht, sind alle Deno-spezifischen APIs unter dem `Deno`-Namespace implementiert.

Die [Deno-Website](https://deno.com/) bietet Anleitungen zur Installation von Deno.

Deno-Version zum Zeitpunkt des Schreibens: `1.36`.

## Code

Der Code wird in zwei Dateien aufgeteilt: eine für den Server und eine für den Client.

### Server

Erstellen Sie eine Datei namens `main.js`. Diese Datei wird den Code für einen einfachen HTTP-Server enthalten, der auch das Client-HTML bereitstellen wird.

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

`Deno.upgradeWebSocket()` aktualisiert die Verbindung auf eine WebSocket-Verbindung, was im [Leitfaden zum Protokollaktualisierungsmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) näher erläutert wird.

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) nutzt `Deno.listen()` und `Deno.serveHttp()` im Hintergrund und ist eine höherstufige Schnittstelle, um einfach einen HTTP-Server einzurichten. Ohne sie würde der Code ungefähr so aussehen.

```js
for await (const conn of Deno.listen({ port: 8080 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### Client

Erstellen Sie eine Datei namens `index.html`. Diese Datei wird ein Skript aufrufen, das den Server alle fünf Sekunden ab der Herstellung einer Verbindung pingt. Sie sollte auch das folgende Markup enthalten:

```html
<h2>WebSocket Test</h2>
<p>Sends a ping every five seconds</p>
<div id="output"></div>
```

```js
const wsUri = "ws://127.0.0.1/";
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

Mit den beiden Dateien führen Sie die App mit Deno aus.

```sh
deno run --allow-net=0.0.0.0:8080 --allow-read=./index.html main.js
```

Deno erfordert, dass wir explizite Berechtigungen dafür angeben, was wir auf dem Host-Rechner zugreifen können.

- `--allow-net=0.0.0.0:8080` erlaubt der App, sich an localhost auf Port 8080 anzuschließen
- `--allow-read=./index.html` ermöglicht den Zugriff auf die HTML-Datei für den Client

## Siehe auch

- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
