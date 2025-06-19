---
title: Verwendung von WebSocketStream, um einen Client zu schreiben
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) zur Erstellung und Nutzung von WebSocket-Verbindungen auf der Client-Seite. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API), um das Empfangen und Senden von Nachrichten zu handhaben. Das bedeutet, dass Socket-Verbindungen automatisch (keine zusätzliche Aktion vom Entwickler erforderlich) den Vorteil von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) nutzen können, um die Lese- oder Schreibgeschwindigkeit zu regulieren und Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwenden, um einen WebSocket-Client zu erstellen.

## Feature-Erkennung

Um zu überprüfen, ob die `WebSocketStream` API unterstützt wird, können Sie folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zuerst eine neue `WebSocketStream`-Instanz mit dem [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream)-Konstruktor erstellen. In seiner einfachsten Form nimmt dieser die URL des WebSocket-Servers als Argument entgegen:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein Optionsobjekt mit benutzerdefinierten Protokollen und/oder einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) (siehe [Schließen der Verbindung](#schließen_der_verbindung)) aufnehmen:

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz hat eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft — diese gibt ein Versprechen zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Das Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten liefert uns einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die verwendet werden können, um von und zur Socket-Verbindung zu lesen bzw. zu schreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an den Socket zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten vom Socket zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream abgeschlossen ist, was durch `done` als `true` angezeigt wird:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen als der Client sie `lesen()` kann, übt die zugrundeliegende Streams API Backpressure auf den Server aus. Außerdem werden `write()`-Operationen nur ausgeführt, wenn dies sicher ist.

## Schließen der Verbindung

Bei `WebSocketStream` stehen die Informationen, die zuvor über die `WebSocket` [`close`](/de/docs/Web/API/WebSocket/close_event)- und [`error`](/de/docs/Web/API/WebSocket/error_event)-Ereignisse verfügbar waren, nun über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft zur Verfügung — diese gibt ein Versprechen zurück, das mit einem Objekt erfüllt wird, das den Schließcode (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund angibt, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einem [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das erforderliche [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird dem `WebSocketStream`-Konstruktor bei der Erstellung übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

```js
const controller = new AbortController();
const wss = new WebSocketStream("wss://example.com/wss", {
  signal: controller.signal,
});

// some time later

controller.abort();
```

Alternativ können Sie die [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close)-Methode verwenden, um eine Verbindung zu schließen. Dies wird hauptsächlich verwendet, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten:

```js
wss.close({
  code: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem verwendeten Statuscode kann der Server beschließen, einen benutzerdefinierten Code zu ignorieren und stattdessen einen gültigen Code zu verwenden, der für den Schließgrund korrekt ist.

## Ein vollständiges Beispiel für einen Client

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir ein Beispiel-Client erstellt. Sie können die [vollständige Auflistung](#vollständige_auflistung) am Ende des Artikels sehen und der unten stehenden Erklärung folgen.

> [!NOTE]
> Damit das Beispiel funktioniert, benötigen Sie auch eine Server-Komponente. Wir haben unseren Client so geschrieben, dass er mit dem Deno-Server funktioniert, der in [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärt wird, aber jeder kompatible Server funktioniert.

Das HTML für die Demo sieht wie folgt aus. Es beinhaltet informative [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}}-Elemente, ein anfänglich deaktiviertes {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, und ein {{htmlelement("div")}}, in das wir Ausgabe-Nachrichten schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir Verweise auf das Ausgabe-`<div>` und das Schließen-`<button>`, und definieren eine Hilfsfunktion, die Nachrichten an das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als Nächstes erstellen wir eine `if ... else`-Struktur, um `WebSocketStream` zu erkennen, und geben eine informative Nachricht in nicht unterstützten Browsern aus:

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
> Best Practice ist die Verwendung von sicheren WebSockets (`wss://`) in Produktionsanwendungen. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das nicht-sichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Versprechen ab und schreiben danach eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als Nächstes erstellen wir eine `start()`-Funktion, die "Ping"-Nachrichten an den Server sendet und "Pong"-Nachrichten zurück empfängt, und rufen sie auf. Im Funktionskörper warten wir das `wss.opened`-Versprechen ab und erstellen einen Leser und Schreiber aus seinen Erfüllungswerten. Sobald die Socket-Verbindung geöffnet ist, kommunizieren wir dies dem Benutzer und aktivieren die Schließen-Schaltfläche. Als Nächstes `schreiben()` wir einen `"ping"`-Wert an den Socket und kommunizieren das dem Benutzer. Zu diesem Zeitpunkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten das `lesen()` der Antwort ab, kommunizieren es dem Benutzer und schreiben dann nach einem Timeout von 5 Sekunden einen weiteren `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unbegrenzt fort.

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
> Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um etwaige Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Wir fügen nun einen Code-Abschnitt im Promisestil hinzu, um den Benutzer des Codes und des Grundes zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie durch das Erfüllen des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Versprechens angezeigt:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Event-Listener zur Schließen-Schaltfläche hinzu, der die Verbindung mit der `close()`-Methode schließt und einen Code und einen benutzerdefinierten Grund angibt. Die Funktion deaktiviert auch die Schließen-Schaltfläche — wir wollen nicht, dass Benutzer sie drücken, wenn die Verbindung bereits geschlossen ist.

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
