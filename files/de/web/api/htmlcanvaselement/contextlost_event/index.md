---
title: "HTMLCanvasElement: contextlost-Ereignis"
short-title: contextlost
slug: Web/API/HTMLCanvasElement/contextlost_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Canvas API")}}

Das **`contextlost`**-Ereignis der [Canvas API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der User Agent erkennt, dass der einem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Kontext zugeordnete zugrunde liegende Speicher verloren gegangen ist.
Ein Kontext kann aus verschiedenen Gründen verloren gehen, beispielsweise durch einen Treiberabsturz oder weil der Anwendung der Arbeitsspeicher ausgeht.

Standardmäßig versucht der User Agent, den Kontext wiederherzustellen, und löst anschließend das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) aus.
Anwendungscode kann die Wiederherstellung des Kontexts verhindern, indem er während der Ereignisverarbeitung [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contextlost", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungs-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncontextlost = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Das folgende Codefragment erkennt das `contextlost`-Ereignis.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Um die Wiederherstellung des Kontexts zu verhindern, könnte der Code stattdessen so aussehen:

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement: contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas: contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
