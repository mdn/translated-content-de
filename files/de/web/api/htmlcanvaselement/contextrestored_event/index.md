---
title: "HTMLCanvasElement: contextrestored-Ereignis"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef}}

Das **`contextrestored`**-Ereignis der [Canvas-API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der Benutzeragent den unterstützenden Speicher für ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wiederherstellt.

Nach dem Empfang dieses Ereignisses können Sie Ihren Kontext erneut zeichnen, Ressourcen erneut abrufen und den Zustand erneut initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("contextrestored", (event) => {});

oncontextrestored = (event) => {};
```

## Ereignistyp

Ein generisches [`Ereignis`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codefragment erkennt das wiederhergestellte Kontextereignis.

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
- [OffscreenCanvas: contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
