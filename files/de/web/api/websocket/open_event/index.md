---
title: "WebSocket: open-Ereignis"
short-title: open
slug: Web/API/WebSocket/open_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `open`-Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geöffnet wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("open", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onopen = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", (event) => {
  socket.send("Hello Server!");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocket: close-Ereignis](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: error-Ereignis](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: message-Ereignis](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
