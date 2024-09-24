---
title: BarcodeDetector
slug: Web/API/BarcodeDetector
l10n:
  sourceCommit: 6bfd45572529a34b4e3a059dcdd37ca6def2e0cd
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`BarcodeDetector`**-Schnittstelle der {{domxref('Barcode Detection API', '', '', 'nocode')}} ermöglicht die Erkennung von linearen und zweidimensionalen Barcodes in Bildern.

## Konstruktoren

- {{domxref('BarcodeDetector.BarcodeDetector', 'BarcodeDetector.BarcodeDetector()')}} {{Experimental_Inline}}
  - : Erstellt und gibt ein `BarcodeDetector`-Objekt mit optionalen `BarcodeDetectorOptions` zurück.

## Statische Methoden

- {{domxref('BarcodeDetector/getSupportedFormats_static', 'getSupportedFormats()')}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} der unterstützten [Barcode-Formattypen](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) erfüllt wird.

## Instanzmethoden

- {{domxref('BarcodeDetector.detect', 'detect()')}} {{Experimental_Inline}}

  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem Array von `DetectedBarcode`-Objekten mit den folgenden Eigenschaften erfüllt wird:

    - `boundingBox`: Ein {{domxref('DOMRectReadOnly')}}, der die Abmessungen eines Rechtecks zurückgibt, das den Umfang eines erkannten Barcodes darstellt und mit dem Bild ausgerichtet ist.
    - `cornerPoints`: Die x- und y-Koordinaten der vier Eckpunkte des erkannten Barcodes relativ zum Bild, beginnend oben links und im Uhrzeigersinn. Aufgrund perspektivischer Verzerrungen im Bild kann dies kein Quadrat sein.
    - `format`: Das erkannte Barcode-Format. (Für eine vollständige Liste der Formate konsultieren Sie die [unterstützten Barcode-Formate](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats)).
    - `rawValue`: Ein aus den Barcode-Daten dekodierter String.

## Beispiele

### Erstellen eines Detektors

Dieses Beispiel erstellt ein neues Barcode-Detektor-Objekt mit festgelegten unterstützten Formaten und testet die Kompatibilität des Browsers.

```js
// Kompatibilität prüfen
if (!("BarcodeDetector" in globalThis)) {
  console.log("Barcode Detector wird von diesem Browser nicht unterstützt.");
} else {
  console.log("Barcode Detector wird unterstützt!");

  // neuen Detektor erstellen
  const barcodeDetector = new BarcodeDetector({
    formats: ["code_39", "codabar", "ean_13"],
  });
}
```

### Unterstützte Formate abrufen

Das folgende Beispiel ruft die statische Methode `getSupportFormat()` auf und protokolliert die Ergebnisse in der Konsole.

```js
// unterstützte Typen prüfen
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### Barcodes erkennen

Dieses Beispiel verwendet die Methode `detect()`, um die Barcodes im angegebenen Bild zu erkennen. Diese werden iteriert und die Barcode-Daten werden in der Konsole protokolliert.

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

- [barcodefaq.com: Eine Website mit Informationen zu verschiedenen Barcodes und Beispielen der verschiedenen Typen.](https://www.barcodefaq.com/)
- [Beschleunigte Formenerkennung in Bildern](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
