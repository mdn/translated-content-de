---
title: "Window: releaseEvents() Methode"
short-title: releaseEvents()
slug: Web/API/Window/releaseEvents
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

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

## Anmerkungen

Beachten Sie, dass Sie eine Liste von Ereignissen an diese Methode übergeben können, indem Sie die folgende Syntax verwenden:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

Siehe auch [`window.captureEvents`](/de/docs/Web/API/Window/captureEvents)
({{Deprecated_Inline}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
