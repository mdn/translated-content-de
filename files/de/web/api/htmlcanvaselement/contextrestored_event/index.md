---
title: "HTMLCanvasElement: contextrestored-Ereignis"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef}}

Das **`contextrestored`**-Ereignis der [Canvas API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der User Agent den Speicher für einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wiederherstellt.

Sie können Ihr Canvas erneut zeichnen, Ressourcen erneut abrufen und den Zustand Ihres Kontexts nach Empfang dieses Ereignisses neu initialisieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandle-Eigenschaft.

```js
addEventListener("contextrestored", (event) => {});

oncontextrestored = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Der folgende Codeausschnitt erkennt das contextrestored-Ereignis.

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
