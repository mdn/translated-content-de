---
title: "WebSocket: Close-Event"
short-title: close
slug: Web/API/WebSocket/close_event
l10n:
  sourceCommit: eba47bb55d10e6dc73f61dbefc9d3da2abf1fd78
---

{{APIRef("WebSockets API")}}

Der `close`-Event wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Ereignistyp

Ein {{domxref("CloseEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("CloseEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("CloseEvent.code", "code")}} {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` zurück, der den vom Server gesendeten Schließcode enthält.
- {{domxref("CloseEvent.reason", "reason")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Grund angibt, warum der Server die Verbindung geschlossen hat. Dies ist spezifisch für den jeweiligen Server und das Unterprotokoll.
- {{domxref("CloseEvent.wasClean", "wasClean")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Verbindung sauber geschlossen wurde oder nicht.

## Beispiele

Es könnte sinnvoll sein zu wissen, wann die Verbindung geschlossen wurde, damit Sie die Benutzeroberfläche aktualisieren oder möglicherweise Daten über die geschlossene Verbindung speichern können. Angenommen, Sie haben eine Variable namens `exampleSocket`, die sich auf einen geöffneten `WebSocket` bezieht, würde dieser Handler die Situation bearbeiten, in der der Socket geschlossen wurde.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

Sie können dieselben Aktionen mit der Event-Handler-Eigenschaft wie folgt ausführen:

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

- [WebSocket: Fehler-Event](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: Nachrichten-Event](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket: Öffnen-Event](/de/docs/Web/API/WebSocket/open_event)
- [WebSocket-Clientanwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
