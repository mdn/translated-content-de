---
title: "CanvasRenderingContext2D: isContextLost()-Methode"
short-title: isContextLost()
slug: Web/API/CanvasRenderingContext2D/isContextLost
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.isContextLost()`**-Methode der Canvas 2D API gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist (und noch nicht zurückgesetzt wurde).
Dies kann durch Treiberabstürze, Speicherüberlauf und so weiter passieren.

Wenn der User-Agent feststellt, dass der Canvas-Speicher verloren gegangen ist, löst er das [`contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) beim zugehörigen [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) aus.
Wenn dieses Ereignis nicht abgebrochen wird, versucht es, den Speicher in den Standardzustand zurückzusetzen (dies entspricht dem Aufruf von [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)).
Bei Erfolg wird das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) ausgelöst, was anzeigt, dass der Kontext bereit ist, neu initialisiert und neu gezeichnet zu werden.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn der Rendering-Kontext verloren gegangen ist; `false` sonst.

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
