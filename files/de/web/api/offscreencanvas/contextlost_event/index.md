---
title: "OffscreenCanvas: contextlost-Ereignis"
short-title: contextlost
slug: Web/API/OffscreenCanvas/contextlost_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Canvas API")}}

Das **`contextlost`**-Ereignis der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Schnittstelle wird ausgelöst, wenn der Browser erkennt, dass der [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext verloren gegangen ist.
Ein Kontext kann aus verschiedenen Gründen verloren gehen, beispielsweise weil der zugehörige GPU-Treiber abstürzt oder der Anwendung der Arbeitsspeicher ausgeht.

Standardmäßig versucht der User Agent, den Kontext wiederherzustellen, und löst anschließend das [`contextrestored`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextrestored_event) aus.
Sie können die Wiederherstellung des Kontexts verhindern, indem Sie während der Ereignisbehandlung [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contextlost", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
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

Um die Wiederherstellung des Kontexts zu verhindern, könnte der Event-Handler-Code stattdessen so aussehen:

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
