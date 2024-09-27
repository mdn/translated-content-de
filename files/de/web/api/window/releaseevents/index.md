---
title: "Window: releaseEvents()-Methode"
short-title: releaseEvents()
slug: Web/API/Window/releaseEvents
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef}}{{Deprecated_Header}}

Gibt das Fenster von der Erfassung von Ereignissen eines bestimmten Typs frei.

## Syntax

```js-nolint
releaseEvents(eventType)
```

### Parameter

- `eventType`

  - : `eventType` ist eine Kombination der folgenden Werte:
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

Beachten Sie, dass Sie eine Liste von Ereignissen mit der folgenden Syntax an diese Methode übergeben können:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

Siehe auch [`window.captureEvents`](/de/docs/Web/API/Window/captureEvents)
({{Deprecated_Inline}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
