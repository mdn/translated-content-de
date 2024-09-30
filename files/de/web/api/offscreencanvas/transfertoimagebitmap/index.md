---
title: "OffscreenCanvas: transferToImageBitmap()-Methode"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.transferToImageBitmap()`**-Methode erstellt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Das `OffscreenCanvas` weist ein neues Bild für sein anschließendes Rendering zu.

## Syntax

```js-nolint
transferToImageBitmap()
```

### Parameter

Keine.

### Rückgabewert

Ein neu zugewiesenes [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

Dieses `ImageBitmap` referenziert eine potenziell große Grafikressource, und um sicherzustellen, dass Ihre Webanwendung robust bleibt, ist es wichtig, die Zuweisung zu vieler dieser Ressourcen zu vermeiden. Aus diesem Grund ist es wichtig sicherzustellen, dass das `ImageBitmap` entweder _verbraucht_ oder _geschlossen_ wird.

Wie in den [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Beispielen beschrieben, wird durch das Übergeben dieses `ImageBitmap` an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) das `ImageBitmap`-Objekt _verbraucht_; es referenziert die zugrunde liegende Grafikressource nicht mehr und kann nicht an andere Web-APIs übergeben werden.

Wenn Ihr Ziel ist, das `ImageBitmap` an andere Web-APIs weiterzugeben, die es nicht verbrauchen - zum Beispiel [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) - sollten Sie es _schließen_, wenn Sie fertig damit sind, indem Sie [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) aufrufen. Lassen Sie nicht einfach die JavaScript-Referenz auf das `ImageBitmap` fallen; dies würde dessen Grafikressource am Leben halten, bis der Garbage Collector das nächste Mal ausgeführt wird.

Wenn Sie `transferToImageBitmap()` aufrufen und nicht beabsichtigen, es an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) zu übergeben, sollten Sie überlegen, ob Sie `transferToImageBitmap()` überhaupt aufrufen müssen. Viele Web-APIs, die `ImageBitmap` akzeptieren, akzeptieren auch `OffscreenCanvas` als Argument.

## Beispiele

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

// Either:
// Pass this `ImageBitmap` to `ImageBitmapRenderingContext.transferFromImageBitmap`
// or:
// Use the `ImageBitmap` with other web APIs, and call `ImageBitmap.close()`!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`ImageBitmapRenderingContext.transferFromImageBitmap`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap)
