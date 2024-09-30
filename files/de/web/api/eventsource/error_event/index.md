---
title: "EventSource: Fehlerereignis"
short-title: Fehler
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef}}

Das `error`-Ereignis der [`EventSource`](/de/docs/Web/API/EventSource)-API wird ausgelöst, wenn eine Verbindung zu einer Ereignisquelle nicht geöffnet werden kann.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Effekte aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

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

- [Verwendung von Server-Sent Events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
