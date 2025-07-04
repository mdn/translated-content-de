---
title: Verwendung von WebSocketStream zur Erstellung eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket), um Client-seitige WebSocket-Verbindungen zu erstellen und zu nutzen. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API), um Nachrichten zu empfangen und zu senden, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren (keine zusätzlichen Aktionen des Entwicklers erforderlich), um die Geschwindigkeit des Lesens oder Schreibens zu regulieren und so Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwenden, um einen WebSocket-Client zu erstellen.

## Funktionserkennung

Um zu prüfen, ob die `WebSocketStream` API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zuerst eine neue `WebSocketStream`-Instanz mithilfe des [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream) Konstruktors erstellen. In seiner einfachsten Form nimmt es die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein Optionsobjekt mit benutzerdefinierten Protokollen und/oder einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthalten (siehe [Schließen der Verbindung](#schließen_der_verbindung)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz hat eine [`opened`](/de/docs/Web/API/WebSocketStream/opened) Eigenschaft — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) und eine [`WritableStream`](/de/docs/Web/API/WritableStream) Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Das Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) an diesen Objekten liefert uns einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) bzw., die verwendet werden können, um von der Socket-Verbindung zu lesen und in diese zu schreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an die Socket-Verbindung zu senden, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten von der Socket-Verbindung zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream abgeschlossen ist, was durch `done` als `true` angezeigt wird:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Geschwindigkeit, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen, als der Client sie `lesen()` kann, übt die zugrundeliegende Streams API Backpressure auf den Server aus. Darüber hinaus werden `write()`-Operationen nur fortgesetzt, wenn es sicher ist, dies zu tun.

## Schließen der Verbindung

Mit `WebSocketStream` sind die Informationen, die zuvor über die `WebSocket`-Ereignisse [`close`](/de/docs/Web/API/WebSocket/close_event) und [`error`](/de/docs/Web/API/WebSocket/error_event) verfügbar waren, nun über die [`closed`](/de/docs/Web/API/WebSocketStream/closed) Eigenschaft verfügbar - diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließcode (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und einen Grund enthält, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das notwendige [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird dem `WebSocketStream`-Konstruktor bei der Erstellung übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

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
  code: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem verwendeten Statuscode kann es sein, dass der Server einen benutzerdefinierten Code zugunsten eines gültigen Codes ignoriert, der für den Schließgrund korrekt ist.

## Ein vollständiger Beispiel-Client

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispiel-Client erstellt. Sie können die [vollständige Liste](#vollständige_auflistung) am Ende des Artikels einsehen und der folgenden Erklärung folgen.

> [!NOTE]
> Damit das Beispiel funktioniert, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client so geschrieben, dass er mit dem in [Writing a WebSocket server in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärten Deno-Server zusammenarbeitet, aber jeder kompatible Server ist geeignet.

Das HTML für die Demo sieht folgendermaßen aus. Es enthält informative [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, einen {{htmlelement("button")}} zum Schließen der WebSocket-Verbindung, der initial deaktiviert ist, und ein {{htmlelement("div")}} für uns, um Ausgabemeldungen hineinzuschreiben.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir uns Referenzen auf das Ausgabe-`<div>` und den Schließen-`<button>`, und definieren eine Hilfsfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als Nächstes erstellen wir eine `if...else`-Struktur, um die Unterstützung von `WebSocketStream` zu erkennen und eine informative Nachricht in nicht unterstützenden Browsern auszugeben:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variable, die die URL des WebSocket-Servers enthält, und konstruieren eine neue `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Beste Praxis ist es, sichere WebSockets (`wss://`) in Produktions-Apps zu verwenden. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das unsichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten auf das [`opened`](/de/docs/Web/API/WebSocketStream/opened) Promise, dann, nachdem es erfüllt ist, schreiben wir eine Nachricht, um den Leser wissen zu lassen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) Instanzen von den zurückgegebenen `readable` und `writable` Eigenschaften.

Als Nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurückerhält, und rufen sie auf. Im Funktionskörper warten wir auf das `wss.opened` Promise und erstellen einen Leser und Schreiber von seinen Erfüllungswerten. Sobald die Socket-Verbindung geöffnet ist, teilen wir dies dem Benutzer mit und aktivieren den Schließen-Button. Als Nächstes `write()` wir einen `"ping"`-Wert an die Socket-Verbindung und teilen dies dem Benutzer mit. Zu diesem Zeitpunkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten auf das `read()` der Antwort, kommunizieren sie dem Benutzer, dann schreiben wir nach einer Pause von 5 Sekunden ein weiteres `"ping"` an den Server. Dies setzt den `"ping"`/`"pong"`-Loop auf unbestimmte Zeit fort:

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
> Die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um etwaige Fehler zu handhaben, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Wir schließen nun einen Promise-basierten Codeabschnitt ein, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, was durch die Erfüllung des [`closed`](/de/docs/Web/API/WebSocketStream/closed) Promises signalisiert wird:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Ereignis-Listener zum Schließen-Button hinzu, der die Verbindung mithilfe der `close()`-Methode schließt, mit einem Code und einem benutzerdefinierten Grund. Die Funktion deaktiviert auch den Schließen-Button — wir möchten nicht, dass Benutzer ihn drücken, wenn die Verbindung bereits geschlossen ist.

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    code: 1000,
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
      code: 1000,
      reason: "That's all folks",
    });

    closeBtn.disabled = true;
  });
}
```
