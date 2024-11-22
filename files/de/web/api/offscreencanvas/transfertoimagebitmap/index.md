---
title: "OffscreenCanvas: transferToImageBitmap() Methode"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: 46dd9c0c1635e8abd73040c1a71cc0ed3c27cd50
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.transferToImageBitmap()`**-Methode erzeugt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)-Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Das `OffscreenCanvas` reserviert ein neues Bild für seine nachfolgende Darstellung.

## Syntax

```js-nolint
transferToImageBitmap()
```

### Parameter

Keine.

### Rückgabewert

Ein neu allokiertes [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

Dieses `ImageBitmap` bezieht sich auf eine potenziell große Grafikressource, und um sicherzustellen, dass Ihre Webanwendung robust bleibt, ist es wichtig, nicht zu viele dieser Ressourcen gleichzeitig zu allokieren. Aus diesem Grund ist es wichtig, sicherzustellen, dass das `ImageBitmap` entweder _konsumiert_ oder _geschlossen_ wird.

Wie in den Beispielen zum [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) beschrieben, wird das Übergeben dieses `ImageBitmap` an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) das `ImageBitmap`-Objekt _konsumiert_; es bezieht sich nicht mehr auf die zugrunde liegende Grafikressource und kann nicht an andere Web-APIs übergeben werden.

Wenn Ihr Ziel darin besteht, das `ImageBitmap` an andere Web-APIs zu übergeben, die es nicht konsumieren - zum Beispiel [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) - dann sollten Sie es _schließen_, wenn Sie damit fertig sind, indem Sie [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) aufrufen. Lassen Sie nicht einfach die JavaScript-Referenz auf das `ImageBitmap` fallen; dadurch bleibt die Grafikressource erhalten, bis der Müllsammler das nächste Mal läuft.

Wenn Sie `transferToImageBitmap()` aufrufen und nicht beabsichtigen, es an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) zu übergeben, überlegen Sie, ob Sie `transferToImageBitmap()` überhaupt aufrufen müssen. Viele Web-APIs, die `ImageBitmap` akzeptieren, akzeptieren auch `OffscreenCanvas` als Argument.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft eine Ausnahme, wenn:
    - die Leinwand in einen anderen Kontextbereich, wie einen Worker, übertragen wurde
    - der Leinwandkontextmodus nicht durch Aufruf von [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) gesetzt wurde.

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
