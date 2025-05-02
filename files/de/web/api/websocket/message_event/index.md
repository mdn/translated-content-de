---
title: "WebSocket: message event"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `message`-Ereignis wird ausgelöst, wenn Daten über einen `WebSocket` empfangen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgelisteten Eigenschaften sind die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`data`](/de/docs/Web/API/MessageEvent/data) {{ReadOnlyInline}}
  - : Die vom Nachrichten-Emitter gesendeten Daten. Der Typ dieser Eigenschaft hängt vom Typ der WebSocket-Nachricht und dem Wert von [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType) ab.
    - Wenn der Nachrichtentyp "text" ist, ist dieses Feld ein String.
    - Wenn der Nachrichtentyp "binary" ist, kann der Typ dieser Eigenschaft vom `binaryType` dieses Sockets abgeleitet werden:
      - {{jsxref("ArrayBuffer")}} falls `binaryType` `"arraybuffer"` ist,
      - [`Blob`](/de/docs/Web/API/Blob) falls `binaryType` `"blob"` ist. Dies hat keinen zugehörigen Medientyp ([`Blob.type`](/de/docs/Web/API/Blob/type) ist `""`).
- [`origin`](/de/docs/Web/API/MessageEvent/origin) {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichten-Emitters repräsentiert.

Andere Eigenschaften der [`MessageEvent`](/de/docs/Web/API/MessageEvent)-Schnittstelle sind vorhanden, beziehen sich jedoch nicht auf die WebSocket-API und bleiben auf ihren Standardwerten:

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

- [WebSocket: close event](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: error event](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: open event](/de/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
