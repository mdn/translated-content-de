---
title: Verwenden von WebSocketStream, um einen Client zu schreiben
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: 7a418e5d057adb45a0c7c4ec3b03baa8c3be18f4
---

{{DefaultAPISidebar("WebSockets API")}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) zur Erstellung und Verwendung clientseitiger WebSocket-Verbindungen. `WebSocketStream` nutzt die [Streams API](/de/docs/Web/API/Streams_API) zur Verwaltung von empfangenen und gesendeten Nachrichten, was bedeutet, dass Socketverbindungen automatisch (keine zusätzliche Aktion durch den Entwickler erforderlich) von Stream-[Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können. Die Geschwindigkeit des Lesens oder Schreibens wird reguliert, um Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwenden, um einen WebSocket-Client zu erstellen.

## Funktionsprüfung

Um zu überprüfen, ob die `WebSocketStream` API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zuerst eine neue `WebSocketStream`-Instanz mithilfe des [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream) Konstruktors erstellen. In seiner einfachsten Form nimmt er die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Er kann auch ein `options`-Objekt enthalten, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) umfasst. Das `AbortSignal` kann verwendet werden, um den Verbindungsversuch abzubrechen, bevor der [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) abgeschlossen ist (das heißt, bevor das [`opened`](/de/docs/Web/API/WebSocketStream/opened) Promise erfüllt wird). Es wird typischerweise verwendet, um eine Verbindungszeitüberschreitung zu implementieren. Zum Beispiel wird der folgende Code ablaufen, wenn der Handshake mehr als 5 Sekunden benötigt, um abgeschlossen zu werden:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz verfügt über eine [`opened`](/de/docs/Web/API/WebSocketStream/opened) Eigenschaft – diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) und eine [`WritableStream`](/de/docs/Web/API/WritableStream) Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Indem Sie [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten aufrufen, erhalten Sie einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) jeweils, die zum Lesen von und Schreiben in die Socketverbindung verwendet werden können:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an den Socket zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten vom Socket zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream beendet ist, was durch `done` als `true` angezeigt wird:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Gegendruck anwendet. Wenn Daten schneller ankommen, als der Client sie `read()` kann, übt die zugrunde liegende Streams API Gegendruck auf den Server aus. Außerdem werden `write()`-Operationen nur dann fortgesetzt, wenn es sicher ist.

## Schließen der Verbindung

Um eine Verbindung zu schließen, rufen Sie die [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) Methode auf, wobei optional ein [Schließcode](/de/docs/Web/API/CloseEvent/code#value) und ein Grund übergeben werden können:

```js
wss.close({
  closeCode: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem von Ihnen verwendeten Statuscode kann der Server sich dafür entscheiden, einen benutzerdefinierten Code zu ignorieren, zugunsten eines gültigen Codes, der für den Schließungsgrund korrekt ist.

Das Schließen des zugrunde liegenden [`WritableStream`](/de/docs/Web/API/WritableStream) oder [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) schließt ebenfalls die Verbindung.

Um das Schließen der Verbindung zu verarbeiten, warten Sie, bis das [`closed`](/de/docs/Web/API/WebSocketStream/closed) Promise erfüllt ist:

```js
const { closeCode, reason } = await wss.closed;
```

## Ein vollständiges Beispiel eines Clients

Um die grundlegende Nutzung von `WebSocketStream` zu demonstrieren, haben wir einen Beispielclient erstellt. Sie können die [vollständige Liste](#vollständige_auflistung) am Ende des Artikels sehen und mit der folgenden Erklärung folgen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bekommen, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client geschrieben, um mit dem Deno-Server zu arbeiten, der in [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärt wird, aber jeder kompatible Server wird funktionieren.

Das HTML für die Demo sieht wie folgt aus. Es enthält informierende [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, einen {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, der zunächst deaktiviert ist, und ein {{htmlelement("div")}}, in das wir Ausgabemeldungen schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir uns Verweise auf das Ausgabe-`<div>` und den Schließen-`<button>`, und definieren eine Dienstprogrammfunktion, die Nachrichten ins `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if...else`-Struktur, um `WebSocketStream` auf Funktionalität zu prüfen und eine informative Nachricht bei nicht unterstützenden Browsern auszugeben:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variablen, die die URL des WebSocket-Servers enthält, und dem Erstellen einer neuen `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Best Practice ist die Verwendung sicherer WebSockets (`wss://`) in Produktions-Apps. In diesem Demo jedoch verbinden wir uns mit localhost, daher müssen wir das unsichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten das [`opened`](/de/docs/Web/API/WebSocketStream/opened) Promise ab, dann, nachdem es erfüllt ist, schreiben wir eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) Instanzen aus den zurückgegebenen `readable` und `writable` Eigenschaften.

Als nächstes erstellen wir eine `start()`-Funktion, die "ping" Nachrichten an den Server sendet und "pong" Nachrichten zurückerhält, und rufen sie auf. Im Funktionskörper warten wir auf das `wss.opened` Promise und erstellen einen Leser und Schreiber aus seinen Erfüllungswerten. Sobald der Socket offen ist, kommunizieren wir dies dem Benutzer und aktivieren den Schließen-Button. Als nächstes `write()` wir einen `"ping"`-Wert an den Socket und kommunizieren dies dem Benutzer. An diesem Punkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten auf das `read()` der Antwort, kommunizieren es dem Benutzer und schreiben dann nach einem Timeout von 5 Sekunden einen weiteren `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unendlich fort.

```js
async function start() {
  const { readable, writable } = await wss.opened;
  writeToScreen("CONNECTED");
  closeBtn.disabled = false;
  const reader = readable.getReader();
  const writer = writable.getWriter();

  writer.write("ping");
  writeToScreen("SENT: ping");

  while (true) {
    const { value, done } = await reader.read();
    writeToScreen(`RECEIVED: ${value}`);
    if (done) {
      break;
    }

    setTimeout(async () => {
      try {
        await writer.write("ping");
        writeToScreen("SENT: ping");
      } catch (e) {
        writeToScreen(`Error writing to socket: ${e.message}`);
      }
    }, 5000);
  }
}

start();
```

> [!NOTE]
> Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Funktion umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block, um Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, auf den Stream zu schreiben, nachdem er geschlossen wurde.

Wir fügen nun einen versprechensbasierten Codeabschnitt hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie es durch das Erfüllen des [`closed`](/de/docs/Web/API/WebSocketStream/closed) Promises signalisiert wird:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Event-Listener für den Schließen-Button hinzu, der die Verbindung mit der `close()`-Methode schließt, mit einem Code und einem benutzerdefinierten Grund. Die Funktion deaktiviert auch den Schließen-Button – wir wollen nicht, dass Benutzer ihn drücken, wenn die Verbindung bereits geschlossen ist.

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    closeCode: 1000,
    reason: "That's all folks",
  });

  closeBtn.disabled = true;
});
```

### Vollständige Auflistung

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}

if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  const wsURL = "ws://127.0.0.1/";
  const wss = new WebSocketStream(wsURL);

  console.log(wss.url);

  async function start() {
    const { readable, writable, extensions, protocol } = await wss.opened;
    writeToScreen("CONNECTED");
    closeBtn.disabled = false;
    const reader = readable.getReader();
    const writer = writable.getWriter();

    writer.write("ping");
    writeToScreen("SENT: ping");

    while (true) {
      const { value, done } = await reader.read();
      writeToScreen(`RECEIVED: ${value}`);
      if (done) {
        break;
      }

      setTimeout(() => {
        writer.write("ping");
        writeToScreen("SENT: ping");
      }, 5000);
    }
  }

  start();

  wss.closed.then((result) => {
    writeToScreen(
      `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
    );
    console.log("Socket closed", result.closeCode, result.reason);
  });

  closeBtn.addEventListener("click", () => {
    wss.close({
      closeCode: 1000,
      reason: "That's all folks",
    });

    closeBtn.disabled = true;
  });
}
```
