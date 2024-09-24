---
title: "WebSocket: Fehlerereignis"
short-title: Fehler
slug: Web/API/WebSocket/error_event
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Das `error`-Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` aufgrund eines Fehlers geschlossen wurde (zum Beispiel, wenn einige Daten nicht gesendet werden konnten).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
// WebSocket-Verbindung erstellen
const socket = new WebSocket("ws://localhost:8080");

// Auf mögliche Fehler lauschen
socket.addEventListener("error", (event) => {
  console.log("WebSocket-Fehler: ", event);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocket: close event](/de/docs/Web/API/WebSocket/close_event)
- [WebSocket: message event](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket: open event](/de/docs/Web/API/WebSocket/open_event)
- [Writing WebSocket client applications](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
