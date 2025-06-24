---
title: "Window: releaseEvents() Methode"
short-title: releaseEvents()
slug: Web/API/Window/releaseEvents
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{Deprecated_Header}}

Gibt das Fenster frei, um Ereignisse eines bestimmten Typs nicht mehr abzufangen.

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

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
window.releaseEvents(Event.KEYPRESS);
```

## Anmerkungen

Beachten Sie, dass Sie dieser Methode eine Liste von Ereignissen übergeben können, indem Sie die folgende Syntax verwenden:
`window.releaseEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)`.

Siehe auch [`window.captureEvents`](/de/docs/Web/API/Window/captureEvents)
({{Deprecated_Inline}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
