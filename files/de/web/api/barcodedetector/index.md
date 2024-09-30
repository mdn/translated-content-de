---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
l10n:
  sourceCommit: 6bfd45572529a34b4e3a059dcdd37ca6def2e0cd
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`BarcodeDetector`**-Schnittstelle der [Barcode Detection API](/de/docs/Web/API/Barcode_Detection_API) ermöglicht die Erkennung von linearen und zweidimensionalen Barcodes in Bildern.

## Konstruktoren

- [`BarcodeDetector.BarcodeDetector()`](/de/docs/Web/API/BarcodeDetector/BarcodeDetector) {{Experimental_Inline}}
  - : Erstellt und gibt ein `BarcodeDetector`-Objekt zurück, mit optionalen `BarcodeDetectorOptions`.

## Statische Methoden

- [`getSupportedFormats()`](/de/docs/Web/API/BarcodeDetector/getSupportedFormats_static) {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, welches mit einem {{jsxref('Array')}} von unterstützten [Barcode-Formattypen](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) erfüllt wird.

## Instanzmethoden

- [`detect()`](/de/docs/Web/API/BarcodeDetector/detect) {{Experimental_Inline}}

  - : Gibt ein {{jsxref('Promise')}} zurück, welches mit einem Array von `DetectedBarcode`-Objekten mit folgenden Eigenschaften erfüllt wird:

    - `boundingBox`: Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly), das die Abmessungen eines Rechtecks zurückgibt, das den Umfang eines erkannten Barcodes darstellt und mit dem Bild ausgerichtet ist.
    - `cornerPoints`: Die x- und y-Koordinaten der vier Eckpunkte des erkannten Barcodes relativ zum Bild, beginnend mit der oberen linken Ecke und im Uhrzeigersinn. Aufgrund von perspektivischen Verzerrungen im Bild könnte dies nicht quadratisch sein.
    - `format`: Das erkannte Barcode-Format. (Für eine vollständige Liste der Formate konsultieren Sie die Liste über die [unterstützten Barcode-Formate](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)).
    - `rawValue`: Ein aus den Barcode-Daten dekodierter String.

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

### Unterstützte Formate abrufen

Das folgende Beispiel ruft die `getSupportFormat()`-statische Methode auf und protokolliert die Ergebnisse in der Konsole.

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### Barcodes erkennen

Dieses Beispiel verwendet die `detect()`-Methode, um die Barcodes im angegebenen Bild zu erkennen. Diese werden durchlaufen und die Barcode-Daten werden in der Konsole protokolliert.

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

- [barcodefaq.com: Eine Website mit Informationen über verschiedene Barcodes und Beispiele für die unterschiedlichen Typen.](https://www.barcodefaq.com/)
- [Beschleunigte Formenerkennung in Bildern](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
