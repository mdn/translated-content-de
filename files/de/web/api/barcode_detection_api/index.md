---
title: Barcode Detection API
slug: Web/API/Barcode_Detection_API
l10n:
  sourceCommit: 41d343d684f9f6e7199d408b209bcd0e077eb023
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detection API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die Barcode Detection API erkennt lineare und zweidimensionale Barcodes in Bildern.

## Konzepte und Verwendung

Die Unterstützung für die Barcode-Erkennung in Webanwendungen eröffnet eine Vielzahl von Anwendungsfällen durch unterstützte Barcode-Formate. QR-Codes können für Online-Zahlungen, die Navigation im Web oder die Herstellung von Verbindungen in sozialen Medien verwendet werden, Aztec-Codes können zum Scannen von Bordkarten eingesetzt werden, und Einkaufs-Apps können EAN- oder UPC-Barcodes verwenden, um Preise physischer Artikel zu vergleichen.

Die Erkennung erfolgt über die Methode [`detect()`](/de/docs/Web/API/BarcodeDetector/detect), die ein Bildobjekt nimmt; es kann eines dieser Objekte sein:
ein [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement),
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
ein [`VideoFrame`](/de/docs/Web/API/VideoFrame),
ein [`Blob`](/de/docs/Web/API/Blob),
oder ein [`ImageData`](/de/docs/Web/API/ImageData).
Optionale Parameter können an den Konstruktor von [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector) übergeben werden, um Hinweise zu geben, welche Barcode-Formate erkannt werden sollen.

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
        Eine quadratische, zweidimensionale Matrix nach iso24778 mit einem quadratischen Bullaugenmuster in der Mitte, das an eine aztekische Pyramide erinnert. Es ist keine umgebende Leerzone erforderlich.
      </td>
      <td>
        <img
          alt="Ein Beispielbild eines Aztec-Barcodes. Ein Quadrat mit kleineren schwarz-weißen Quadraten darin"
          src="aztec.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_128</td>
      <td>
        Ein linearer (eindimensionaler), bidirektional dekodierbarer, selbstprüfender Barcode gemäß iso15417, der alle 128 Zeichen des {{Glossary("ASCII", "ASCII")}} kodieren kann (daher der Name).
      </td>
      <td>
        <img
          alt="Ein Bild eines Code-128 Barcodes. Eine horizontale Verteilung von vertikalen schwarzen und weißen Linien"
          src="code-128.gif"
        />
      </td>
    </tr>
    <tr>
      <td>code_39</td>
      <td>
        Ein linearer (eindimensionaler), selbstprüfender Barcode gemäß iso16388. Er ist ein diskreter und variabler Barcode-Typ.
      </td>
      <td>
        <img
          alt="Ein Bild eines Code-39 Barcodes. Eine horizontale Verteilung von vertikalen schwarzen und weißen Linien"
          src="code-39.png"
        />
      </td>
    </tr>
    <tr>
      <td>code_93</td>
      <td>
        Eine lineare, kontinuierliche Symbolik mit variabler Länge gemäß bc5. Sie bietet eine höhere Informationsdichte als Code 128 und der optisch ähnliche Code 39. Code 93 wird hauptsächlich von Canada Post zur Kodierung zusätzlicher Lieferinformationen verwendet.
      </td>
      <td>
        <img
          alt="Ein Bild eines Code 93 Barcodes. Eine horizontale Verteilung von schwarzen und weißen horizontalen Linien"
          src="code-93.png"
        />
      </td>
    </tr>
    <tr>
      <td>codabar</td>
      <td>
        Ein linearer Barcode, der Zeichen 0-9, A-D und Symbole - . $ / + darstellt.
      </td>
      <td>
        <img
          alt="Ein Bild eines Codabar-Formates Barcodes. Eine horizontale Verteilung von schwarzen und weißen vertikalen Linien"
          src="codabar.png"
        />
      </td>
    </tr>
    <tr>
      <td>data_matrix</td>
      <td>
        Ein richtungsunabhängiger, zweidimensionaler Barcode, bestehend aus schwarz-weißen Modulen, die entweder in einem quadratischen oder rechteckigen Muster gemäß iso16022 angeordnet sind.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines Data Matrix Barcodes. Ein Quadrat, gefüllt mit kleineren schwarz-weißen Quadraten"
          src="data-matrix.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_13</td>
      <td>
        Ein linearer Barcode basierend auf dem UPC-A-Standard und definiert in iso15420.
      </td>
      <td>
        <img
          alt="Ein Bild eines EAN-13 Barcodes. Eine horizontale Verteilung von weißen und schwarzen Linien"
          src="ean-13.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_8</td>
      <td>Ein linearer Barcode definiert in iso15420 und abgeleitet von EAN-13.</td>
      <td>
        <img
          alt="Ein Bild eines EAN-8 Barcodes. Eine horizontale Verteilung von vertikalen schwarzen und weißen Linien"
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
          alt="Ein Bild eines ITF Barcodes. Eine horizontale Verteilung von weißen und schwarzen Linien"
          src="ift.png"
        />
      </td>
    </tr>
    <tr>
      <td>pdf417</td>
      <td>
        Eine kontinuierliche, zweidimensionale Barcode-Symbologie mit mehreren Zeilen und Spalten. Er ist bidirektional dekodierbar und verwendet den iso15438-Standard.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines pdf417 Barcodes. Ein Rechteck aus kleineren schwarz-weißen Quadraten"
          src="pdf417.png"
        />
      </td>
    </tr>
    <tr>
      <td>qr_code</td>
      <td>
        Ein zweidimensionaler Barcode, der den iso18004-Standard verwendet. Die kodierte Information kann Text, URL oder andere Daten sein.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines QR-Codes. Ein Quadrat aus kleineren schwarz-weißen Quadraten"
          src="qr-code.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_a</td>
      <td>
        Einer der am häufigsten verwendeten linearen Barcode-Typen und weit verbreitet im Einzelhandel in den Vereinigten Staaten. Definiert in iso15420, stellt er Ziffern durch Streifen von Balken und Lücken dar, wobei jede Ziffer mit einem eindeutigen Muster von 2 Balken und 2 Lücken, beide variabler Breite, verbunden ist. UPC-A kann 12 Ziffern kodieren, die jedem Handelsartikel eindeutig zugeordnet sind, und ist technisch gesehen ein Teil der EAN-13 (UPC-A-Codes sind in EAN-13 mit dem ersten Zeichensatz auf 0 dargestellt).
      </td>
      <td>
        <img
          alt="Ein Bild eines UPC-A Barcodes. Ein Rechteck aus schwarz-weißen vertikalen Linien mit darunter liegenden Zahlen"
          src="upc-a.png"
        />
      </td>
    </tr>
    <tr>
      <td>upc_e</td>
      <td>
        Eine Variation von UPC-A, definiert in iso15420, die unnötige Nullen für einen kompakteren Barcode auslässt.
      </td>
      <td>
        <img
          alt="Ein Bild eines UPC-E Barcodes. Ein Rechteck aus schwarz-weißen vertikalen Linien"
          src="upc-e.png"
        />
      </td>
    </tr>
    <tr>
      <td>unknown</td>
      <td>
        Dieser Wert wird von der Plattform verwendet, um anzuzeigen, dass sie nicht weiß oder angibt, welches Barcode-Format erkannt oder unterstützt wird.
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

Sie können die von der Benutzeroberfläche unterstützten Formate über die Methode [`getSupportedFormats()`](/de/docs/Web/API/BarcodeDetector/getSupportedFormats_static) überprüfen.

## Schnittstellen

- [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector) {{Experimental_Inline}}
  - : Die `BarcodeDetector`-Schnittstelle der Barcode Detection API ermöglicht die Erkennung von linearen und zweidimensionalen Barcodes in Bildern.

## Beispiele

### Erstellen eines Detektors

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

Das folgende Beispiel ruft die Methode `getSupportedFormats()` auf und protokolliert die Ergebnisse in der Konsole.

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### Erkennen von Barcodes

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
- [The Shape Detection API: a picture is worth a thousand words, faces, and barcodes](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
