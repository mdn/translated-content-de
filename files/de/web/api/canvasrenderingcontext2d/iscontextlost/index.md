---
title: "CanvasRenderingContext2D: Methode isContextLost()"
short-title: isContextLost()
slug: Web/API/CanvasRenderingContext2D/isContextLost
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{APIRef("Canvas API")}}

Die Methode **`CanvasRenderingContext2D.isContextLost()`** der Canvas-2D-API gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist (und noch nicht zurückgesetzt wurde).
Dies kann beispielsweise durch einen Treiberabsturz oder Speichermangel geschehen.

Wenn der User Agent erkennt, dass der Hintergrundspeicher des Canvas verloren gegangen ist, löst er das [`contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) am zugehörigen [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) aus.
Wird dieses Ereignis nicht abgebrochen, versucht er, den Hintergrundspeicher auf den Standardzustand zurückzusetzen (dies entspricht einem Aufruf von [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)).
Bei Erfolg löst er das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) aus. Dies zeigt an, dass der Kontext erneut initialisiert und der Inhalt neu gezeichnet werden kann.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

`true`, wenn der Rendering-Kontext verloren gegangen ist; andernfalls `false`.

## Beispiele

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
