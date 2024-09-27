---
title: Verwenden von WebSocketStream zum Schreiben eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: d102514706e844bd642850aa340c9645c74bf70c
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API ist eine {{jsxref("Promise")}}-basierte Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) zur Erstellung und Nutzung von clientseitigen WebSocket-Verbindungen. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API) zum Empfang und Senden von Nachrichten. Dadurch können Socket-Verbindungen automatisch von Stream-[Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren (es ist keine zusätzliche Handlung seitens des Entwicklers erforderlich) und regulieren die Geschwindigkeit des Lesens oder Schreibens, um Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API verwenden, um einen WebSocket-Client zu erstellen.

## Funktionsüberprüfung

Um zu prüfen, ob die `WebSocketStream`-API unterstützt wird, können Sie Folgendes verwenden:

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

Es kann auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält (siehe [Schließen der Verbindung](#schließen_der_verbindung)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz hat eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Durch Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten erhalten wir einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die zum Lesen von und Schreiben in die Socket-Verbindung verwendet werden können:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an die Socket zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten von der Socket zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream fertig ist, was durch `done` als `true` angezeigt wird:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Gegendruck anwendet. Wenn Daten schneller eintreffen, als der Client sie `lesen()` kann, übt die zugrunde liegende Streams-API Gegendruck auf den Server aus. Darüber hinaus werden `write()`-Operationen nur fortgesetzt, wenn es sicher ist.

## Schließen der Verbindung

Bei `WebSocketStream` sind die zuvor über die `WebSocket`-[`close`](/de/docs/Web/API/WebSocket/close_event)- und [`error`](/de/docs/Web/API/WebSocket/error_event)-Ereignisse verfügbaren Informationen jetzt über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft verfügbar — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließcode enthält (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund angibt, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einem [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das benötigte [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird bei der Erstellung an den `WebSocketStream`-Konstruktor übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

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
> Je nach Servereinrichtung und Statuscode, den Sie verwenden, kann der Server entscheiden, einen benutzerdefinierten Code zugunsten eines gültigen Codes zu ignorieren, der für den Schließungsgrund korrekt ist.

## Ein vollständiges Beispiel eines Clients

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispielclient erstellt. Sie können die [vollständige Auflistung](#vollständige_auflistung) am Ende des Artikels sehen und der untenstehenden Erklärung folgen.

> [!NOTE]
> Damit das Beispiel funktioniert, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client so geschrieben, dass er mit dem in [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) beschriebenen Deno-Server zusammenarbeitet, aber jeder kompatible Server ist geeignet.

Das HTML für die Demo sieht wie folgt aus. Es enthält informative [`<h2>`](/de/docs/Web/HTML/Element/Heading_Elements)- und {{htmlelement("p")}}-Elemente, einen anfänglich deaktivierten {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, und ein {{htmlelement("div")}}, in das wir Ausgabemeldungen schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir Verweise auf das `<div>`-Element für die Ausgabe und den `<button>` zum Schließen und definieren eine Hilfsfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if ... else`-Struktur, um `WebSocketStream` zu erkennen, und geben eine informative Nachricht in nicht-unterstützenden Browsern aus:

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
> Es ist Best Practice, in Produktions-Apps sichere WebSockets (`wss://`) zu verwenden. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das unsichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten auf das Versprechen [`opened`](/de/docs/Web/API/WebSocketStream/opened), schreiben dann nach dessen Erfüllung eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen Eigenschaften `readable` und `writable`.

Als nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurückerhält, und rufen sie auf. Im Funktionskörper warten wir auf das `wss.opened`-Versprechen und erstellen einen Leser und Schreiber aus seinen Erfüllungswerten. Sobald die Socket geöffnet ist, teilen wir dies dem Benutzer mit und aktivieren die Schaltfläche zum Schließen. Danach schreiben wir einen `"ping"`-Wert in die Socket und kommunizieren dies dem Benutzer. An diesem Punkt antwortet der Server mit einer `"pong"`-Nachricht. Wir warten das `read()` der Antwort ab, teilen dies dem Benutzer mit und schreiben nach einem Timeout von 5 Sekunden einen weiteren `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unbegrenzt fort.

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
> Die [`setTimeout`](/de/docs/Web/API/SetTimeout)-Funktion umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um alle möglichen Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, auf den Stream zu schreiben, nachdem er geschlossen wurde.

Wir fügen nun einen Codeabschnitt im Promise-Stil hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie durch das Erfüllen des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Versprechens signalisiert:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Ereignislistener für die Schaltfläche zum Schließen hinzu, der die Verbindung mit der `close()`-Methode mit einem Code und einem benutzerdefinierten Grund schließt. Die Funktion deaktiviert auch die Schaltfläche zum Schließen — wir wollen nicht, dass Benutzer sie drücken, wenn die Verbindung bereits geschlossen ist.

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

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>WebSocketStream Test</title>
  </head>

  <body>
    <h2>WebSocketStream Test</h2>
    <p>Sends a ping every five seconds</p>
    <button id="close" disabled>Close socket connection</button>
    <div id="output"></div>
    <script>
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
    </script>
  </body>
</html>
```
