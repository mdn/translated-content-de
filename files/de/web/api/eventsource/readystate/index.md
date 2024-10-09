---
title: "EventSource: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/EventSource/readyState
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Die schreibgeschützte **`readyState`**-Eigenschaft der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle gibt eine Zahl zurück, die den Zustand der Verbindung repräsentiert.

## Wert

Eine Zahl, die eine der drei möglichen Zustandskonstanten darstellt, die auf der [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle definiert sind:

- `EventSource.CONNECTING` (0)
  - : Die Verbindung ist noch nicht geöffnet.
- `EventSource.OPEN` (1)
  - : Die Verbindung ist geöffnet und bereit zur Kommunikation.
- `EventSource.CLOSED` (2)
  - : Die Verbindung ist geschlossen oder konnte nicht geöffnet werden.

## Beispiele

```js
const evtSource = new EventSource("sse.php");
console.log(evtSource.readyState);
```

> [!NOTE]
> Ein vollständiges Beispiel finden Sie auf GitHub — sehen Sie sich [Simple SSE demo using PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
