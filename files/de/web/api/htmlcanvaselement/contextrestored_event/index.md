---
title: "HTMLCanvasElement: contextrestored Ereignis"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Das **`contextrestored`**-Ereignis der [Canvas-API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der Benutzeragent den Speichervorrat für einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wiederherstellt.

Nach Erhalt dieses Ereignisses können Sie den Kontext neu zeichnen, Ressourcen erneut abrufen und den Zustand Ihres Kontexts neu initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("contextrestored", (event) => { })

oncontextrestored = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Das folgende Codefragment erkennt das wiederhergestellte Kontextevent.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextrestored", (e) => {
  console.log(e);
  // call to redrawCanvas() or similar
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`: `contextlost` Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas`: `contextlost` Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
