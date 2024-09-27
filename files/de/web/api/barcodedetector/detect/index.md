---
title: "BarcodeDetector: detect() Methode"
short-title: detect()
slug: Web/API/BarcodeDetector/detect
l10n:
  sourceCommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`detect()`**-Methode der
[`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von erkannten Barcodes in einem Bild erfüllt wird.

## Syntax

```js-nolint
detect(imageBitmapSource)
```

### Parameter

- `imageBitmapSource`
  - : Empfängt eine Bildquelle als Parameter. Dies kann ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement), ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement), ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap), ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), ein [`VideoFrame`](/de/docs/Web/API/VideoFrame), ein [`Blob`](/de/docs/Web/API/Blob) vom Typ Bild oder ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt sein.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von
`DetectedBarcode`-Objekten mit den folgenden Eigenschaften erfüllt wird:

- `boundingBox`
  - : Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das die
    Abmessungen eines Rechtecks zurückgibt, das den Umfang eines erkannten Barcodes im Bild darstellt.
- `cornerPoints`
  - : Die x- und y-Koordinaten der vier Eckpunkte des erkannten Barcodes relativ zum Bild, beginnend mit der oberen linken Ecke im Uhrzeigersinn. Dies kann aufgrund von perspektivischen Verzerrungen im Bild nicht quadratisch sein.
- `format`
  - : Das erkannte Barcode-Format. (Eine vollständige Liste der Formate finden Sie unter den [unterstützten Barcode-Formaten](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)).
- `rawValue`
  - : Ein aus den Barcode-Daten dekodierter String.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Parameter angegeben ist oder der `type` nicht der eines `ImageBitmapSource` ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `imageBitmapSource` einen Ursprung hat, der nicht mit dem Ursprungsdokument übereinstimmt, oder wenn `imageBitmapSource` ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ist und dessen [origin-clean](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-origin-clean)-Flag auf `false` gesetzt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `imageBitmapSource` ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) ist und nicht vollständig dekodiert wurde oder die Dekodierung fehlgeschlagen ist, oder wenn es ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) ist und dessen [`readyState`](/de/docs/Web/API/HTMLMediaElement/readyState) `HAVE_NOTHING` oder `HAVE_METADATA` ist.

## Beispiele

Dieses Beispiel verwendet die `detect()`-Methode, um die Barcodes innerhalb des
gegebenen Bildes zu erkennen. Diese werden durchlaufen und die Barcode-Daten werden in der Konsole protokolliert.

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.error(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
