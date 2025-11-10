---
title: "EventSource: error-Ereignis"
short-title: error
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource) API wird ausgelöst, wenn eine Verbindung mit einer Ereignisquelle nicht geöffnet werden kann.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("error", (e) => {
  console.log("An error occurred while attempting to connect.");
});

// onerror version
evtSource.onerror = (e) => {
  console.log("An error occurred while attempting to connect.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von serverseitigen Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
