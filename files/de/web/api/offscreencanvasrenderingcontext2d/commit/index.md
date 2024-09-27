---
title: "OffscreenCanvasRenderingContext2D: commit() Methode"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
l10n:
  sourceCommit: 95036ee8bdd7ae80519c726f501aa032ad93585f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die **`OffscreenCanvasRenderingContext2D.commit()`**-Methode der [Canvas 2D API](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) war dazu gedacht, das Bitmap des Rendering-Kontexts in das Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements des zugehörigen `OffscreenCanvas`-Objekts zu kopieren. Die Kopieroperation erfolgt synchron. Das Aufrufen dieser Methode ist nicht notwendig für die Übertragung, da sie automatisch während der Ausführung der Ereignisschleife geschieht.

## Syntax

```js-nolint
commit()
```

## Beispiele

```js
const placeholder = document.createElement("canvas");
const offscreen = placeholder.transferControlToOffscreen();
const ctx = offscreenCanvas.getContext("2d");

// Perform some drawing using the 2d context
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 10, 10);

// Push placeholder to the canvas element
ctx.commit();
```

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, welches diese Methode definiert: [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
