---
title: "WebSocket: error-Ereignis"
short-title: error
slug: Web/API/WebSocket/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` aufgrund eines Fehlers geschlossen wurde (zum Beispiel, wenn einige Daten nicht gesendet werden konnten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// Create WebSocket connection
const socket = new WebSocket("ws://localhost:8080");

// Listen for possible errors
socket.addEventListener("error", (event) => {
  console.log("WebSocket error: ", event);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocket: close-Ereignis](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: message-Ereignis](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket: open-Ereignis](/de/docs/Web/API/WebSocket/open_event)
- [WebSocket-Clientanwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
