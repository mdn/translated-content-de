---
title: "WebSocket: message-Ereignis"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `message`-Ereignis wird ausgelöst, wenn Daten über einen `WebSocket` empfangen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MessageEvent`](/de/docs/Web/API/MessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MessageEvent")}}

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
- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
