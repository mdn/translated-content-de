---
title: "OffscreenCanvasRenderingContext2D: commit()-Methode"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die Methode **`OffscreenCanvasRenderingContext2D.commit()`** der [Canvas 2D API](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) sollte ursprünglich den Bitmap des Rendering-Kontexts auf den Bitmap des Platzhalters des zugehörigen `OffscreenCanvas`-Objekts kopieren. Der Kopiervorgang ist synchron. Der Aufruf dieser Methode ist für die Übertragung nicht erforderlich, da dies automatisch während der Ausführung der Ereignisschleife erfolgt.

## Syntax

```js-nolint
commit()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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

- Die Schnittstelle, die diese Methode definiert: [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
