---
title: "HTMLCanvasElement: contextrestored-Ereignis"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`contextrestored`**-Ereignis der [Canvas-API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der Benutzeragent den Hintergrundspeicher für ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wiederherstellt.

Sie können nach Empfang dieses Ereignisses Ihre Elemente neu zeichnen, Ressourcen erneut abrufen und den Zustand Ihres Kontexts neu initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("contextrestored", (event) => { })

oncontextrestored = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Das folgende Codefragment erkennt das Context Restore-Ereignis.

```js
const canvas = document.getElementById("canvas");

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

- [`HTMLCanvasElement: contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas: contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
