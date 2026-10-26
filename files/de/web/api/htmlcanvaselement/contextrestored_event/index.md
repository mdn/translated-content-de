---
title: "HTMLCanvasElement: contextrestored-Ereignis"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Canvas API")}}

Das **`contextrestored`**-Ereignis der [Canvas API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der User-Agent den zugrunde liegenden Speicher für einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wiederherstellt.

Nach dem Empfang dieses Ereignisses können Sie den Canvas-Inhalt neu zeichnen, Ressourcen erneut abrufen und den Zustand Ihres Kontexts neu initialisieren.

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

## Beispiel

Das folgende Codefragment erkennt das Ereignis, das bei der Wiederherstellung des Kontexts ausgelöst wird.

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

- [`HTMLCanvasElement`: `contextlost`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas`: `contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
