---
title: Verwenden von WebSocketStream zum Schreiben eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: 733dfb47cc73c60d57374815d5c6978e830eb784
---

{{DefaultAPISidebar("WebSockets API")}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) für die Erstellung und Nutzung clientseitiger WebSocket-Verbindungen. `WebSocketStream` nutzt die [Streams API](/de/docs/Web/API/Streams_API) zur Handhabung des Empfangens und Sendens von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (keine zusätzliche Aktion vom Entwickler erforderlich), und die Geschwindigkeit des Lesens oder Schreibens reguliert wird, um Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwendet wird, um einen WebSocket-Client zu erstellen.

## Funktionsprüfung

Um zu überprüfen, ob die `WebSocketStream` API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zunächst eine neue `WebSocketStream`-Instanz mit dem [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream)-Konstruktor erstellen. In seiner einfachsten Form nimmt er die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält (siehe [Verbindung schließen](#schließen_der_verbindung)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz verfügt über eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft – diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) und eine [`WritableStream`](/de/docs/Web/API/WritableStream) Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Durch Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten erhalten Sie einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die zum Lesen und Schreiben der Socket-Verbindung verwendet werden können:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an den Socket zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten vom Socket zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream beendet ist, was dadurch angezeigt wird, dass `done` `true` ist:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Geschwindigkeit, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen, als der Client sie `read()` kann, übt die zugrunde liegende Streams API Backpressure auf den Server aus. Darüber hinaus werden `write()`-Operationen nur fortgesetzt, wenn dies sicher möglich ist.

## Schließen der Verbindung

Mit `WebSocketStream` sind die Informationen, die zuvor über die `WebSocket`-Ereignisse [`close`](/de/docs/Web/API/WebSocket/close_event) und [`error`](/de/docs/Web/API/WebSocket/error_event) verfügbar waren, jetzt über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft verfügbar – diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließungscode (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund enthält, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einem [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das notwendige [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird bei der Erstellung an den `WebSocketStream`-Konstruktor übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

```js
const controller = new AbortController();
const wss = new WebSocketStream("wss://example.com/wss", {
  signal: controller.signal,
});

// some time later

controller.abort();
```

Alternativ können Sie die Methode [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) verwenden, um eine Verbindung zu schließen. Dies wird hauptsächlich verwendet, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten:

```js
wss.close({
  closeCode: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem verwendeten Statuscode kann es sein, dass der Server ein benutzerdefiniertes Code zugunsten eines gültigen Codes ignoriert, der für den Schließungsgrund korrekt ist.

## Ein vollständiges Beispiel für einen Client

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispielclient erstellt. Sie können den [vollständigen Quellcode](#vollständiger_quellcode) am Ende des Artikels einsehen und der Erklärung unten folgen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bringen, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client so geschrieben, dass er mit dem Deno-Server funktioniert, der in [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärt wird, aber jeder kompatible Server funktioniert.

Der HTML-Code für die Demo sieht wie folgt aus. Er enthält informative [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, einen {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, die initial deaktiviert ist, und ein {{htmlelement("div")}}, um Ausgabemeldungen hineinzuschreiben.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir uns Referenzen zum Ausgaben-`<div>` und dem Schließen-`<button>`, und definieren eine Hilfsfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als Nächstes erstellen wir eine `if...else`-Struktur, um `WebSocketStream` zu erkennen und eine informative Nachricht auf nicht unterstützenden Browsern auszugeben:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variablen, die die URL des WebSocket-Servers enthält, und erstellen eine neue `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Best Practice ist die Verwendung von sicheren WebSockets (`wss://`) in Produktionsanwendungen. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das nicht sichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptanteil unseres Codes ist in die Funktion `start()` eingebettet, die wir definieren und dann sofort aufrufen. Wir warten auf das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Promise und schreiben nach seiner Erfüllung eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als Nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurückerhält, und rufen sie auf. Im Funktionskörper warten wir auf das `wss.opened`-Promise und erstellen einen Reader und Writer aus seinen Erfüllungswerten. Sobald der Socket geöffnet ist, kommunizieren wir das dem Benutzer und aktivieren den Schließen-Button. Dann `write()` wir einen `"ping"`-Wert an den Socket und teilen dies dem Benutzer mit. Zu diesem Zeitpunkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten auf das `read()` der Antwort, kommunizieren es dem Benutzer und schreiben dann nach einem Timeout von 5 Sekunden ein weiteres `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unbegrenzt fort.

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
> Die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er bereits geschlossen wurde.

Wir fügen nun einen Abschnitt im Promise-Stil hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie durch das Erfüllen des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promises angezeigt:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Event-Listener zum Schließen-Button hinzu, der die Verbindung mit der Methode `close()` schließt, mit einem Code und einem benutzerdefinierten Grund. Die Funktion deaktiviert auch den Schließen-Button – wir möchten nicht, dass Benutzer ihn drücken, wenn die Verbindung bereits geschlossen ist.

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    closeCode: 1000,
    reason: "That's all folks",
  });

  closeBtn.disabled = true;
});
```

### Vollständiger Quellcode

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
