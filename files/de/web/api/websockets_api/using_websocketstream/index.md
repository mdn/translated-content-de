---
title: Verwenden von WebSocketStream, um einen Client zu schreiben
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API ist eine auf {{jsxref("Promise")}} basierende Alternative zu [`WebSocket`](/de/docs/Web/API/WebSocket) für das Erstellen und Verwenden von clientseitigen WebSocket-Verbindungen. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API), um das Empfangen und Senden von Nachrichten zu handhaben, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (keine zusätzlichen Aktionen durch den Entwickler erforderlich), und damit die Lese- und Schreibgeschwindigkeit reguliert wird, um Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie Sie die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) API verwenden, um einen WebSocket-Client zu erstellen.

## Funktionsprüfung

Um zu überprüfen, ob die `WebSocketStream` API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream is supported
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zuerst eine neue `WebSocketStream`-Instanz mit dem [`WebSocketStream()`](/de/docs/Web/API/WebSocketStream/WebSocketStream) Konstruktor erstellen. In seiner einfachsten Form nimmt er die URL des WebSocket-Servers als Argument:

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

Die `WebSocketStream`-Instanz besitzt eine [`opened`](/de/docs/Web/API/WebSocketStream/opened) Eigenschaft — diese gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) und eine [`WritableStream`](/de/docs/Web/API/WritableStream) Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wurde:

```js
const { readable, writable } = await wss.opened;
```

Durch Aufrufen von [`getReader()`](/de/docs/Web/API/ReadableStream/getReader) und [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) auf diesen Objekten erhalten wir jeweils einen [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter), die verwendet werden können, um von der Socket-Verbindung zu lesen und in sie hineinzuschreiben:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten an die Socket-Verbindung zu schreiben, können Sie [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) verwenden:

```js
writer.write("My message");
```

Um Daten aus der Socket-Verbindung zu lesen, können Sie kontinuierlich [`ReadableStreamDefaultReader.read()`](/de/docs/Web/API/ReadableStreamDefaultReader/read) aufrufen, bis der Stream beendet ist, was durch `done` signalisiert wird, das `true` ist:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Process value in some way
}
```

Der Browser steuert automatisch die Rate, mit der der Client Daten empfängt und sendet, indem er bei Bedarf Backpressure anwendet. Wenn Daten schneller eintreffen, als der Client sie `lesen()` kann, übt die zugrunde liegende Streams API Backpressure auf den Server aus. Außerdem werden `write()`-Operationen nur fortgesetzt, wenn es sicher ist, dies zu tun.

## Schließen der Verbindung

Mit `WebSocketStream` sind die Informationen, die vorher über die `WebSocket` [`close`](/de/docs/Web/API/WebSocket/close_event) und [`error`](/de/docs/Web/API/WebSocket/error_event) Ereignisse verfügbar waren, jetzt über die [`closed`](/de/docs/Web/API/WebSocketStream/closed) Eigenschaft verfügbar — dies gibt ein Promise zurück, das mit einem Objekt erfüllt wird, das den Schließungscode (vollständige Liste der [`CloseEvent` Statuscodes](/de/docs/Web/API/CloseEvent/code#value) anzeigen) und den Grund angibt, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mithilfe eines [`AbortController`](/de/docs/Web/API/AbortController) geschlossen werden. Das notwendige [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird während der Erstellung an den `WebSocketStream`-Konstruktor übergeben, und [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) kann dann bei Bedarf aufgerufen werden:

```js
const controller = new AbortController();
const wss = new WebSocketStream("wss://example.com/wss", {
  signal: controller.signal,
});

// some time later

controller.abort();
```

Alternativ können Sie die [`WebSocketStream.close()`](/de/docs/Web/API/WebSocketStream/close) Methode verwenden, um eine Verbindung zu schließen. Dies wird hauptsächlich verwendet, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten:

```js
wss.close({
  code: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Abhängig von der Serverkonfiguration und dem von Ihnen verwendeten Statuscode kann es sein, dass der Server einen benutzerdefinierten Code ignoriert zugunsten eines gültigen Codes, der für den Schließungsgrund korrekt ist.

## Ein vollständiges Beispiel für einen Client

Um die grundlegende Verwendung von `WebSocketStream` zu demonstrieren, haben wir einen Beispielclient erstellt. Sie können den [vollständigen Code](#vollständige_auflistung) am Ende des Artikels ansehen und der folgenden Erklärung folgen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bringen, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client so geschrieben, dass er mit dem Deno-Server aus [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) funktioniert, aber jeder kompatible Server wird funktionieren.

Das HTML für die Demo ist wie folgt. Es enthält Informations-[`<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) und {{htmlelement("p")}} Elemente, einen zum Schließen der WebSocket-Verbindung ({htmlelement("button")}}), der zunächst deaktiviert ist, und einen {{htmlelement("div")}}, in den wir Ausgabemeldungen schreiben können.

```html
<h2>WebSocketStream Test</h2>
<p>Sends a ping every five seconds</p>
<button id="close" disabled>Close socket connection</button>
<div id="output"></div>
```

Jetzt zum JavaScript. Zuerst holen wir uns Referenzen zu dem Ausgabefeld `<div>` und dem Schließen-Button `<button>`, und definieren eine Hilfsfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if ... else` Struktur, um die `WebSocketStream`-Unterstützung zu prüfen und eine informative Nachricht in nicht-unterstützenden Browsern auszugeben:

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
> Best Practice ist die Verwendung von sicheren WebSockets (`wss://`) in Produktiv-Apps. In diesem Demo verbinden wir uns jedoch mit localhost, weshalb wir das nicht-sichere WebSocket-Protokoll (`ws://`) verwenden müssen, damit das Beispiel funktioniert.

Der Hauptteil unseres Codes ist in der `start()` Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir erwarten das [`opened`](/de/docs/Web/API/WebSocketStream/opened)-Promise und schreiben eine Nachricht, um den Leser wissen zu lassen, dass die Verbindung erfolgreich ist. Danach erstellen wir [`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader) und [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) Instanzen von den zurückgegebenen `readable` und `writable` Eigenschaften.

Als nächstes erstellen wir eine `start()` Funktion, die "ping"-Nachrichten an den Server sendet und "pong"-Nachrichten zurück erhält, und rufen sie auf. Im Funktionskörper warten wir auf das `wss.opened`-Promise und erstellen einen Reader und Writer von dessen Erfüllungswerte. Sobald die Socket-Verbindung geöffnet ist, kommunizieren wir dies an den Benutzer und aktivieren den Schließen-Button. Als nächstes `schreiben()` wir einen `"ping"` Wert an die Socket-Verbindung und kommunizieren dies dem Benutzer. An diesem Punkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten das `lesen()` der Antwort ab, kommunizieren es dem Benutzer und schreiben dann nach einem Timeout von 5 Sekunden eine weitere `"ping"` an den Server. Dies setzt die `"ping"`/`"pong"` Schleife unendlich fort.

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
> Die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion umschließt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block, um mit möglichen Fehlern umzugehen, die auftreten können, wenn die Anwendung versucht, in den Stream zu schreiben, nachdem er geschlossen wurde.

Nun fügen wir einen Promise-Style-Codeabschnitt hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, wie vom [`closed`](/de/docs/Web/API/WebSocketStream/closed)-Promise signalisiert:

```js
wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

Schließlich fügen wir einen Event-Listener zum Schließen-Button hinzu, der die Verbindung mithilfe der `close()` Methode schließt, mit einem Code und einem benutzerdefinierten Grund. Die Funktion deaktiviert auch den Schließen-Button – wir möchten nicht, dass Benutzer ihn drücken, wenn die Verbindung bereits geschlossen ist.

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
