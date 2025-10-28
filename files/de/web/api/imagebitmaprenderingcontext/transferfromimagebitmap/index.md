---
title: "ImageBitmapRenderingContext: transferFromImageBitmap() Methode"
short-title: transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
l10n:
  sourceCommit: 2eaff59544a9626b153bee1042941e63417b6e54
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageBitmapRenderingContext.transferFromImageBitmap()`** Methode zeigt das angegebene [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auf der mit diesem Rendering-Kontext verbundenen Leinwand an. Das Eigentum des `ImageBitmap` wird ebenfalls auf die Leinwand übertragen.

Diese Methode wurde zuvor `transferImageBitmap()` genannt, jedoch in einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um Codebrüche zu vermeiden.

## Syntax

```js-nolint
transferFromImageBitmap(bitmap)
```

### Parameter

- `bitmap`
  - : Ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Objekt zum Übertragen oder `null`. Wenn der Wert `null` ist, wird die Leinwand auf leer zurückgesetzt.

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

- Das Interface, das diese Methode definiert, [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
