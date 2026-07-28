---
title: "WebSocket: close-Ereignis"
short-title: close
slug: Web/API/WebSocket/close_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `close`-Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein [`CloseEvent`](/de/docs/Web/API/CloseEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CloseEvent")}}

## Beispiele

Es könnte sinnvoll sein, zu wissen, wann die Verbindung geschlossen wurde, damit die Benutzeroberfläche aktualisiert oder möglicherweise Daten über die geschlossene Verbindung gespeichert werden können. Angenommen, Sie haben eine Variable namens `exampleSocket`, die auf einen geöffneten `WebSocket` verweist, würde dieser Handler die Situation behandeln, in der der Socket geschlossen wurde.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

Sie können dieselben Aktionen mit der Ereignis-Handler-Eigenschaft durchführen, wie folgt:

```js
exampleSocket.onclose = (event) => {
  console.log("The connection has been closed successfully.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebSocket: error event](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: message event](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket: open event](/de/docs/Web/API/WebSocket/open_event)
- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
