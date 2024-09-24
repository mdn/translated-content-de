---
title: Schreiben eines WebSocket-Servers in JavaScript (Deno)
slug: Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebSockets API")}}

Dieses Beispiel zeigt Ihnen, wie Sie einen WebSocket-API-Server mit Deno erstellen, zusammen mit einer zugehörigen Webseite.

Deno ist eine JavaScript-Laufzeitumgebung, die die Kompilierung und das Cachen von TypeScript im laufenden Betrieb unterstützt. Deno verfügt über einen integrierten Formatierer, Linter, Test-Runner und mehr, und implementiert auch viele Web-APIs. Da es konform mit den Webstandards ist, werden alle Deno-spezifischen APIs unter dem `Deno`-Namespace implementiert.

Die [Deno Website](https://deno.com/) bietet Anleitungen zur Installation von Deno.

Deno-Version zum Zeitpunkt des Schreibens: `1.36`.

## Code

Der Code wird in zwei Dateien enthalten sein, eine für den Server und eine für den Client.

### Server

Erstellen Sie eine `main.js` Datei. Diese Datei wird den Code für einen einfachen HTTP-Server enthalten, der auch den Client-HTML bedient.

```js
Deno.serve({
  port: 80,
  handler: async (request) => {
    // Wenn die Anfrage ein WebSocket-Upgrade ist,
    // müssen wir den Deno.upgradeWebSocket-Helfer verwenden
    if (request.headers.get("upgrade") === "websocket") {
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
    } else {
      // Wenn die Anfrage eine normale HTTP-Anfrage ist,
      // servieren wir die Client-HTML-Datei.
      const file = await Deno.open("./index.html", { read: true });
      return new Response(file.readable);
    }
  },
});
```

`Deno.upgradeWebSocket()` aktualisiert die Verbindung zu einer WebSocket-Verbindung, was im [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) weiter erläutert wird.

[`Deno.serve()`](https://docs.deno.com/api/deno/~/Deno.serve) verwendet `Deno.listen()` und `Deno.serveHttp()` im Hintergrund und ist eine höherstufige Schnittstelle, um einfach einen HTTP-Server einzurichten. Ohne diese würde der Code in etwa so aussehen.

```js
for await (const conn of Deno.listen({ port: 80 })) {
  for await (const { request, respondWith } of Deno.serveHttp(conn)) {
    respondWith(handler(request));
  }
}
```

### Client

Erstellen Sie eine `index.html` Datei. Diese Datei wird ein Skript enthalten, das den Server alle fünf Sekunden pingt, nachdem eine Verbindung hergestellt wurde.

```html
<!doctype html>
<h2>WebSocket Test</h2>
<p>Sendet alle fünf Sekunden einen Ping</p>
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

Deno verlangt von uns, dass wir explizit Berechtigungen für den Zugriff auf den Host-Computer geben.

- `--allow-net=0.0.0.0:80` erlaubt der App, sich mit localhost über Port 80 zu verbinden
- `--allow-read=./index.html` erlaubt den Zugriff auf die HTML-Datei für den Client

## Siehe auch

- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
