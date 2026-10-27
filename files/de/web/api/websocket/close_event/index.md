---
title: "WebSocket: close-Ereignis"
short-title: close
slug: Web/API/WebSocket/close_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `close`-Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("close", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclose = (event) => { }
```

## Ereignistyp

Ein [`CloseEvent`](/de/docs/Web/API/CloseEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CloseEvent")}}

## Beispiele

Wenn die Verbindung geschlossen wurde, möchten Sie möglicherweise die Benutzeroberfläche aktualisieren oder Daten über die geschlossene Verbindung speichern. Angenommen, Sie haben eine Variable namens `exampleSocket`, die auf einen geöffneten `WebSocket` verweist. Dieser Handler behandelt den Fall, dass der Socket geschlossen wurde.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

Sie können dieselben Aktionen auch über die Event-Handler-Eigenschaft ausführen (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onclose` hinzugefügte Ereignis-Listener ersetzt werden):

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

- [WebSocket: error-Ereignis](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: message-Ereignis](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket: open-Ereignis](/de/docs/Web/API/WebSocket/open_event)
- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
