---
title: "OffscreenCanvas: transferToImageBitmap() Methode"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: 02b5541746bce5a337ac592b4e93551bebd8a96d
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`transferToImageBitmap()`**-Methode der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle erzeugt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Das Bild im `OffscreenCanvas` wird durch ein neues leeres Bild für nachfolgende Renderings ersetzt.

Wenn Sie nur den aktuellen Inhalt des `OffscreenCanvas` in eine andere Leinwand kopieren müssen, verwenden Sie die [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) Methode mit dem `OffscreenCanvas` als Eingabe.

## Syntax

```js-nolint
transferToImageBitmap()
```

### Parameter

Keine.

### Rückgabewert

Ein neu zugewiesenes [`ImageBitmap`](/de/docs/Web/API/ImageBitmap).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - die Leinwand in einen anderen Kontextbereich, wie z.B. einen Worker, übertragen wurde
    - der Leinwand-Kontextmodus nicht durch Aufrufen von [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) festgelegt wurde.

## Beschreibung

Dieses `ImageBitmap` referenziert eine potenziell große Grafikressource, und um sicherzustellen, dass Ihre Webanwendung stabil bleibt, ist es wichtig, die Zuweisung zu vieler dieser Ressourcen zu vermeiden. Aus diesem Grund ist es wichtig sicherzustellen, dass das `ImageBitmap` entweder _verbraucht_ oder _geschlossen_ wird.

Wie in den [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Beispielen beschrieben, führt das Übergeben dieses `ImageBitmap` an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) dazu, dass das `ImageBitmap`-Objekt _verbraucht_ wird; es referenziert nicht mehr die zugrunde liegende Grafikressource und kann nicht mehr an andere Web-APIs übergeben werden.

Wenn Ihr Ziel darin besteht, das `ImageBitmap` an andere Web-APIs weiterzugeben, die es nicht verbrauchen - zum Beispiel [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) - dann sollten Sie es _schließen_, wenn Sie damit fertig sind, indem Sie [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) aufrufen. Lassen Sie die JavaScript-Referenz zum `ImageBitmap` nicht einfach fallen; dadurch bleibt dessen Grafikressource bis zur nächsten Ausführung des Garbage Collectors erhalten.

Wenn Sie `transferToImageBitmap()` aufrufen und nicht die Absicht haben, es an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) weiterzugeben, überlegen Sie, ob Sie `transferToImageBitmap()` überhaupt aufrufen müssen. Viele Web-APIs, die `ImageBitmap` annehmen, akzeptieren auch `OffscreenCanvas` als Argument, einschließlich [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage).

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
