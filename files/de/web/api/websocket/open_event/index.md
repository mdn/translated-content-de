---
title: "WebSocket: open-Event"
short-title: open
slug: Web/API/WebSocket/open_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `open`-Event wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` eröffnet wird.

## Syntax

Verwenden Sie den Event-Namen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
```

## Eventtyp

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

- [WebSocket: close-Event](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: error-Event](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: message-Event](/de/docs/Web/API/WebSocket/message_event)
- [Leitfaden zum Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
