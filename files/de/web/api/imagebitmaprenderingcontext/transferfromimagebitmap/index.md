---
title: "ImageBitmapRenderingContext: transferFromImageBitmap()-Methode"
short-title: transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageBitmapRenderingContext.transferFromImageBitmap()`**
Methode zeigt das angegebene {{domxref("ImageBitmap")}} im Canvas an, das mit diesem Rendering-Kontext verbunden ist. Der Besitz des `ImageBitmap` wird ebenfalls auf das Canvas übertragen.

Diese Methode wurde zuvor `transferImageBitmap()` genannt, wurde jedoch in einer Spezifikationsänderung umbenannt. Der alte Name wird als Alias beibehalten, um Codebrüche zu vermeiden.

## Syntax

```js-nolint
transferFromImageBitmap(bitmap)
```

### Parameter

- `bitmap`
  - : Ein {{domxref("ImageBitmap")}} Objekt zum Übertragen.

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

// Zeichnen einer WebGL-Szene außerhalb des Bildschirms
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Durchführung einiger Zeichnungen mit dem gl-Kontext

// Übertragung des aktuellen Rahmens auf das sichtbare Canvas
const bitmap = offscreen.transferToImageBitmap();
htmlCanvas.transferFromImageBitmap(bitmap);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert, {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
