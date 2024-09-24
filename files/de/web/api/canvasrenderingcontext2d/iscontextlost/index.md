---
title: "CanvasRenderingContext2D: isContextLost()-Methode"
short-title: isContextLost()
slug: Web/API/CanvasRenderingContext2D/isContextLost
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef}}

Die **`CanvasRenderingContext2D.isContextLost()`**-Methode der Canvas 2D API gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist (und noch nicht zurückgesetzt wurde). Dies kann aufgrund von Treiberabstürzen, Speichermangel usw. auftreten.

Wenn der Benutzeragent feststellt, dass der Canvas-Speicher verloren gegangen ist, wird das [`contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) beim zugehörigen [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst. Wenn dieses Ereignis nicht abgebrochen wird, versucht es den Speicherspeicher auf den Standardzustand zurückzusetzen (dies entspricht dem Aufruf von {{domxref("CanvasRenderingContext2D.reset()")}}). Bei Erfolg wird das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) ausgelöst, was darauf hinweist, dass der Kontext bereit ist, wieder initialisiert und neu gezeichnet zu werden.

## Syntax

```js-nolint
isContextLost()
```

### Parameter

Keine.

### Rückgabewert

`true` wenn der Rendering-Kontext verloren gegangen ist; `false` sonst.

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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- [`HTMLCanvasElement: contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`HTMLCanvasElement: contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
