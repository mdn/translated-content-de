---
title: ImageBitmap
slug: Web/API/ImageBitmap
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Canvas API")}}

Die **`ImageBitmap`**-Schnittstelle repräsentiert ein Bitmap-Bild, das ohne ungebührliche Latenz auf ein {{HTMLElement("canvas")}} gezeichnet werden kann. Es kann aus einer Vielzahl von Quellobjekten mit der [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap) Fabrikmethode erstellt werden. `ImageBitmap` bietet einen asynchronen und ressourcenschonenden Weg, um Texturen für das Rendering in WebGL vorzubereiten.

`ImageBitmap` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Instanz-Eigenschaften

- [`ImageBitmap.height`](/de/docs/Web/API/ImageBitmap/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Höhe in CSS-Pixeln des `ImageData` darstellt.
- [`ImageBitmap.width`](/de/docs/Web/API/ImageBitmap/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Breite in CSS-Pixeln des `ImageData` darstellt.

## Instanz-Methoden

- [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close)
  - : Frigibt alle grafischen Ressourcen, die mit einem `ImageBitmap` verbunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
