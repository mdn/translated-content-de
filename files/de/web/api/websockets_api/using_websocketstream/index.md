---
title: Verwendung von WebSocketStream, um einen Client zu schreiben
slug: Web/API/WebSockets_API/Using_WebSocketStream
l10n:
  sourceCommit: d102514706e844bd642850aa340c9645c74bf70c
---

{{DefaultAPISidebar("WebSockets API")}}{{non-standard_header}}

Die {{domxref("WebSocketStream")}} API ist eine auf {{jsxref("Promise")}} basierende Alternative zu {{domxref("WebSocket")}} zur Erstellung und Nutzung clientseitiger WebSocket-Verbindungen. `WebSocketStream` verwendet die [Streams API](/de/docs/Web/API/Streams_API) für den Empfang und Versand von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren können (keine zusätzliche Aktion vom Entwickler erforderlich), um die Lese- oder Schreibgeschwindigkeit zu regulieren und Engpässe in der Anwendung zu vermeiden.

Dieser Artikel erklärt, wie die {{domxref("WebSocketStream")}} API verwendet wird, um einen WebSocket-Client zu erstellen.

## Feature-Erkennung

Um zu prüfen, ob die `WebSocketStream` API unterstützt wird, können Sie Folgendes verwenden:

```js
if ("WebSocketStream" in self) {
  // WebSocketStream wird unterstützt
}
```

## Erstellen eines WebSocketStream-Objekts

Um einen WebSocket-Client zu erstellen, müssen Sie zunächst eine neue `WebSocketStream`-Instanz mit dem {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}} Konstruktor erstellen. In seiner einfachsten Form nimmt er die URL des WebSocket-Servers als Argument:

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

Es kann auch ein Optionsobjekt enthalten, das benutzerdefinierte Protokolle und/oder ein {{domxref("AbortSignal")}} enthält (siehe [Schließen der Verbindung](#schließen_der_verbindung)):

```js
const controller = new AbortController();
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  protocols: ["amqp", "mqtt"],
  signal: controller.signal,
});
```

## Senden und Empfangen von Daten

Die `WebSocketStream`-Instanz hat eine {{domxref("WebSocketStream.opened", "opened")}}-Eigenschaft — diese gibt ein Versprechen zurück, das mit einem Objekt erfüllt wird, das eine {{domxref("ReadableStream")}}- und eine {{domxref("WritableStream")}}-Instanz enthält, sobald die WebSocket-Verbindung erfolgreich geöffnet wird:

```js
const { readable, writable } = await wss.opened;
```

Das Aufrufen von {{domxref("ReadableStream.getReader", "getReader()")}} und {{domxref("WritableStream.getWriter", "getWriter()")}} auf diesen Objekten liefert uns einen {{domxref("ReadableStreamDefaultReader")}} bzw. einen {{domxref("WritableStreamDefaultWriter")}}, die zum Lesen und Schreiben der Socket-Verbindung verwendet werden können:

```js
const reader = readable.getReader();
const writer = writable.getWriter();
```

Um Daten zum Socket zu schreiben, können Sie {{domxref("WritableStreamDefaultWriter.write()")}} verwenden:

```js
writer.write("My message");
```

Um Daten vom Socket zu lesen, können Sie kontinuierlich {{domxref("ReadableStreamDefaultReader.read()")}} aufrufen, bis der Stream beendet ist, was dadurch angezeigt wird, dass `done` `true` ist:

```js
while (true) {
  const { value, done } = await reader.read();
  if (done) {
    break;
  }

  // Wert auf irgendeine Weise verarbeiten
}
```

Der Browser steuert automatisch die Geschwindigkeit, mit der der Client Daten empfängt und sendet, indem bei Bedarf Backpressure angewendet wird. Falls Daten schneller ankommen, als der Client sie `lesen()` kann, übt die zugrundeliegende Streams API Backpressure auf den Server aus. Außerdem werden `write()`-Operationen nur ausgeführt, wenn es sicher ist.

## Schließen der Verbindung

Bei `WebSocketStream` sind die Informationen, die zuvor über die `WebSocket`-{{domxref("WebSocket.close_event", "close")}}- und {{domxref("WebSocket.error_event", "error")}}-Ereignisse verfügbar waren, jetzt über die {{domxref("WebSocketStream.closed", "closed")}}-Eigenschaft verfügbar — diese gibt ein Versprechen zurück, das mit einem Objekt erfüllt wird, das den Schließcode (siehe die vollständige Liste der [`CloseEvent`-Statuscodes](/de/docs/Web/API/CloseEvent/code#value)) und den Grund enthält, warum der Server die Verbindung geschlossen hat:

```js
const { code, reason } = await wss.closed;
```

Wie bereits erwähnt, kann die WebSocket-Verbindung mit einem {{domxref("AbortController")}} geschlossen werden. Das notwendige {{domxref("AbortSignal")}} wird dem `WebSocketStream`-Konstruktor während der Erstellung übergeben und {{domxref("AbortController.abort()")}} kann dann bei Bedarf aufgerufen werden:

```js
const controller = new AbortController();
const wss = new WebSocketStream("wss://example.com/wss", {
  signal: controller.signal,
});

// irgendwann später

controller.abort();
```

Alternativ können Sie die {{domxref("WebSocketStream.close()")}}-Methode verwenden, um eine Verbindung zu schließen. Dies wird hauptsächlich verwendet, wenn Sie einen benutzerdefinierten Code und/oder Grund angeben möchten:

```js
wss.close({
  code: 4000,
  reason: "Night draws to a close",
});
```

> [!NOTE]
> Je nach Serverkonfiguration und dem verwendeten Statuscode kann der Server einen benutzerdefinierten Code zugunsten eines gültigen Codes ignorieren, der für den Schließungsgrund korrekt ist.

## Ein vollständiges Beispiel für einen Client

Um die grundlegende Nutzung von `WebSocketStream` zu demonstrieren, haben wir einen Beispiel-Client erstellt. Sie können die [vollständige Auflistung](#vollständige_auflistung) am Ende des Artikels sehen und dem folgenden Erklärungsteil folgen.

> [!NOTE]
> Um das Beispiel zum Laufen zu bringen, benötigen Sie auch eine Serverkomponente. Wir haben unseren Client so geschrieben, dass er zusammen mit dem in [Writing a WebSocket server in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno) erklärten Deno-Server funktioniert, aber jeder kompatible Server wäre geeignet.

Das HTML für die Demo sieht wie folgt aus. Es enthält Informationsseiten zu [`<h2>`](/de/docs/Web/HTML/Element/Heading_Elements) und {{htmlelement("p")}}-Elemente, einen {{htmlelement("button")}}, um die WebSocket-Verbindung zu schließen, der anfänglich deaktiviert ist, und ein {{htmlelement("div")}}, um Ausgabemeldungen hinein zu schreiben.

```html
<h2>WebSocketStream Test</h2>
<p>Sendet alle fünf Sekunden ein Ping</p>
<button id="close" disabled>Schließe die Socket-Verbindung</button>
<div id="output"></div>
```

Nun zum JavaScript. Zuerst holen wir uns Referenzen auf die Ausgabe `<div>` und den Schließ-`<button>`, und definieren eine Hilfsfunktion, die Nachrichten in das `<div>` schreibt:

```js
const output = document.querySelector("#output");
const closeBtn = document.querySelector("#close");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}
```

Als nächstes erstellen wir eine `if ... else`-Struktur zur Feature-Erkennung von `WebSocketStream` und geben eine informative Nachricht in nicht unterstützenden Browsern aus:

```js
if (!("WebSocketStream" in self)) {
  writeToScreen("Ihr Browser unterstützt WebSocketStream nicht");
} else {
  // unterstützender Codepfad
}
```

Im unterstützenden Codepfad beginnen wir mit der Definition einer Variablen, die die WebSocket-Server-URL enthält, und erstellen eine neue `WebSocketServer`-Instanz:

```js
const wsURL = "ws://127.0.0.1/";
const wss = new WebSocketStream(wsURL);
```

> [!NOTE]
> Es ist Best Practice, sichere WebSockets (`wss://`) in Produktions-Apps zu verwenden. In dieser Demo verbinden wir uns jedoch mit localhost, daher müssen wir das nicht-sichere WebSocket-Protokoll (`ws://`) verwenden, damit das Beispiel funktioniert.

Das Hauptstück unseres Codes ist in der `start()`-Funktion enthalten, die wir definieren und dann sofort aufrufen. Wir warten auf das {{domxref("WebSocketStream.opened", "opened")}}-Versprechen und nach dessen Erfüllung schreiben wir eine Nachricht, um den Leser wissen zu lassen, dass die Verbindung erfolgreich ist, und erstellen {{domxref("ReadableStreamDefaultReader")}}- und {{domxref("WritableStreamDefaultWriter")}}-Instanzen aus den zurückgegebenen `readable`- und `writable`-Eigenschaften.

Als nächstes erstellen wir eine `start()`-Funktion, die "Ping"-Nachrichten an den Server sendet und "Pong"-Nachrichten zurück erhält, und rufen sie auf. Im Funktionskörper warten wir das `wss.opened`-Versprechen ab und erstellen einen Reader und Writer aus den Erfüllungswerten. Sobald der Socket geöffnet ist, teilen wir dies dem Benutzer mit und aktivieren den Schließen-Button. Als nächstes `schreiben()` wir einen `"ping"` auf den Socket und kommunizieren dies dem Benutzer. Zu diesem Zeitpunkt wird der Server mit einer `"pong"`-Nachricht antworten. Wir warten das `lesen()` der Antwort ab, teilen es dem Benutzer mit und schreiben dann ein weiteres `"ping"` nach einem 5-Sekunden-Timeout an den Server. Dies setzt die `"ping"`/`"pong"`-Schleife unendlich fort.

```js
async function start() {
  const { readable, writable } = await wss.opened;
  writeToScreen("VERBUNDEN");
  closeBtn.disabled = false;
  const reader = readable.getReader();
  const writer = writable.getWriter();

  writer.write("ping");
  writeToScreen("GESENDET: ping");

  while (true) {
    const { value, done } = await reader.read();
    writeToScreen(`EMPFANGEN: ${value}`);
    if (done) {
      break;
    }

    setTimeout(async () => {
      try {
        await writer.write("ping");
        writeToScreen("GESENDET: ping");
      } catch (e) {
        writeToScreen(`Fehler beim Schreiben auf den Socket: ${e.message}`);
      }
    }, 5000);
  }
}

start();
```

> [!NOTE]
> Die {{domxref("setTimeout")}}-Funktion umgibt den `write()`-Aufruf in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, um Fehler zu behandeln, die auftreten können, wenn die Anwendung versucht, auf den Stream zu schreiben, nachdem er geschlossen wurde.

Jetzt fügen wir einen Promise-Style-Codeabschnitt hinzu, um den Benutzer über den Code und den Grund zu informieren, wenn die WebSocket-Verbindung geschlossen wird, signalisiert durch das Erfüllen des {{domxref("WebSocketStream.closed", "closed")}}-Versprechens:

```js
wss.closed.then((result) => {
  writeToScreen(
    `GETRENNT: Code ${result.closeCode}, Nachricht "${result.reason}"`,
  );
  console.log("Socket geschlossen", result.closeCode, result.reason);
});
```

Zum Schluss fügen wir einen Event Listener für den Schließen-Button hinzu, der die Verbindung mit der `close()`-Methode mit einem Code und einem benutzerdefinierten Grund schließt. Die Funktion deaktiviert auch den Schließen-Button — wir möchten nicht, dass Benutzer ihn drücken, wenn die Verbindung bereits geschlossen ist.

```js
closeBtn.addEventListener("click", () => {
  wss.close({
    code: 1000,
    reason: "Das war's, Leute",
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
    <p>Sendet alle fünf Sekunden ein Ping</p>
    <button id="close" disabled>Schließe die Socket-Verbindung</button>
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
        writeToScreen("Ihr Browser unterstützt WebSocketStream nicht");
      } else {
        const wsURL = "ws://127.0.0.1/";
        const wss = new WebSocketStream(wsURL);

        console.log(wss.url);

        async function start() {
          const { readable, writable, extensions, protocol } = await wss.opened;
          writeToScreen("VERBUNDEN");
          closeBtn.disabled = false;
          const reader = readable.getReader();
          const writer = writable.getWriter();

          writer.write("ping");
          writeToScreen("GESENDET: ping");

          while (true) {
            const { value, done } = await reader.read();
            writeToScreen(`EMPFANGEN: ${value}`);
            if (done) {
              break;
            }

            setTimeout(() => {
              writer.write("ping");
              writeToScreen("GESENDET: ping");
            }, 5000);
          }
        }

        start();

        wss.closed.then((result) => {
          writeToScreen(
            `GETRENNT: Code ${result.closeCode}, Nachricht "${result.reason}"`,
          );
          console.log("Socket geschlossen", result.closeCode, result.reason);
        });

        closeBtn.addEventListener("click", () => {
          wss.close({
            code: 1000,
            reason: "Das war's, Leute",
          });

          closeBtn.disabled = true;
        });
      }
    </script>
  </body>
</html>
```
