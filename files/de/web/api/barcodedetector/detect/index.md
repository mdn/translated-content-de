---
title: "BarcodeDetector: detect()-Methode"
short-title: detect()
slug: Web/API/BarcodeDetector/detect
l10n:
  sourceCommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`detect()`**-Methode der
{{domxref("BarcodeDetector")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von erkannten Barcodes innerhalb eines Bildes erfüllt wird.

## Syntax

```js-nolint
detect(imageBitmapSource)
```

### Parameter

- `imageBitmapSource`
  - : Empfängt eine Bildquelle als Parameter. Dies kann ein {{domxref("HTMLImageElement")}}, ein {{domxref("SVGImageElement")}}, ein {{domxref("HTMLVideoElement")}}, ein {{domxref("HTMLCanvasElement")}}, ein {{domxref("ImageBitmap")}}, ein {{domxref("OffscreenCanvas")}}, ein {{domxref("VideoFrame")}}, ein {{domxref('Blob')}} vom Typ Bild oder ein {{domxref('ImageData')}}-Objekt sein.

### Rückgabewert

Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von
`DetectedBarcode`-Objekten erfüllt wird, die folgende Eigenschaften aufweisen:

- `boundingBox`
  - : Ein {{domxref('DOMRectReadOnly')}}, welches die
    Dimensionen eines Rechtecks zurückgibt, das das Ausmaß eines erkannten Barcodes darstellt und mit dem Bild ausgerichtet ist.
- `cornerPoints`
  - : Die x- und y-Koordinaten der vier Eckpunkte des
    erkannten Barcodes relativ zum Bild, beginnend mit der oberen linken Ecke im Uhrzeigersinn. Dies muss aufgrund von Perspektivverzerrungen innerhalb des Bildes nicht quadratisch sein.
- `format`
  - : Das erkannte Barcode-Format. (Für eine vollständige Liste der Formate siehe
    das [unterstützte Barcode-Format](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)).
- `rawValue`
  - : Ein String, der aus den Barcode-Daten dekodiert wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Parameter angegeben ist oder der `type` nicht vom Typ eines `ImageBitmapSource` ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `imageBitmapSource` einen Ursprung hat, der nicht mit dem Ursprung des Dokuments übereinstimmt, oder wenn der `imageBitmapSource` ein {{domxref('HTMLCanvasElement')}} ist und dessen [origin-clean](https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-origin-clean) Flag auf `false` gesetzt ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `imageBitmapSource` ein {{domxref('HTMLImageElement')}} ist und nicht vollständig dekodiert ist oder das Dekodieren fehlgeschlagen ist, oder wenn es sich um ein {{domxref('HTMLVideoElement')}} handelt und dessen {{domxref('HTMLMediaElement.readyState', 'readyState')}} `HAVE_NOTHING` oder `HAVE_METADATA` ist.

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
