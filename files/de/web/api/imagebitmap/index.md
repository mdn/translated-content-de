---
title: ImageBitmap
slug: Web/API/ImageBitmap
l10n:
  sourceCommit: d030ae03d26d003beea8069d29cce1d3cbeaaadc
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageBitmap`** Interface repräsentiert ein Bitmap-Bild, das ohne unnötige Verzögerung in ein {{HTMLElement("canvas")}} gezeichnet werden kann. Es kann aus einer Vielzahl von Quellobjekten erstellt werden, indem die Fabrikmethoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) oder [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) verwendet werden. `ImageBitmap` bietet einen asynchronen und ressourcenschonenden Weg, um Texturen für das Rendern in WebGL vorzubereiten.

`ImageBitmap` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Instanz-Eigenschaften

- [`ImageBitmap.height`](/de/docs/Web/API/ImageBitmap/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Höhe, in CSS-Pixeln, des `ImageBitmap` darstellt.
- [`ImageBitmap.width`](/de/docs/Web/API/ImageBitmap/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Breite, in CSS-Pixeln, des `ImageBitmap` darstellt.

## Instanz-Methoden

- [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close)
  - : Entsorgt alle grafischen Ressourcen, die mit einem `ImageBitmap` verbunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.createImageBitmap`](/de/docs/Web/API/Window/createImageBitmap)
- [`WorkerGlobalScope.createImageBitmap`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`OffscreenCanvas.transferToImageBitmap()`](/de/docs/Web/API/OffscreenCanvas/transferToImageBitmap)
