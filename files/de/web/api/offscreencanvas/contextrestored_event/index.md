---
title: "OffscreenCanvas: contextrestored Ereignis"
short-title: contextrestored
slug: Web/API/OffscreenCanvas/contextrestored_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Canvas API")}}

Das **`contextrestored`**-Ereignis des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Interfaces wird ausgelöst, wenn der Browser einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext wiederherstellt, der [zuvor verloren](/de/docs/Web/API/OffscreenCanvas/contextlost_event) gegangen war.

Sie können nach Empfang dieses Ereignisses Ihre Ressourcen neu zeichnen, neu abrufen und den Zustand Ihres Kontexts erneut initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("contextrestored", (event) => { })

oncontextrestored = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Codeausschnitt erkennt das Kontextwiederherstellungsereignis.

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

- [`OffscreenCanvas: contextlost` Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextrestored` Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
