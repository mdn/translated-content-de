---
title: "HTMLCanvasElement: contextlost-Ereignis"
short-title: contextlost
slug: Web/API/HTMLCanvasElement/contextlost_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`contextlost`**-Ereignis der [Canvas API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der Benutzeragent erkennt, dass der zugehörige Speicher eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Kontextes verloren ist. Kontexte können aus mehreren Gründen verloren gehen, wie z.B. Treiberabstürze oder die Anwendung läuft aus dem Speicher, usw.

Standardmäßig versucht der Benutzeragent, den Kontext wiederherzustellen und löst dann das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) aus. Benutzerdefinierter Code kann verhindern, dass der Kontext wiederhergestellt wird, indem [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) während der Ereignisbehandlung aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("contextlost", (event) => { })

oncontextlost = (event) => { }
```

## Ereignistyp

Ein generischer [`Event`](/de/docs/Web/API/Event).

## Beispiel

Das folgende Codefragment erkennt das `contextlost`-Ereignis.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Um zu verhindern, dass der Kontext wiederhergestellt wird, könnte der Code stattdessen so aussehen:

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
