---
title: Schreiben eines WebSocket-Servers in JavaScript (Deno)
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{DefaultAPISidebar("WebSockets API")}}

Dieses Beispiel zeigt Ihnen, wie Sie einen WebSocket-API-Server mit Deno erstellen können, zusammen mit einer begleitenden Webseite.

Deno ist eine JavaScript-Laufzeitumgebung, die das Kompilieren und Cachen von TypeScript unterstützt. Deno verfügt über einen integrierten Formatter, einen Linter, einen Test-Runner und mehr, und implementiert zudem viele Web-APIs. Durch die Einhaltung der Webstandards werden alle für Deno spezifischen APIs im `Deno`-Namespace implementiert.

Die [Deno-Website](https://deno.com/) bietet Anleitungen zur Installation von Deno.

Deno-Version zum Zeitpunkt des Schreibens: `1.36`.

## Code

Der Code wird in zwei Dateien enthalten sein, eine für den Server und eine für den Client.

### Server

Erstellen Sie eine Datei namens `main.js`. Diese Datei enthält den Code für einen einfachen HTTP-Server, der auch die Client-HTML bereitstellt.

```js
Deno.serve({
  port: 80,
  handler: async (request) => {
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

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) verwendet `Deno.listen()` und `Deno.serveHttp()` im Hintergrund und ist eine höherstufige Schnittstelle zum einfachen Einrichten eines HTTP-Servers. Ohne diese würde der Code ungefähr so aussehen.

```js
for await (const conn of Deno.listen({ port: 80 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### Client

Erstellen Sie eine Datei namens `index.html`. Diese Datei enthält ein Skript, das den Server alle fünf Sekunden anpingt, nachdem eine Verbindung hergestellt wurde.

```html
<!doctype html>
<h2>WebSocket Test</h2>
<p>Sends a ping every five seconds</p>
<div id="output"></div>
<script>
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
</script>
```

## Ausführen des Codes

Mit den beiden Dateien führen Sie die App mit Deno aus.

```sh
deno run --allow-net=0.0.0.0:80 --allow-read=./index.html main.js
```

Deno erfordert von uns, explizite Berechtigungen zu erteilen, für das, worauf wir auf dem Host-Computer zugreifen dürfen.

- `--allow-net=0.0.0.0:80` erlaubt der App, sich mit localhost auf Port 80 zu verbinden
- `--allow-read=./index.html` erlaubt den Zugriff auf die HTML-Datei für den Client

## Siehe auch

- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
