---
title: "WebSocket: close Ereignis"
short-title: close
slug: Web/API/WebSocket/close_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Das `close` Ereignis wird ausgelöst, wenn eine Verbindung mit einem `WebSocket` geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein [`CloseEvent`](/de/docs/Web/API/CloseEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("CloseEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften stehen Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), zur Verfügung._

- [`code`](/de/docs/Web/API/CloseEvent/code) {{ReadOnlyInline}}
  - : Gibt ein `unsigned short` zurück, das den vom Server gesendeten Schließungscode enthält.
- [`reason`](/de/docs/Web/API/CloseEvent/reason) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Grund angibt, warum der Server die Verbindung geschlossen hat. Dies ist spezifisch für den jeweiligen Server und das Sub-Protokoll.
- [`wasClean`](/de/docs/Web/API/CloseEvent/wasClean) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Verbindung sauber geschlossen wurde oder nicht.

## Beispiele

Es könnte nützlich sein zu wissen, wann die Verbindung geschlossen wurde, damit Sie die Benutzeroberfläche aktualisieren oder eventuell Daten über die geschlossene Verbindung speichern können. Wenn Sie eine Variable namens `exampleSocket` haben, die sich auf einen geöffneten `WebSocket` bezieht, würde dieser Handler die Situation behandeln, in der der Socket geschlossen wurde.

```js
exampleSocket.addEventListener("close", (event) => {
  console.log("The connection has been closed successfully.");
});
```

Sie können die gleichen Aktionen mit der Ereignishandler-Eigenschaft ausführen, wie folgt:

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
- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
