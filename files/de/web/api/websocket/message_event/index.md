---
title: "WebSocket: message Ereignis"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Das `message` Ereignis wird ausgelöst, wenn Daten über einen `WebSocket` empfangen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften von der Elternebenfläche, {{domxref("Event")}}, verfügbar._

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : Die von dem Nachrichtenauslöser gesendeten Daten. Der Typ dieser Eigenschaft hängt vom Typ der WebSocket-Nachricht und dem Wert von {{domxref("WebSocket.binaryType")}} ab.
    - Wenn der Nachrichtentyp "text" ist, dann ist dieses Feld ein String.
    - Wenn der Nachrichtentyp "binary" ist, kann der Typ dieser Eigenschaft aus dem `binaryType` dieser Verbindung abgeleitet werden:
      - {{jsxref("ArrayBuffer")}} wenn `binaryType` `"arraybuffer"` ist,
      - {{domxref("Blob")}} wenn `binaryType` `"blob"` ist. Dies hat keinen zugehörigen Medientyp ({{domxref("Blob.type")}} ist `""`).
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : Ein String, der die Herkunft des Nachrichtenauslösers darstellt.

Weitere Eigenschaften der {{domxref("MessageEvent")}} Schnittstelle sind vorhanden, beziehen sich jedoch nicht auf die WebSocket API und verbleiben bei ihren Standardwerten:

- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}

## Beispiele

```js
// Erstellen Sie eine WebSocket-Verbindung.
const socket = new WebSocket("ws://localhost:8080");

// Hören auf Nachrichten
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
