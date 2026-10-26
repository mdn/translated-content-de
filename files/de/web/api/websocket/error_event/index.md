---
title: "WebSocket: error-Ereignis"
short-title: error
slug: Web/API/WebSocket/error_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` aufgrund eines Fehlers geschlossen wurde (beispielsweise weil Daten nicht gesendet werden konnten).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
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
- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
