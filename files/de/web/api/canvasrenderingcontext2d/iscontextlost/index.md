---
title: "CanvasRenderingContext2D: isContextLost()-Methode"
short-title: isContextLost()
slug: Web/API/CanvasRenderingContext2D/isContextLost
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.isContextLost()`**-Methode der Canvas 2D API gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist (und noch nicht zurückgesetzt wurde).
Dies kann aufgrund von Treiberabstürzen, Speichermangel und Ähnlichem auftreten.

Wenn der Benutzeragent feststellt, dass der Canvas-Speicher verloren gegangen ist, wird das [`contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) beim zugehörigen [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst.
Wenn dieses Ereignis nicht abgebrochen wird, versucht es, den Speicherspeicher in den Standardzustand zurückzusetzen (dies entspricht dem Aufruf von [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)).
Bei Erfolg wird das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) ausgelöst, das anzeigt, dass der Kontext bereit ist, neu initialisiert und neu gezeichnet zu werden.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn der Rendering-Kontext verloren gegangen ist; andernfalls `false`.

### Beispiele

```js
const ctx = canvas.getContext("2d");

if (ctx.isContextLost()) {
  console.log("Context is lost");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`HTMLCanvasElement: contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`HTMLCanvasElement: contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
