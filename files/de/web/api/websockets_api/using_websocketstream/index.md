---
title: Verwendung von WebSocketStream, um einen Client zu schreiben
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: db01d0c8b4cbf8a4467b1db65e17f6724d0ce710
---

{{DefaultAPISidebar("WebSockets API")}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API ist eine auf {{jsxref("Promise")}}-basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket), um clientseitige WebSocket-Verbindungen zu erstellen und zu verwenden. `WebSocketStream` nutzt die [Streams API](/de/docs/Web/API/Streams_API), um das Empfangen und Senden von Nachrichten zu handhaben, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Rückstau](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (es ist keine zusätzliche Aktion des Entwicklers erforderlich) und die Geschwindigkeit des Lesens oder Schreibens reguliert wird, um Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API verwenden, um einen WebSocket-Client zu erstellen.

## Feature-Erkennung

Um zu überprüfen, ob die `WebSocketStream`-API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zuerst eine neue `WebSocketStream`-Instanz mit dem [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream)-Konstruktor erstellen. In seiner einfachsten Form nimmt er die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Er kann auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält (siehe [Verbindung schließen](#schließen_der_verbindung)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz hat eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft — diese gibt ein Promise zurück, das erfüllt wird mit einem Objekt, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Das Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten liefert uns einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) jeweils, die verwendet werden können, um von der Socket-Verbindung zu lesen und zu schreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an den Socket zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten vom Socket zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream beendet ist, was angezeigt wird, wenn `done` `true` ist:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Rückstau anwendet. Wenn Daten schneller ankommen, als der Client sie `lesen()` kann, übt die zugrundeliegende Streams-API Rückstau auf den Server aus. Außerdem werden `write()`-Operationen nur dann fortgesetzt, wenn es sicher ist, dies zu tun.

## Schließen der Verbindung

Mit `WebSocketStream` sind die Informationen, die zuvor über die `WebSocket`-[`close`](/de/docs/Web/API/WebSocket/close_event)- und [`error`](/de/docs/Web/API/WebSocket/error_event)-Ereignisse verfügbar waren, jetzt über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft verfügbar — diese gibt ein Promise zurück, das erfüllt wird mit einem Objekt, das den Schließcode enthält (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund angibt, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einer [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das erforderliche [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird dem `WebSocketStream`-Konstruktor bei der Erstellung übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

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
> Abhängig von der Serverkonfiguration und dem von Ihnen verwendeten Statuscode kann der Server sich entscheiden, einen benutzerdefinierten Code zugunsten eines gültigen Codes zu ignorieren, der für den Schließgrund korrekt ist.

## Ein vollständiger Beispielclient

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispielclient erstellt. Sie können die [vollständige Auflistung](#volle_auflistung) am Ende des Artikels sehen und der folgenden Erklärung folgen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bringen, benötigen Sie auch eine Server-Komponente. Wir haben unseren Client so geschrieben, dass er zusammen mit dem Deno-Server funktioniert, der in [Einen WebSocket-Server in JavaScript schreiben (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärt ist, aber jeder kompatible Server funktioniert.

Das HTML für die Demo ist wie folgt. Es enthält informationelle [`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements)- und {{htmlelement("p")}}-Elemente, ein {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, das anfänglich deaktiviert ist, und ein {{htmlelement("div")}}, in das wir Ausgabemeldungen schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir Referenzen zum Ausgabe-`<div>` und zum Schließen-`<button>` und definieren eine Hilfsfunktion, die Nachrichten an das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if...else`-Struktur, um `WebSocketStream` zu erkennen und eine informative Nachricht in nicht unterstützenden Browsern auszugeben:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variablen, die die URL des WebSocket-Servers enthält, und konstruieren eine neue `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Es ist bewährte Praxis, sichere WebSockets (`wss://`) in Produktionsanwendungen zu verwenden. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das nicht sichere WebSocket-Protokoll (`ws://`) für das Beispiel verwenden.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Promise ab und schreiben, nachdem es erfüllt wurde, eine Nachricht, um den Leser darüber zu informieren, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurück empfängt, und rufen sie auf. Im Funktionskörper warten wir das `wss.opened`-Promise ab und erstellen einen Leser und Schreiber aus den Erfüllungswerten. Sobald der Socket geöffnet ist, kommunizieren wir das dem Benutzer und aktivieren die Schaltfläche zum Schließen. Als nächstes `write()` wir einen `"ping"`-Wert an den Socket und geben dies dem Benutzer bekannt. Zu diesem Zeitpunkt reagiert der Server mit einer `"pong"`-Nachricht. Wir warten das `read()` der Antwort ab, teilen es dem Benutzer mit und schreiben dann nach einem Timeout von 5 Sekunden ein weiteres `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unendlich fort.

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
> Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um mögliche Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Wir fügen nun einen Codeabschnitt im Promise-Stil hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie es durch das Erfüllen des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promises signalisiert wird:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Ereignis-Listener zur Schaltfläche zum Schließen hinzu, der die Verbindung mit der `close()`-Methode schließt, mit einem Code und einem benutzerdefinierten Grund. Die Funktion deaktiviert auch die Schaltfläche zum Schließen — wir möchten nicht, dass Benutzer sie drücken, wenn die Verbindung bereits geschlossen ist.

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    code: 1000,
    reason: "That's all folks",
  });

  closeBtn.disabled = true;
});
```

### Volle Auflistung

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
