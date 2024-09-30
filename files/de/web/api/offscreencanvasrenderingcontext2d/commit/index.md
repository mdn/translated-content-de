---
title: "OffscreenCanvasRenderingContext2D: commit()-Methode"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
l10n:
  sourceCommit: 95036ee8bdd7ae80519c726f501aa032ad93585f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die Methode **`OffscreenCanvasRenderingContext2D.commit()`** der [Canvas 2D API](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) war gedacht, um das Bitmap des Rendering-Kontexts auf das Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements des zugehörigen `OffscreenCanvas`-Objekts zu kopieren. Der Kopiervorgang ist synchron. Das Aufrufen dieser Methode ist für die Übertragung nicht erforderlich, da sie automatisch während der Ausführung der Ereignisschleife erfolgt.

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

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
