---
title: "OffscreenCanvas: contextrestored-Ereignis"
short-title: contextrestored
slug: Web/API/OffscreenCanvas/contextrestored_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Canvas API")}}

Das **`contextrestored`**-Ereignis der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle wird ausgelöst, wenn der Browser einen [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext wiederherstellt, der [zuvor verloren gegangen ist](/de/docs/Web/API/OffscreenCanvas/contextlost_event).

Nachdem Sie dieses Ereignis empfangen haben, können Sie den Inhalt neu zeichnen, Ressourcen erneut abrufen und den Zustand Ihres Kontexts neu initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contextrestored", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncontextrestored = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Codeausschnitt erkennt, wenn der Kontext wiederhergestellt wurde.

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

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

- [`OffscreenCanvas: contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
