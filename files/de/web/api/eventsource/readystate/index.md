---
title: "EventSource: readyState-Eigenschaft"
short-title: readyState
slug: Web/API/EventSource/readyState
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef('WebSockets API')}}

Die **`readyState`** schreibgeschützte Eigenschaft der {{domxref("EventSource")}}-Schnittstelle gibt eine Zahl zurück, die den Zustand der Verbindung darstellt.

## Wert

Eine Zahl, die einem der drei möglichen Zustandskonstanten entspricht, die auf der {{domxref("EventSource")}}-Schnittstelle definiert sind:

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
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EventSource")}}
