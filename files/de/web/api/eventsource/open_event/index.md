---
title: "EventSource: open Ereignis"
short-title: open
slug: Web/API/EventSource/open_event
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`open`** Ereignis der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle wird ausgelöst, wenn eine Verbindung mit einer Ereignisquelle geöffnet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const evtSource = new EventSource("sse.php");

// addEventListener version
evtSource.addEventListener("open", (e) => {
  console.log("The connection has been established.");
});

// onopen version
evtSource.onopen = (e) => {
  console.log("The connection has been established.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von servergesendeten Ereignissen](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`error`](/de/docs/Web/API/EventSource/error_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
