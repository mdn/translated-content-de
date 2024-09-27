---
title: "WebSocket: message-Ereignis"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `message`-Ereignis wird ausgelöst, wenn Daten über einen `WebSocket` empfangen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die von dem Nachrichten-Emitter gesendeten Daten. Der Typ dieser Eigenschaft hängt vom Typ der WebSocket-Nachricht und vom Wert von [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType) ab.
    - Wenn der Nachrichtentyp "text" ist, dann ist dieses Feld ein String.
    - Wenn der Nachrichtentyp "binary" ist, kann der Typ dieser Eigenschaft aus dem `binaryType` dieses Sockets abgeleitet werden:
      - {{jsxref("ArrayBuffer")}} wenn `binaryType` `"arraybuffer"` ist,
      - [`Blob`](/de/docs/Web/API/Blob) wenn `binaryType` `"blob"` ist. Dies hat keinen zugehörigen Medientyp ([`Blob.type`](/de/docs/Web/API/Blob/type) ist `""`).
- [`origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichten-Emitters darstellt.

Andere Eigenschaften der [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle sind vorhanden, stehen jedoch nicht im Zusammenhang mit der WebSocket-API und bleiben auf ihren Standardwerten:

- [`lastEventId`](/de/docs/Web/API/MessageEvent/lastEventId) {{ReadOnlyInline}}
- [`source`](/de/docs/Web/API/MessageEvent/source) {{ReadOnlyInline}}
- [`ports`](/de/docs/Web/API/MessageEvent/ports) {{ReadOnlyInline}}

## Beispiele

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocket: close-Ereignis](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: error-Ereignis](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: open-Ereignis](/de/docs/Web/API/WebSocket/open_event)
- [WebSocket-Clientanwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
