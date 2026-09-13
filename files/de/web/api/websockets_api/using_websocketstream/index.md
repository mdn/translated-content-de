---
title: Verwendung von WebSocketStream zum Schreiben eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{DefaultAPISidebar("WebSockets API")}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) für die Erstellung und Nutzung von clientseitigen WebSocket-Verbindungen. `WebSocketStream` verwendet die [Streams-API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch vom Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (keine zusätzliche Aktion des Entwicklers erforderlich), um die Lese- oder Schreibgeschwindigkeit zu regulieren und Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API verwenden, um einen WebSocket-Client zu erstellen.

## Funktionsunterstützung erkennen

Um zu überprüfen, ob die `WebSocketStream`-API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zuerst eine neue `WebSocketStream`-Instanz mit dem [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream)-Konstruktor erzeugen. In der einfachsten Form benötigt dieser nur die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein `options`-Objekt mit benutzerdefinierten Protokollen und/oder einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthalten. Das `AbortSignal` kann verwendet werden, um den Verbindungsversuch abzubrechen, bevor der [Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) abgeschlossen ist (das heißt, bevor das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Promise aufgelöst wird). Es wird normalerweise verwendet, um ein Verbindungstimeout zu implementieren. Zum Beispiel wird der folgende Code nach mehr als 5 Sekunden abbrechen, wenn der Handshake nicht abgeschlossen ist:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: AbortSignal.timeout(5000),
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz hat eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft — diese gibt ein Versprechen zurück, das sich mit einem Objekt erfüllt, welches eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Das Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten gibt uns einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) bzw. einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück, die zum Lesen von und Schreiben auf die Socket-Verbindung verwendet werden können:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an den Socket zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten vom Socket zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream fertig ist, was durch `done`, das auf `true` gesetzt ist, angezeigt wird:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Geschwindigkeit, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen, als der Client sie `read()` kann, übt die zugrunde liegende Streams-API Backpressure auf den Server aus. Zudem werden `write()`-Operationen nur durchgeführt, wenn es sicher ist.

## Schließen der Verbindung

Um eine Verbindung zu schließen, rufen Sie die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) auf und übergeben Sie optional einen [Schließcode](/de/docs/Web/API/CloseEvent/code#value) und einen Grund:

```js
wss.close({
  closeCode: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Abhängig von der Server-Konfiguration und dem verwendeten Statuscode kann der Server sich entscheiden, einen benutzerdefinierten Code zu ignorieren und stattdessen einen gültigen Code zu verwenden, der für den Schließungsgrund korrekt ist.

Das Schließen des zugrunde liegenden [`WritableStream`](/de/docs/Web/API/WritableStream) oder [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) schließt ebenfalls die Verbindung.

Um das Schließen der Verbindung zu behandeln, warten Sie, bis das [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promise erfüllt ist:

```js
const { closeCode, reason } = await wss.closed;
```

## Ein komplettes Beispiel-Client

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispiel-Client erstellt. Sie können die [vollständige Auflistung](#vollständige_auflistung) am Ende des Artikels ansehen und den Erklärungen unten folgen.

> [!NOTE]
> Damit das Beispiel funktioniert, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client für die Zusammenarbeit mit dem Deno-Server erstellt, der in [Writing a WebSocket server in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erläutert wird, aber jeder kompatible Server funktioniert.

Das HTML für die Demo ist wie folgt. Es enthält informative [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)- und {{htmlelement("p")}}-Elemente, einen {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, der ursprünglich deaktiviert ist, und ein {{htmlelement("div")}}, um Ausgabe-Nachrichten hineinzuschreiben.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst greifen wir auf die Referenzen für das Ausgabe-`<div>` und den Schließen-`<button>` zurück und definieren eine Dienstprogrammfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if...else`-Struktur, um `WebSocketStream` zu erkennen und eine informative Nachricht auf nicht unterstützenden Browsern auszugeben:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variablen, die die WebSocket-Server-URL enthält, und der Konstruktion einer neuen `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Es ist bewährte Praxis, im Produktionsbetrieb sichere WebSockets (`wss://`) zu verwenden. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das unsichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten auf das [„opened“](/de/docs/Web/API/WebSocketStream/opened)-Promise und schreiben nach dessen Erfüllung eine Nachricht, um den Leser darüber zu informieren, dass die Verbindung erfolgreich ist, und erstellen Instanzen von [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als nächstes erstellen wir eine `start()`-Funktion, die „ping“-Nachrichten an den Server sendet und „pong“-Nachrichten zurückempfängt, und rufen sie auf. Im Funktionskörper erwarten wir das `wss.opened`-Promise und erstellen einen Leser und Schreiber aus seinen Erfüllungswerten. Sobald der Socket geöffnet ist, teilen wir dies dem Benutzer mit und aktivieren die Schließen-Schaltfläche. Als nächstes `write()` wir einen `"ping"`-Wert in den Socket und kommunizieren das dem Benutzer. Zu diesem Zeitpunkt antwortet der Server mit einer `"pong"`-Nachricht. Wir warten auf das `read()` der Antwort, kommunizieren sie dem Benutzer und schreiben nach einem Timeout von 5 Sekunden ein weiteres `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unbegrenzt fort.

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
> Die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) umfasst den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Jetzt fügen wir einen Codeabschnitt im Promise-Stil hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie durch das Erfüllen des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promise angezeigt:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir der Schließen-Schaltfläche einen Event-Listener hinzu, der die Verbindung mit der `close()`-Methode, einem Code und einem benutzerdefinierten Grund schließt. Die Funktion deaktiviert auch die Schließen-Schaltfläche — wir wollen nicht, dass Benutzer sie drücken, wenn die Verbindung bereits geschlossen ist.

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
