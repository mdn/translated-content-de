---
title: "EventSource: open Ereignis"
short-title: open
slug: Web/API/EventSource/open_event
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef}}

Das `open` Ereignis der {{domxref("EventSource")}} API wird ausgelöst, wenn eine Verbindung mit einer Ereignisquelle geöffnet wird.

Dieses Ereignis kann nicht abgebrochen werden und es ist nicht weiterleitbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("open", (event) => {});

onopen = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
const evtSource = new EventSource("sse.php");

// addEventListener-Version
evtSource.addEventListener("open", (e) => {
  console.log("The connection has been established.");
});

// onopen-Version
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
- {{domxref("EventSource/error_event", "error")}}
- {{domxref("EventSource/message_event", "message")}}
