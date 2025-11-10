---
title: "EventSource: open-Event"
short-title: open
slug: Web/API/EventSource/open_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Das **`open`**-Event des [`EventSource`](/de/docs/Web/API/EventSource)-Interfaces wird ausgelöst, wenn eine Verbindung mit einer Ereignisquelle geöffnet wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("open", (event) => { })

onopen = (event) => { }
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

- [Verwendung von server-sent events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`error`](/de/docs/Web/API/EventSource/error_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
