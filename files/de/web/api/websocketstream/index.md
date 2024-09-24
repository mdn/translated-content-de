---
title: WebSocketStream
slug: Web/API/WebSocketStream
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}

Die **`WebSocketStream`**-Schnittstelle der {{domxref("WebSockets API", "WebSockets API", "", "nocode")}} ist eine auf Versprechen basierende API zur Verbindung mit einem WebSocket-Server. Sie verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen und kann daher automatisch vom Stream-[Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure) profitieren. Dies reguliert die Lese- oder Schreibgeschwindigkeit, um Engpässe in der Anwendung zu vermeiden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}} {{experimental_inline}}
  - : Erstellt eine neue Instanz des `WebSocketStream`-Objekts.

## Instanz-Eigenschaften

- {{domxref("WebSocketStream.url", "url")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die URL des WebSocket-Servers zurück, mit dem die `WebSocketStream`-Instanz erstellt wurde.
- {{domxref("WebSocketStream.closed", "closed")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung geschlossen ist. Das Objekt enthält den Schließungscode und den Grund, wie vom Server gesendet.
- {{domxref("WebSocketStream.opened", "opened")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, sobald die Socket-Verbindung erfolgreich geöffnet ist. Unter anderem enthält dieses Objekt eine Instanz von {{domxref("ReadableStream")}} und {{domxref("WritableStream")}} zum Empfangen und Senden von Daten über die Verbindung.

## Instanz-Methoden

- {{domxref("WebSocketStream.close", "close()")}} {{experimental_inline}}
  - : Schließt die WebSocket-Verbindung.

## Beispiele

```js
const output = document.querySelector("#output");

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
}
```

Sehen Sie [Using WebSocketStream to write a client](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream) für ein vollständiges Beispiel mit ausführlicher Erklärung.

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe https://github.com/whatwg/websockets/pull/48 für den Standardisierungsfortschritt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocketStream: Integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
