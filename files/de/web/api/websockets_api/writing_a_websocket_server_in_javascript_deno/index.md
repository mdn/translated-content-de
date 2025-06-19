---
title: Schreiben eines WebSocket-Servers in JavaScript (Deno)
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("WebSockets API")}}

Dieses Beispiel zeigt Ihnen, wie Sie mit Deno einen WebSocket-API-Server erstellen können, begleitet von einer zugehörigen Webseite.

Deno ist eine JavaScript-Laufzeitumgebung, die das Kompilieren und Zwischenspeichern von TypeScript unterstützt. Deno verfügt über einen integrierten Formatter, Linter, Test-Runner und mehr, und implementiert viele Web-APIs. Da es konform mit den Webstandards ist, werden alle Deno-spezifischen APIs im `Deno`-Namensraum implementiert.

Die [Deno-Website](https://deno.com/) bietet Anleitungen zur Installation von Deno.

Zum Zeitpunkt des Verfassens: Deno-Version `1.36`.

## Code

Der Code wird in zwei Dateien enthalten sein, eine für den Server und eine für den Client.

### Server

Erstellen Sie eine `main.js`-Datei. Diese Datei wird den Code für einen einfachen HTTP-Server enthalten, der auch die Client-HTML bereitstellen wird.

```js
Deno.serve({
  port: 80,
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

`Deno.upgradeWebSocket()` wertet die Verbindung zu einer WebSocket-Verbindung auf, was im [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) weiter erläutert wird.

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) verwendet unter der Haube `Deno.listen()` und `Deno.serveHttp()` und bietet eine höherstufige Schnittstelle, um einfach einen HTTP-Server einzurichten. Ohne diese würde der Code folgendermaßen aussehen.

```js
for await (const conn of Deno.listen({ port: 80 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### Client

Erstellen Sie eine `index.html`-Datei. Diese Datei wird ein Skript ausführen, das den Server alle fünf Sekunden pingt, nachdem eine Verbindung hergestellt wurde. Sie sollte auch das folgende Markup enthalten:

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

Mit den beiden Dateien führen Sie die Anwendung mit Deno aus.

```sh
deno run --allow-net=0.0.0.0:80 --allow-read=./index.html main.js
```

Deno erfordert, dass wir explizite Berechtigungen für den Zugriff auf die Hostmaschine erteilen.

- `--allow-net=0.0.0.0:80` erlaubt der App, sich an localhost auf Port 80 anzuhängen
- `--allow-read=./index.html` erlaubt den Zugriff auf die HTML-Datei für den Client

## Siehe auch

- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
