---
title: "EventSource: Fehlerereignis"
short-title: Fehler
slug: Web/API/EventSource/error_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef}}

Das `error`-Ereignis der {{domxref("EventSource")}} API wird ausgelöst, wenn eine Verbindung mit einer Ereignisquelle nicht geöffnet werden kann.

Dieses Ereignis ist nicht abbruchbar und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
const evtSource = new EventSource("sse.php");

// Version mit addEventListener
evtSource.addEventListener("error", (e) => {
  console.log("Ein Fehler ist beim Versuch, eine Verbindung aufzubauen, aufgetreten.");
});

// Version mit onerror
evtSource.onerror = (e) => {
  console.log("Ein Fehler ist beim Versuch, eine Verbindung aufzubauen, aufgetreten.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Server-sent Events](/de/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [`open`](/de/docs/Web/API/EventSource/open_event)
- [`message`](/de/docs/Web/API/EventSource/message_event)
