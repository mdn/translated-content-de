---
title: ImageBitmap
slug: Web/API/ImageBitmap
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Canvas API")}}

Die **`ImageBitmap`**-Schnittstelle stellt ein Bitmap-Bild dar, das ohne unnötige Verzögerung auf ein {{HTMLElement("canvas")}} gezeichnet werden kann. Es kann aus einer Vielzahl von Quellobjekten mit der {{domxref("createImageBitmap()")}}-Fabrikmethode erstellt werden. `ImageBitmap` bietet einen asynchronen und ressourcenschonenden Weg, um Texturen für das Rendering in WebGL vorzubereiten.

`ImageBitmap` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Instanz-Eigenschaften

- {{domxref("ImageBitmap.height")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Höhe, in CSS-Pixeln, der `ImageData` darstellt.
- {{domxref("ImageBitmap.width")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Breite, in CSS-Pixeln, der `ImageData` darstellt.

## Instanz-Methoden

- {{domxref("ImageBitmap.close()")}}
  - : Gibt alle grafischen Ressourcen frei, die mit einem `ImageBitmap` verbunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
