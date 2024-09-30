---
title: "ImageBitmapRenderingContext: transferFromImageBitmap() Methode"
short-title: transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageBitmapRenderingContext.transferFromImageBitmap()`** Methode zeigt das angegebene [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) im Canvas an, das mit diesem Rendering-Kontext verbunden ist. Der Besitz des `ImageBitmap` wird ebenfalls auf das Canvas übertragen.

Diese Methode hieß zuvor `transferImageBitmap()`, wurde jedoch in einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um Code-Brüche zu vermeiden.

## Syntax

```js-nolint
transferFromImageBitmap(bitmap)
```

### Parameter

- `bitmap`
  - : Ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt, das übertragen werden soll.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

- Das Interface, das diese Methode definiert, [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
