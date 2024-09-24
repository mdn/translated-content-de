---
title: Verwendung von WebSocketStream zum Schreiben eines Clients
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-API ist eine {{jsxref("Promise")}}-basierte Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket), um clientseitige WebSocket-Verbindungen zu erstellen und zu nutzen. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API), um das Empfangen und Senden von Nachrichten zu handhaben. Das bedeutet, dass Socket-Verbindungen automatisch den Vorteil der Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) nutzen können (kein zusätzliches Eingreifen des Entwicklers erforderlich), um die Lesegeschwindigkeit oder Schreibgeschwindigkeit zu regulieren und dadurch Engpässe in der Anwendung zu vermeiden.

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

Er kann auch ein Optionsobjekt aufnehmen, das benutzerdefinierte Protokolle und/oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) enthält (siehe [Schließen der Verbindung](#schließen_der_verbindung)):

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

Das Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) an diesen Objekten liefert uns einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) bzw. einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die genutzt werden können, um aus der bzw. in die Socket-Verbindung zu lesen und zu schreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten in die Socket-Verbindung zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten aus der Socket-Verbindung zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream beendet ist, was angezeigt wird, wenn `done` `true` ist:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser kontrolliert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller ankommen, als der Client sie `lesen()` kann, übt die zugrundeliegende Streams API Backpressure auf den Server aus. Außerdem werden `write()`-Operationen nur dann fortgesetzt, wenn dies sicher ist.

## Schließen der Verbindung

Mit `WebSocketStream` sind die Informationen, die vorher über die `WebSocket`-Ereignisse [`close`](/de/docs/Web/API/WebSocket/close_event) und [`error`](/de/docs/Web/API/WebSocket/error_event) verfügbar waren, jetzt über die [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Eigenschaft verfügbar — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließungscode (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund enthält, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einem [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das notwendige [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird dem `WebSocketStream`-Konstruktor während der Erstellung übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

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
> Abhängig von der Serverkonfiguration und dem von Ihnen verwendeten Statuscode kann der Server sich entscheiden, einen benutzerdefinierten Code zugunsten eines gültigen Codes zu ignorieren, der für den Schließungsgrund korrekt ist.

## Ein vollständiger Beispielclient

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispielclient erstellt. Sie können die [vollständige Auflistung](#vollständige_auflistung) am Ende des Artikels sehen und der untenstehenden Erklärung folgen.

> [!NOTE]
> Um das Beispiel funktionsfähig zu machen, benötigen Sie auch einen Serverkomponenten. Wir haben unseren Client entwickelt, um mit dem Deno-Server zu arbeiten, der in [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärt wird, aber jeder kompatible Server wird funktionieren.

Das HTML für die Demo sieht wie folgt aus. Es enthält informative [`<h2>`](/de/docs/Web/HTML/Element/Heading_Elements)- und {{htmlelement("p")}}-Elemente, einen {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, der anfänglich deaktiviert ist, und ein {{htmlelement("div")}}, in das wir Ausgabemeldungen schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir Referenzen zum Ausgabe-`<div>` und dem Schließen-`<button>` und definieren eine Hilfsfunktion, die Nachrichten an das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if ... else`-Struktur zur Feature-Erkennung von `WebSocketStream` und geben eine informative Meldung auf nicht unterstützenden Browsern aus:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Your browser does not support WebSocketStream");
} else {
  // supporting code path
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variablen, die die WebSocket-Server-URL enthält, und erstellen eine neue `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Best Practice ist es, in Produktions-Apps sichere WebSockets (`wss://`) zu verwenden. In diesem Demo verbinden wir uns jedoch mit localhost, daher müssen wir das unsichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten auf das Versprechen [`opened`](/de/docs/Web/API/WebSocketStream/opened), und nachdem es erfüllt ist, schreiben wir eine Nachricht, um dem Leser mitzuteilen, dass die Verbindung erfolgreich ist, und erstellen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)- und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Instanzen aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als nächstes erstellen wir eine `start()`-Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurück erhält, und rufen sie auf. Im Funktionskörper warten wir auf das Versprechen `wss.opened` und erstellen einen Reader und Writer aus den Erfüllungswerten. Sobald die Verbindung geöffnet ist, teilen wir dies dem Benutzer mit und aktivieren den Schließen-Button. Als Nächstes `write()` wir einen `"ping"`-Wert an den Socket und teilen das dem Benutzer mit. Zu diesem Zeitpunkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten auf das `read()` der Antwort, kommunizieren es dem Benutzer und schreiben dann nach einer Zeitverzögerung von 5 Sekunden ein weiteres `"ping"` an den Server. Dies setzt der `"ping"`/`"pong"`-Schleife unendlich fort:

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
> Die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) kapselt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um alle Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Wir fügen nun einen code-basierten Abschnitt ein, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie es durch die Erfüllung des [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Versprechens angezeigt wird:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Ereignis-Listener für den Schließen-Button hinzu, der die Verbindung mit der `close()`-Methode mit einem Code und einem benutzerdefinierten Grund schließt. Die Funktion deaktiviert auch den Schließen-Button — wir wollen nicht, dass Benutzer darauf drücken, wenn die Verbindung bereits geschlossen ist:

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
