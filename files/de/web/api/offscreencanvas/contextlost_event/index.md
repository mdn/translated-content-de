---
title: "OffscreenCanvas: contextlost-Ereignis"
short-title: contextlost
slug: Web/API/OffscreenCanvas/contextlost_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Canvas API")}}

Das **`contextlost`**-Ereignis des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interfaces wird ausgelöst, wenn der Browser erkennt, dass der Kontext des [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) verloren gegangen ist. Kontexte können aus verschiedenen Gründen verloren gehen, wie z.B. ein Absturz des zugehörigen GPU-Treibers oder die Anwendung läuft aus dem Speicher, und so weiter.

Standardmäßig wird der Benutzeragent versuchen, den Kontext wiederherzustellen und dann das [`contextrestored`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextrestored_event) auslösen. Benutzer-Code kann verhindern, dass der Kontext wiederhergestellt wird, indem während der Ereignisbehandlung [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("contextlost", (event) => { })

oncontextlost = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Codefragment erkennt das `contextlost`-Ereignis.

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

// Do drawing etc

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Um zu verhindern, dass der Kontext wiederhergestellt wird, könnte der Ereignishandler-Code stattdessen so aussehen:

```js
canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffScreenCanvas: contextrestored`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextrestored_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
