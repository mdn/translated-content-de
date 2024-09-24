---
title: "WebSocket: open Ereignis"
short-title: open
slug: Web/API/WebSocket/open_event
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Das `open` Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geöffnet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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

- [WebSocket: close Ereignis](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: error Ereignis](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: message Ereignis](/de/docs/Web/API/WebSocket/message_event)
- [Erstellen von WebSocket-Clientanwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
