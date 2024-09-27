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

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`code`](/de/docs/Web/API/CloseEvent/code) {{ReadOnlyInline}}
  - : Gibt einen `unsigned short` zurück, der den Schließungscode enthält, der vom Server gesendet wurde.
- [`reason`](/de/docs/Web/API/CloseEvent/reason) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Grund angibt, warum der Server die Verbindung geschlossen hat. Dies ist spezifisch für den jeweiligen Server und das Subprotokoll.
- [`wasClean`](/de/docs/Web/API/CloseEvent/wasClean) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Verbindung sauber geschlossen wurde oder nicht.

## Beispiele

Es kann nützlich sein zu wissen, wann die Verbindung geschlossen wurde, damit Sie die Benutzeroberfläche aktualisieren können oder gegebenenfalls Daten über die geschlossene Verbindung speichern. Angenommen, Sie haben eine Variable namens `exampleSocket`, die auf einen geöffneten `WebSocket` verweist, würde dieser Handler die Situation behandeln, bei der der Socket geschlossen wurde.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

Sie können die gleichen Aktionen auch über die Ereignis-Handler-Eigenschaft wie folgt ausführen:

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
- [Verfassen von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
