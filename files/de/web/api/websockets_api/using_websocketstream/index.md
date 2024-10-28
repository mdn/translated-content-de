---
title: Verwenden von WebSocketStream zum Schreiben eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) zur Erstellung und Nutzung von Client-seitigen WebSocket-Verbindungen. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (keine zusätzlichen Maßnahmen seitens des Entwicklers erforderlich), um die Lese- oder Schreibgeschwindigkeit zu regulieren und Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwenden, um einen WebSocket-Client zu erstellen.

## Funktionsprüfung

Um zu prüfen, ob die `WebSocketStream` API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zunächst eine neue `WebSocketStream`-Instanz mithilfe des [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream)-Konstruktors erstellen. In seiner einfachsten Form nimmt er die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein Options-Objekt mit benutzerdefinierten Protokollen und/oder einem [`AbortSignal`](/de/docs/Web/API/AbortSignal) übergeben werden (siehe [Verbindung schließen](#schließen_der_verbindung)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Daten senden und empfangen

Die `WebSocketStream`-Instanz verfügt über eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft – diese gibt ein Promise zurück, das bei erfolgreicher Öffnung der WebSocket-Verbindung mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz enthält:

```js
const { readable, writable } = await wss.opened;
```

Das Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten liefert uns einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die verwendet werden können, um von der Socket-Verbindung zu lesen bzw. in die Socket-Verbindung zu schreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an die Socket-Verbindung zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten von der Socket-Verbindung zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream beendet ist, was dadurch angezeigt wird, dass `done` `true` ist:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Geschwindigkeit, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen, als der Client sie `read()`-en kann, übt die zugrunde liegende Streams API Backpressure auf den Server aus. Darüber hinaus werden `write()`-Operationen nur dann durchgeführt, wenn es sicher ist, dies zu tun.

## Schließen der Verbindung

Bei `WebSocketStream` sind die Informationen, die zuvor über die `WebSocket`-Ereignisse [`close`](/de/docs/Web/API/WebSocket/close_event) und [`error`](/de/docs/Web/API/WebSocket/error_event) verfügbar waren, nun über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft verfügbar – diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließcode enthält (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund angibt, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das erforderliche [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird während der Erstellung an den `WebSocketStream`-Konstruktor übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

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
> Je nach Serverkonfiguration und verwendetem Statuscode kann der Server einen benutzerdefinierten Code ignorieren und stattdessen einen gültigen Code verwenden, der für den Schließungsgrund korrekt ist.

## Ein vollständiges Beispiel-Client

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispiel-Client erstellt. Sie können die [vollständige Auflistung](#vollständige_auflistung) am Ende des Artikels einsehen und mit der folgenden Erklärung Schritt für Schritt durchgehen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bringen, benötigen Sie auch eine Server-Komponente. Wir haben unseren Client so geschrieben, dass er mit dem Deno-Server funktioniert, der in [Einen WebSocket-Server in JavaScript (Deno) schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärt wird, aber jeder kompatible Server ist geeignet.

Das HTML für die Demo sieht wie folgt aus. Es enthält Informations- `<h2>` und {{htmlelement("p")}}-Elemente, einen {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, der zunächst deaktiviert ist, und ein {{htmlelement("div")}}, in das wir Ausgabemeldungen schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir Referenzen zum Ausgabebereich `<div>` und zum Schließen-Button `<button>` und definieren eine Dienstfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if ... else`-Struktur zur Funktionsprüfung von `WebSocketStream` und geben eine informative Meldung in nicht unterstützenden Browsern aus:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir damit, eine Variable mit der WebSocket-Server-URL zu definieren und eine neue `WebSocketServer`-Instanz zu erstellen:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Best Practice ist es, in Produktionsanwendungen sichere WebSockets (`wss://`) zu verwenden. In diesem Demo-Beispiel verbinden wir uns jedoch mit localhost, daher müssen wir das unsichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes befindet sich in der `start()`-Funktion, die wir definieren und dann sofort aufrufen. Wir warten auf das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Promise und schreiben nach dessen Erfüllung eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als Nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurückerhält, und rufen sie auf. Im Funktionskörper warten wir auf das `wss.opened`-Promise und erstellen aus den Erfüllungswerten einen Leser und einen Schreiber. Sobald der Socket geöffnet ist, kommunizieren wir das dem Benutzer und aktivieren den Schließen-Button. Anschließend `write()` wir einen `"ping"`-Wert an den Socket und teilen dem Benutzer dies mit. An diesem Punkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten auf das `read()` der Antwort, teilen sie dem Benutzer mit und senden dann nach einer Zeitüberschreitung von 5 Sekunden einen weiteren `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unendlich fort.

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
> Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Wir fügen nun einen Code-Abschnitt im Promise-Stil ein, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie durch die Erfüllung des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promises signalisiert:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Abschließend fügen wir einen Ereignislistener zum Schließen-Button hinzu, der die Verbindung über die `close()`-Methode mit einem Code und benutzerdefinierten Grund schließt. Die Funktion deaktiviert auch den Schließen-Button — wir möchten nicht, dass Benutzer ihn drücken, sobald die Verbindung bereits geschlossen ist.

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
