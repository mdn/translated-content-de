---
title: "OffscreenCanvas: transferToImageBitmap() Methode"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`transferToImageBitmap()`** Methode des [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Schnittstelle erstellt ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) Objekt aus dem zuletzt gerenderten Bild des `OffscreenCanvas`. Das Bild im `OffscreenCanvas` wird durch ein neues leeres Bild für die nachfolgende Darstellung ersetzt.

Wenn Sie nur den aktuellen Inhalt des `OffscreenCanvas` in ein anderes Canvas kopieren müssen, verwenden Sie die [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) Methode des Canvas-Kontextes mit dem `OffscreenCanvas` als Eingabe.

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
    - das Canvas in einen anderen Kontextbereich, wie z.B. einen Worker, übertragen wurde
    - der Canvas-Kontextmodus nicht durch Aufrufen von [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) gesetzt wurde.

## Beschreibung

Dieses `ImageBitmap` referenziert eine potenziell große Grafikressource, und um sicherzustellen, dass Ihre Webanwendung robust bleibt, ist es wichtig, zu vermeiden, dass zu viele dieser Ressourcen gleichzeitig zugewiesen werden. Aus diesem Grund ist es wichtig sicherzustellen, dass das `ImageBitmap` entweder _verbraucht_ oder _geschlossen_ wird.

Wie in den [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Beispielen beschrieben, _konsumiert_ das Übergeben dieses `ImageBitmap` an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) das `ImageBitmap` Objekt; es referenziert nicht mehr die zugrundeliegende Grafikressource und kann nicht an andere Web-APIs weitergegeben werden.

Wenn Ihr Ziel darin besteht, das `ImageBitmap` an andere Web-APIs weiterzugeben, die es nicht konsumieren - zum Beispiel [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) - sollten Sie es _schließen_, wenn Sie damit fertig sind, indem Sie [`ImageBitmap.close()`](/de/docs/Web/API/ImageBitmap/close) aufrufen. Lassen Sie nicht einfach den JavaScript-Verweis auf das `ImageBitmap` fallen; dies würde die Grafikressource bis zum nächsten Lauf des Garbage Collectors am Leben halten.

Wenn Sie `transferToImageBitmap()` aufrufen und nicht beabsichtigen, es an [`ImageBitmapRenderingContext.transferFromImageBitmap()`](/de/docs/Web/API/ImageBitmapRenderingContext/transferFromImageBitmap) weiterzugeben, überlegen Sie, ob Sie `transferToImageBitmap()` überhaupt aufrufen müssen. Viele Web-APIs, die `ImageBitmap` akzeptieren, akzeptieren auch `OffscreenCanvas` als Argument, einschließlich [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage).

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
