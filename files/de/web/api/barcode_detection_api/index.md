---
title: Barcode Detection API
slug: Web/API/Barcode_Detection_API
l10n:
  sourceCommit: 41d343d684f9f6e7199d408b209bcd0e077eb023
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detection API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die Barcode Detection API erkennt lineare und zweidimensionale Barcodes in Bildern.

## Konzepte und Verwendung

Die Unterstützung der Barcode-Erkennung in Web-Apps eröffnet eine Vielzahl von Anwendungsfällen durch die unterstützten Barcode-Formate. QR-Codes können für Online-Zahlungen, Webnavigation oder den Aufbau von Verbindungen in sozialen Medien verwendet werden, Aztec-Codes können zum Scannen von Bordkarten genutzt werden, und Shopping-Apps können EAN- oder UPC-Barcodes verwenden, um Preise physischer Artikel zu vergleichen.

Die Erkennung erfolgt über die [`detect()`](/de/docs/Web/API/BarcodeDetector/detect)-Methode, die ein Bildobjekt verwendet; dieses kann eines der folgenden Objekte sein:
ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
ein [`VideoFrame`](/de/docs/Web/API/VideoFrame),
ein [`Blob`](/de/docs/Web/API/Blob),
oder ein [`ImageData`](/de/docs/Web/API/ImageData).
Optionale Parameter können an den [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector)-Konstruktor übergeben werden, um Hinweise darauf zu geben, welche Barcode-Formate erkannt werden sollen.

### Unterstützte Barcode-Formate

Die Barcode Detection API unterstützt die folgenden Barcode-Formate:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Format</th>
      <th>Beschreibung</th>
      <th>Bild</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>aztec</td>
      <td>
        Eine quadratische zweidimensionale Matrix, die iso24778 folgt und ein quadratisches Zielmuster in der Mitte aufweist und somit einer aztekischen Pyramide ähnelt. Benötigt keine umgebende weiße Zone.
      </td>
      <td>
        <img
          alt="Ein Beispielbild eines Aztec-Barcodes. Ein Quadrat mit kleineren schwarzen und weißen Quadraten innen"
          src="aztec.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_128</td>
      <td>
        Ein linearer (eindimensionaler), in beide Richtungen dekodierbarer, selbstprüfender Barcode, der iso15417 folgt und in der Lage ist, alle 128 Zeichen von [ASCII](/de/docs/Glossary/ASCII) zu kodieren (daher der Name).
      </td>
      <td>
        <img
          alt="Ein Bild eines Code-128-Barcodes. Eine horizontale Anordnung von vertikalen schwarzen und weißen Linien"
          src="code-128.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_39</td>
      <td>
        Ein linearer (eindimensionaler), selbstprüfender Barcode, der iso16388 folgt. Es ist ein diskretes und variabel langes Barcode-Typ.
      </td>
      <td>
        <img
          alt="Ein Bild eines Code-39-Barcodes. Eine horizontale Anordnung von vertikalen schwarzen und weißen Linien"
          src="code-39.png"
        />
      </td>
    </tr>
    <tr>
      <td>code_93</td>
      <td>
        Eine lineare, kontinuierliche Symbologie mit variabler Länge, die bc5 folgt. Sie bietet eine größere Informationsdichte als Code 128 und der optisch ähnliche Code 39. Code 93 wird hauptsächlich von der Canada Post verwendet, um zusätzliche Lieferinformationen zu kodieren.
      </td>
      <td>
        <img
          alt="Ein Bild eines Code 93-Barcode-Formats. Eine horizontale Anordnung von weißen und schwarzen horizontalen Linien"
          src="code-93.png"
        />
      </td>
    </tr>
    <tr>
      <td>codabar</td>
      <td>
        Ein linearer Barcode, der die Zeichen 0-9, A-D und Symbole - . $ / + darstellt.
      </td>
      <td>
        <img
          alt="Ein Bild eines Codabar-Formats-Barcodes. Eine horizontale Anordnung von schwarzen und weißen vertikalen Linien"
          src="codabar.png"
        />
      </td>
    </tr>
    <tr>
      <td>data_matrix</td>
      <td>
        Ein orientierungsunabhängiger zweidimensionaler Barcode, der aus schwarzen und weißen Modulen besteht, die entweder in einem quadratischen oder rechteckigen Muster angeordnet sind und iso16022 folgt.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines Data-Matrix-Barcodes. Ein Quadrat mit kleineren schwarzen und weißen Quadraten gefüllt"
          src="data-matrix.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_13</td>
      <td>
        Ein linearer Barcode, der auf dem UPC-A-Standard basiert und in iso15420 definiert ist.
      </td>
      <td>
        <img
          alt="Ein Bild eines EAN-13-Format-Barcodes. Eine horizontale Anordnung von weißen und schwarzen Linien"
          src="ean-13.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_8</td>
      <td>Ein linearer Barcode, der in iso15420 definiert und von EAN-13 abgeleitet ist.</td>
      <td>
        <img
          alt="Ein Bild eines EAN-8-Format-Barcodes. Eine horizontale Anordnung von vertikalen schwarzen und weißen Linien"
          src="ean-8.png"
        />
      </td>
    </tr>
    <tr>
      <td>itf</td>
      <td>
        Ein kontinuierlicher, selbstprüfender, bidirektional dekodierbarer Barcode. Er kodiert immer 14 Ziffern.
      </td>
      <td>
        <img
          alt="Ein Bild eines ITF-Barcodes. Eine horizontale Anordnung von weißen und schwarzen Linien"
          src="ift.png"
        />
      </td>
    </tr>
    <tr>
      <td>pdf417</td>
      <td>
        Ein kontinuierliches zweidimensionales Barcode-Symbologie-Format mit mehreren Reihen und Spalten. Es ist in beide Richtungen dekodierbar und nutzt den iso15438-Standard.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines pdf417-Barcode-Formats. Ein Rechteck aus kleineren schwarzen und weißen Quadraten"
          src="pdf417.png"
        />
      </td>
    </tr>
    <tr>
      <td>qr_code</td>
      <td>
        Ein zweidimensionaler Barcode, der den iso18004-Standard nutzt. Die kodierten Informationen können Text, URL oder andere Daten sein.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines QR-Codes. Ein Quadrat aus kleineren schwarzen und weißen Quadraten"
          src="qr-code.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_a</td>
      <td>
        Eines der häufigsten linearen Barcode-Typen und weit verbreitet im Einzelhandel in den Vereinigten Staaten. Definiert in iso15420, repräsentiert es Ziffern durch Streifen aus Balken und Zwischenräumen, wobei jede Ziffer einem einzigartigen Muster aus 2 Balken und 2 Zwischenräumen zugeordnet wird, die alle eine variable Breite aufweisen. UPC-A kann 12 Ziffern kodieren, die jedem Handelsartikel eindeutig zugeordnet sind, und ist technisch ein Subset von EAN-13 (UPC-A-Codes werden in EAN-13 dargestellt, wobei das erste Zeichen auf 0 gesetzt ist).
      </td>
      <td>
        <img
          alt="Ein Bild eines UPC-A-Barcodes. Ein Rechteck aus schwarzen und weißen vertikalen Linien mit Zahlen darunter"
          src="upc-a.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_e</td>
      <td>
        Eine Variation von UPC-A, die in iso15420 definiert ist und unnötige Nullen für einen kompakteren Barcode auslässt.
      </td>
      <td>
        <img
          alt="Ein Bild eines UPC-E-Barcodes. Ein Rechteck aus schwarzen und weißen vertikalen Linien"
          src="upc-e.png"
        />
      </td>
    </tr>
    <tr>
      <td>unknown</td>
      <td>
        Dieser Wert wird von der Plattform verwendet, um anzuzeigen, dass sie weder weiß noch angibt, welches Barcode-Format erkannt oder unterstützt wird.
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

Sie können die vom User-Agent unterstützten Formate über die [`getSupportedFormats()`](/de/docs/Web/API/BarcodeDetector/getSupportedFormats_static)-Methode überprüfen.

## Schnittstellen

- [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector) {{Experimental_Inline}}
  - : Die `BarcodeDetector`-Schnittstelle der Barcode Detection API ermöglicht die Erkennung von linearen und zweidimensionalen Barcodes in Bildern.

## Beispiele

### Erstellung eines Detektors

Dieses Beispiel testet die Browser-Kompatibilität und erstellt ein neues Barcode-Detektor-Objekt mit angegebenen unterstützten Formaten.

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

### Abrufen unterstützter Formate

Das folgende Beispiel ruft die `getSupportedFormats()`-Methode auf und protokolliert die Ergebnisse in der Konsole.

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### Erkennung von Barcodes

Dieses Beispiel verwendet die `detect()`-Methode, um die Barcodes im gegebenen Bild zu erkennen. Diese werden iteriert und die Barcodedaten in der Konsole protokolliert.

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
- [The Shape Detection API: a picture is worth a thousand words, faces, and barcodes](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
