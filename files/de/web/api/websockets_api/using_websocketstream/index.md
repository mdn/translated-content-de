---
title: Verwendung von WebSocketStream zur Erstellung eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: d102514706e844bd642850aa340c9645c74bf70c
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zur [`WebSocket`](/de/docs/Web/API/WebSocket) API zur Erstellung und Nutzung von WebSocket-Verbindungen auf der Client-Seite. `WebSocketStream` nutzt die [Streams API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (keine zusätzlichen Maßnahmen durch den Entwickler erforderlich), um die Geschwindigkeit des Lesens oder Schreibens zu regulieren und Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwenden, um einen WebSocket-Client zu erstellen.

## Feature-Erkennung

Um zu prüfen, ob die `WebSocketStream` API unterstützt wird, können Sie das folgende Snippet verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zunächst eine neue `WebSocketStream`-Instanz mit dem [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream)-Konstruktor erstellen. In seiner einfachsten Form nimmt es die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein Optionsobjekt akzeptieren, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält (siehe [Die Verbindung schließen](#die_verbindung_schließen)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Daten senden und empfangen

Die `WebSocketStream`-Instanz besitzt eine [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Eigenschaft — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)- und eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Mit den Methoden [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) dieser Objekte bekommen wir einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die jeweils verwendet werden können, um aus der Socket-Verbindung zu lesen und in diese zu schreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten in die Socket-Verbindung zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten aus der Socket-Verbindung zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream abgeschlossen ist, was durch `done` als `true` angezeigt wird:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser kontrolliert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen, als der Client sie `read()`en kann, übt die zugrunde liegende Streams API Backpressure auf den Server aus. Zusätzlich werden `write()`-Operationen nur dann fortgesetzt, wenn es sicher ist.

## Die Verbindung schließen

Mit der `WebSocketStream` API sind die Informationen, die zuvor über `WebSocket` [`close`](/de/docs/Web/API/WebSocket/close_event) und [`error`](/de/docs/Web/API/WebSocket/error_event) Events verfügbar waren, jetzt über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft verfügbar — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließcode (sehen Sie die vollständige Liste der [`CloseEvent` Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund enthält, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einem [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das benötigte [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird beim Erstellen an den `WebSocketStream`-Konstruktor übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

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
> Je nach Serverkonfiguration und Statuscode, den Sie verwenden, kann der Server sich entscheiden, einen benutzerdefinierten Code zugunsten eines gültigen Codes zu ignorieren, der für den Schließungsgrund korrekt ist.

## Ein vollständiges Beispiel-Client

Zur Demonstration der grundlegenden Nutzung von `WebSocketStream` haben wir einen Beispiel-Client erstellt. Sie können die [vollständige Liste](#vollständige_auflistung) am Ende des Artikels sehen und der folgenden Erklärung folgen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bringen, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client so geschrieben, dass er mit dem in [Writing a WebSocket server in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) beschriebenen Deno-Server funktioniert, aber jeder kompatible Server wird funktionieren.

Das HTML für die Demo ist wie folgt. Es beinhaltet Informations-`<h2>`- und {{htmlelement("p")}}-Elemente, ein {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, das initial deaktiviert ist, und ein {{htmlelement("div")}}, in das wir Ausgabenachrichten schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir uns die Referenzen zum Ausgabe-`<div>` und zum Schließen-`<button>`, und definieren eine Hilfsfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if ... else` Struktur, um das Vorhandensein von `WebSocketStream` zu erkennen und eine informative Nachricht in nicht unterstützenden Browsern auszugeben:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Code-Pfad beginnen wir mit der Definition einer Variablen, die die URL des WebSocket-Servers enthält, und der Konstruktion einer neuen `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Best Practice ist es, in Produktions-Apps sichere WebSockets (`wss://`) zu nutzen. In dieser Demo verbinden wir uns jedoch mit localhost, daher müssen wir das nicht-sichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes befindet sich in der `start()`-Funktion, die wir definieren und dann sofort aufrufen. Wir warten das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Promise ab, schreiben dann nach Erfüllung eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen Eigenschaften `readable` und `writable`.

Als Nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurückerhält, und rufen sie auf. Im Funktionskörper warten wir das `wss.opened`-Promise ab und erstellen einen Leser und Schreiber aus seinen Fulfillment-Werten. Sobald die Verbindung geöffnet ist, kommunizieren wir dies dem Benutzer und aktivieren den Schließen-Button. Dann `write()` wir einen `"ping"`-Wert zur Verbindung und kommunizieren dies dem Benutzer. Zu diesem Zeitpunkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten das `read()` der Antwort ab, kommunizieren sie dem Benutzer und schreiben dann nach einer Wartezeit von 5 Sekunden erneut einen `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unendlich fort.

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
> Die Funktion [`setTimeout`](/de/docs/Web/API/SetTimeout) umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um eventuelle Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem dieser geschlossen wurde.

Nun fügen wir einen Promise-basierten Codeabschnitt hinzu, um den Benutzer über den Code und den Grund zu informieren, falls die WebSocket-Verbindung geschlossen wird, wie vom [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promise signalisiert:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Ereignislistener für den Schließen-Button hinzu, der die Verbindung mit der `close()`-Methode mit einem Code und einem benutzerdefinierten Grund schließt. Die Funktion deaktiviert auch den Schließen-Button — wir möchten nicht, dass Benutzer ihn drücken, wenn die Verbindung bereits geschlossen ist.

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
