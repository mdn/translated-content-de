---
title: "OffscreenCanvas: transferToImageBitmap()-Methode"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.transferToImageBitmap()`**-Methode erstellt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Das `OffscreenCanvas` weist ein neues Bild für seine nachfolgende Darstellung zu.

## Syntax

```js-nolint
transferToImageBitmap()
```

### Parameter

Keine.

### Rückgabewert

Ein neu zugewiesenes [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

Dieses `ImageBitmap` referenziert potenziell große Grafikressourcen, und um sicherzustellen, dass Ihre Webanwendung robust bleibt, ist es wichtig, nicht zu viele dieser Ressourcen gleichzeitig zuzuweisen. Aus diesem Grund ist es wichtig, sicherzustellen, dass das `ImageBitmap` entweder _konsumiert_ oder _geschlossen_ wird.

Wie in den [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Beispielen beschrieben, _konsumiert_ das Übergeben dieses `ImageBitmap` an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) das `ImageBitmap`-Objekt; es referenziert nicht mehr die zugrunde liegende Grafikressource und kann nicht an andere Web-APIs übergeben werden.

Wenn Ihr Ziel ist, das `ImageBitmap` an andere Web-APIs zu übergeben, die es nicht konsumieren - zum Beispiel [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) - sollten Sie es _schließen_, wenn Sie damit fertig sind, indem Sie [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) aufrufen. Lassen Sie nicht einfach die JavaScript-Referenz auf das `ImageBitmap` fallen; dies würde die Grafikressource am Leben erhalten, bis das nächste Mal der Garbage Collector läuft.

Wenn Sie `transferToImageBitmap()` aufrufen und nicht beabsichtigen, es an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) zu übergeben, überlegen Sie, ob Sie `transferToImageBitmap()` überhaupt aufrufen müssen. Viele Web-APIs, die `ImageBitmap` akzeptieren, akzeptieren auch `OffscreenCanvas` als Argument.

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
