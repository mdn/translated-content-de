---
title: "OffscreenCanvas: transferToImageBitmap() Methode"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvas.transferToImageBitmap()`** Methode erstellt ein {{domxref("ImageBitmap")}}-Objekt aus dem zuletzt gerenderten Bild der `OffscreenCanvas`. Die `OffscreenCanvas` reserviert ein neues Bild für das folgende Rendering.

## Syntax

```js-nolint
transferToImageBitmap()
```

### Parameter

Keine.

### Rückgabewert

Ein neu zugewiesenes {{domxref("ImageBitmap")}}.

Dieses `ImageBitmap` referenziert eine potenziell große Grafikressource. Um sicherzustellen, dass Ihre Webanwendung stabil bleibt, ist es wichtig, nicht zu viele dieser Ressourcen gleichzeitig zuzuweisen. Daher ist es wichtig sicherzustellen, dass das `ImageBitmap` entweder _verbraucht_ oder _geschlossen_ wird.

Wie in den {{domxref("OffscreenCanvas")}} Beispielen beschrieben, wird das `ImageBitmap` Objekt _verbraucht_, wenn es an {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} übergeben wird; es referenziert dann nicht mehr die zugrunde liegende Grafikressource und kann nicht an andere Web-APIs übergeben werden.

Wenn Ihr Ziel ist, das `ImageBitmap` an andere Web-APIs zu übergeben, die es nicht verbrauchen – zum Beispiel {{domxref("CanvasRenderingContext2D.drawImage()")}} – dann sollten Sie es _schließen_, wenn Sie damit fertig sind, indem Sie {{domxref("ImageBitmap.close()")}} aufrufen. Lassen Sie nicht einfach die JavaScript-Referenz auf das `ImageBitmap` fallen; dies würde seine Grafikressource am Leben halten, bis der Garbage Collector das nächste Mal ausgeführt wird.

Wenn Sie `transferToImageBitmap()` aufrufen und nicht die Absicht haben, es an {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} zu übergeben, überlegen Sie, ob Sie `transferToImageBitmap()` überhaupt aufrufen müssen. Viele Web-APIs, die `ImageBitmap` akzeptieren, akzeptieren auch `OffscreenCanvas` als Argument.

## Beispiele

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Führen Sie einige Zeichnungen mit dem GL-Kontext aus

offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

// Entweder:
// Übergeben Sie dieses `ImageBitmap` an `ImageBitmapRenderingContext.transferFromImageBitmap`
// oder:
// Verwenden Sie das `ImageBitmap` mit anderen Web-APIs und rufen Sie `ImageBitmap.close()` auf!
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert, {{domxref("OffscreenCanvas")}}
- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap")}}
