---
title: "ImageBitmapRenderingContext: transferFromImageBitmap() Methode"
short-title: transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageBitmapRenderingContext.transferFromImageBitmap()`**-Methode zeigt das angegebene [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) im mit diesem Rendering-Kontext verbundenen Canvas an. Die Eigentümerschaft des `ImageBitmap` wird ebenfalls an das Canvas übertragen.

Diese Methode wurde zuvor `transferImageBitmap()` genannt, wurde jedoch in einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um Codebruch zu vermeiden.

## Syntax

```js-nolint
transferFromImageBitmap(bitmap)
```

### Parameter

- `bitmap`
  - : Ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt, das übertragen werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### HTML

```html
<canvas id="htmlCanvas"></canvas>
```

### JavaScript

```js
const htmlCanvas = document
  .getElementById("htmlCanvas")
  .getContext("bitmaprenderer");

// Draw a WebGL scene offscreen
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

// Transfer the current frame to the visible canvas
const bitmap = offscreen.transferToImageBitmap();
htmlCanvas.transferFromImageBitmap(bitmap);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
