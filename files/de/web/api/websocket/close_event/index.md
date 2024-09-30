---
title: "WebSocket: close Ereignis"
short-title: close
slug: Web/API/WebSocket/close_event
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `close` Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("close", (event) => {});

onclose = (event) => {};
```

## Ereignistyp

Ein [`CloseEvent`](/de/docs/Web/API/CloseEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CloseEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften von der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`code`](/de/docs/Web/API/CloseEvent/code) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` zurück, der den vom Server gesendeten Code enthält.
- [`reason`](/de/docs/Web/API/CloseEvent/reason) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Grund angibt, warum der Server die Verbindung geschlossen hat. Dies ist spezifisch für den jeweiligen Server und das Sub-Protokoll.
- [`wasClean`](/de/docs/Web/API/CloseEvent/wasClean) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Verbindung sauber geschlossen wurde oder nicht.

## Beispiele

Es könnte nützlich sein zu wissen, wann die Verbindung geschlossen wurde, um die Benutzeroberfläche zu aktualisieren oder möglicherweise Daten über die geschlossene Verbindung zu speichern. Angenommen, Sie haben eine Variable namens `exampleSocket`, die auf einen geöffneten `WebSocket` verweist, würde dieser Handler die Situation behandeln, in der der Socket geschlossen wurde.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

Die gleichen Aktionen können Sie auch über die Ereignis-Handler-Eigenschaft ausführen, wie folgt:

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

- [WebSocket: error Ereignis](/de/docs/Web/API/WebSocket/error_event)
- [WebSocket: message Ereignis](/de/docs/Web/API/WebSocket/message_event)
- [WebSocket: open Ereignis](/de/docs/Web/API/WebSocket/open_event)
- [Entwicklung von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
