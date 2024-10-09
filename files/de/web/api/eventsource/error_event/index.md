---
title: "EventSource: error-Ereignis"
short-title: error
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`error`**-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource) API wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden kann.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
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

- [Verwendung von servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
