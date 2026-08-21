---
title: "Window: releaseEvents() Methode"
short-title: releaseEvents()
slug: Web/API/Window/releaseEvents
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Löst das Fenster von der Erfassung von Ereignissen eines bestimmten Typs.

## Syntax

```js-nolint
releaseEvents(eventType)
```

### Parameter

- `eventType`
  - : `eventType` ist eine Kombination aus den folgenden Werten:
    `Event.ABORT`, `Event.BLUR`, `Event.CLICK`,
    `Event.CHANGE`, `Event.DBLCLICK`, `Event.DRAGDDROP`,
    `Event.ERROR`, `Event.FOCUS`, `Event.KEYDOWN`,
    `Event.KEYPRESS`, `Event.KEYUP`, `Event.LOAD`,
    `Event.MOUSEDOWN`, `Event.MOUSEMOVE`, `Event.MOUSEOUT`,
    `Event.MOUSEOVER`, `Event.MOUSEUP`, `Event.MOVE`,
    `Event.RESET`, `Event.RESIZE`, `Event.SELECT`,
    `Event.SUBMIT`, `Event.UNLOAD`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.releaseEvents(Event.KEYPRESS);
```

## Hinweise

Beachten Sie, dass Sie dieser Methode eine Liste von Ereignissen mit folgendem Syntax übergeben können:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

Siehe auch [`window.captureEvents`](/de/docs/Web/API/Window/captureEvents)
({{Deprecated_Inline}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
