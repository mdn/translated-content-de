---
title: ImageBitmap
slug: Web/API/ImageBitmap
l10n:
  sourceCommit: e899c6240801be991f92571b36132a1b6b387462
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageBitmap`**-Interface stellt ein Bitmap-Bild dar, das ohne unangemessene Verzögerung in ein {{HTMLElement("canvas")}} gezeichnet werden kann. Es kann mit einer Vielzahl von Quellobjekten unter Verwendung der Fabrikmethoden [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) oder [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) erstellt werden. `ImageBitmap` bietet einen asynchronen und ressourceneffizienten Weg, um Texturen für das Rendering in WebGL vorzubereiten.

`ImageBitmap` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Instanz-Eigenschaften

- [`ImageBitmap.height`](/de/docs/Web/API/ImageBitmap/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Höhe in CSS-Pixeln des `ImageData` darstellt.
- [`ImageBitmap.width`](/de/docs/Web/API/ImageBitmap/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Breite in CSS-Pixeln des `ImageData` darstellt.

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
