---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
l10n:
  sourceCommit: e4669cf973422d9badcc54ae3d09f97286d720a3
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Das **`BarcodeDetector`** Interface der [Barcode Detection API](/de/docs/Web/API/Barcode_Detection_API) ermöglicht die Erkennung von eindimensionalen und zweidimensionalen Barcodes in Bildern.

## Konstruktoren

- [`BarcodeDetector.BarcodeDetector()`](/de/docs/Web/API/BarcodeDetector/BarcodeDetector) {{Experimental_Inline}}
  - : Erstellt und gibt ein `BarcodeDetector`-Objekt zurück, mit optionalen `BarcodeDetectorOptions`.

## Statische Methoden

- [`getSupportedFormats()`](/de/docs/Web/API/BarcodeDetector/getSupportedFormats_static) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} der unterstützten [Barcode-Formattypen](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) erfüllt wird.

## Instanzmethoden

- [`detect()`](/de/docs/Web/API/BarcodeDetector/detect) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von `DetectedBarcode`-Objekten erfüllt wird, die folgende Eigenschaften aufweisen:
    - `boundingBox`: Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das die Abmessungen eines Rechtecks, das das Ausmaß eines erkannten Barcodes darstellt und mit dem Bild ausgerichtet ist, zurückgibt.
    - `cornerPoints`: Die x- und y-Koordinaten der vier Eckpunkte des erkannten Barcodes relativ zum Bild, beginnend mit der oberen linken Ecke und im Uhrzeigersinn fortsetzend. Dies könnte aufgrund von Perspektivverzerrungen im Bild nicht quadratisch sein.
    - `format`: Das erkannte Barcode-Format. (Für eine vollständige Liste der Formate konsultieren Sie die [unterstützten Barcode-Formate](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)).
    - `rawValue`: Ein aus den Barcodedaten dekodierter String.

## Beispiele

### Erstellen eines Detektors

Dieses Beispiel erstellt ein neues Barcode-Detektor-Objekt mit angegebenen unterstützten Formaten und testet die Browser-Kompatibilität.

```js
// check compatibility
if (!("BarcodeDetector" in globalThis)) {
  console.log("Barcode Detector is not supported by this browser.");
} else {
  console.log("Barcode Detector supported!");

  // create new detector
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

### Ermitteln der unterstützten Formate

Das folgende Beispiel ruft die statische Methode `getSupportedFormats()` auf und protokolliert die Ergebnisse in der Konsole.

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### Barcodes erkennen

Dieses Beispiel verwendet die Methode `detect()`, um die Barcodes im angegebenen Bild zu erkennen. Diese werden durchlaufen und die Barcode-Daten werden in der Konsole protokolliert.

```js
barcodeDetector
  .detect(imageEl)
  .then((barcodes) => {
    barcodes.forEach((barcode) => console.log(barcode.rawValue));
  })
  .catch((err) => {
    console.log(err);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [barcodefaq.com: Eine Website mit Informationen über verschiedene Barcodes und Beispielen der verschiedenen Typen.](https://www.barcodefaq.com/)
- [Schnellerkennung von Formen in Bildern](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
