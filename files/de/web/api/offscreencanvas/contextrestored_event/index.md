---
title: "OffscreenCanvas: contextrestored-Ereignis"
short-title: contextrestored
slug: Web/API/OffscreenCanvas/contextrestored_event
l10n:
  sourceCommit: fd3ed7581658bd33c7a596a84be81103faedb10a
---

{{APIRef("Canvas API")}}

Das **`contextrestored`**-Ereignis des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interfaces wird ausgelöst, wenn der Browser einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext wiederherstellt, der [zuvor verloren gegangen](/de/docs/Web/API/OffscreenCanvas/contextlost_event) war.

Sie können nach Empfang dieses Ereignisses Ihre Zeichenoperationen erneut ausführen, Ressourcen erneut abrufen und den Zustand Ihres Kontextes neu initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("contextrestored", (event) => {});

oncontextrestored = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Codefragment erkennt das Kontext-wiederhergestellt-Ereignis.

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

canvas.addEventListener(
  "contextrestored",
  (e) => {
    console.log(e);
    // call to redrawCanvas() or similar
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffscreenCanvas: contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
