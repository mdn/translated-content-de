---
title: Barcode-Erkennungs-API
slug: Web/API/Barcode_Detection_API
l10n:
  sourceCommit: 41d343d684f9f6e7199d408b209bcd0e077eb023
---

{{securecontext_header}}{{DefaultAPISidebar("Barcode Detection API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die Barcode-Erkennungs-API erkennt lineare und zweidimensionale Barcodes in Bildern.

## Konzepte und Verwendung

Die Unterstützung der Barcode-Erkennung in Webanwendungen eröffnet verschiedene Anwendungsfälle durch unterstützte Barcode-Formate. QR-Codes können für Online-Zahlungen, Webnavigation oder die Herstellung von sozialen Medienverbindungen verwendet werden. Aztec-Codes können verwendet werden, um Bordkarten zu scannen, und Einkaufs-Apps können EAN- oder UPC-Barcodes verwenden, um Preise physischer Artikel zu vergleichen.

Die Erkennung erfolgt durch die Methode {{domxref('BarcodeDetector.detect()','detect()')}}, die ein Bildobjekt entgegennimmt; es kann eines dieser Objekte sein:
ein {{domxref("HTMLImageElement")}},
ein {{domxref("SVGImageElement")}},
ein {{domxref("HTMLVideoElement")}},
ein {{domxref("HTMLCanvasElement")}},
ein {{domxref("ImageBitmap")}},
ein {{domxref("OffscreenCanvas")}},
ein {{domxref("VideoFrame")}},
ein {{domxref('Blob')}},
oder ein {{domxref('ImageData')}}.
Optionale Parameter können an den {{domxref('BarcodeDetector')}}-Konstruktor übergeben werden, um Hinweise darauf zu geben, welche Barcode-Formate erkannt werden sollen.

### Unterstützte Barcode-Formate

Die Barcode-Erkennungs-API unterstützt die folgenden Barcode-Formate:

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
        Eine quadratische zweidimensionale Matrix nach ISO24778 mit einem quadratischen Zielscheibenmuster in der Mitte, das einer Aztekenpyramide ähnelt. Benötigt keine umliegende weiße Fläche.
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
        Ein linearer (eindimensionaler), bidirektional dekodierbarer, selbstprüfender Barcode gemäß ISO15417, der alle 128 Zeichen der {{Glossary("ASCII")}} codieren kann (daher der Name).
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
        Ein linearer (eindimensionaler), selbstprüfender Barcode gemäß ISO16388. Er ist ein diskreter Barcode mit variabler Länge.
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
        Eine lineare, kontinuierliche Symbologie mit variabler Länge gemäß BC5. Sie bietet eine höhere Informationsdichte als Code 128 und der optisch ähnliche Code 39. Code 93 wird hauptsächlich von Canada Post verwendet, um zusätzliche Lieferinformationen zu codieren.
      </td>
      <td>
        <img
          alt="Ein Bild eines Code-93-Format-Barcodes. Eine horizontale Verteilung von weißen und schwarzen horizontalen Linien"
          src="code-93.png"
        />
      </td>
    </tr>
    <tr>
      <td>codabar</td>
      <td>
        Ein linearer Barcode zur Darstellung der Zeichen 0-9, A-D und der Symbole - . $ / +
      </td>
      <td>
        <img
          alt="Ein Bild eines Codabar-Format-Barcodes. Eine horizontale Anordnung von schwarzen und weißen vertikalen Linien"
          src="codabar.png"
        />
      </td>
    </tr>
    <tr>
      <td>data_matrix</td>
      <td>
        Ein orientierungsunabhängiger zweidimensionaler Barcode, der aus schwarzen und weißen Modulen besteht, die in einem quadratischen oder rechteckigen Muster gemäß ISO16022 angeordnet sind.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines Data-Matrix-Barcodes. Ein Quadrat gefüllt mit kleineren schwarzen und weißen Quadraten"
          src="data-matrix.png"
        />
      </td>
    </tr>
    <tr>
      <td>ean_13</td>
      <td>
        Ein linearer Barcode basierend auf der UPC-A-Norm und definiert in ISO15420.
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
      <td>Ein linearer Barcode definiert in ISO15420 und abgeleitet von EAN-13.</td>
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
        Ein kontinuierlicher, selbstprüfender, bidirektional dekodierbarer Barcode. Er codiert immer 14 Ziffern.
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
        Eine kontinuierliche zweidimensionale Barcode-Symbologie mit mehreren Reihen und Spalten. Sie ist bidirektional dekodierbar und verwendet den ISO15438-Standard.
      </td>
      <td>
        <img
          alt="Ein Beispiel eines PDF417-Barcode-Formats. Ein Rechteck aus kleineren schwarzen und weißen Quadraten"
          src="pdf417.png"
        />
      </td>
    </tr>
    <tr>
      <td>qr_code</td>
      <td>
        Ein zweidimensionaler Barcode, der den ISO18004-Standard verwendet. Die kodierte Information kann Text, URL oder andere Daten sein.
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
        Einer der bekanntesten Barcodetypen und wird häufig im Einzelhandel in den Vereinigten Staaten angewendet. Definiert in ISO15420, repräsentiert es Ziffern durch Streifen von Balken und Leerstellen, wobei jede Ziffer einem einzigartigen Muster von 2 Balken und 2 Leerstellen mit variabler Breite zugeordnet ist. UPC-A kann 12 Ziffern codieren, die jedem Handelsartikel zugewiesen sind, und ist technisch gesehen eine Untergruppe von EAN-13 (UPC-A-Codes werden in EAN-13 mit dem ersten Zeichen auf 0 gesetzt dargestellt).
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
        Eine Variante von UPC-A, definiert in ISO15420, die überflüssige Nullen für einen kompakteren Barcode herausfiltert.
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
        Dieser Wert wird von der Plattform verwendet, um anzuzeigen, dass sie das erkannte oder unterstützte Barcode-Format nicht kennt oder angibt.
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

Sie können die vom Benutzer-Agent unterstützten Formate über die Methode {{domxref('BarcodeDetector/getSupportedFormats_static','getSupportedFormats()')}} überprüfen.

## Schnittstellen

- {{domxref("BarcodeDetector")}} {{Experimental_Inline}}
  - : Die `BarcodeDetector`-Schnittstelle der Barcode-Erkennungs-API ermöglicht die Erkennung von linearen und zweidimensionalen Barcodes in Bildern.

## Beispiele

### Erstellen eines Detektors

Dieses Beispiel prüft die Browserkompatibilität und erstellt ein neues Barcode-Detektor-Objekt mit angegebenen unterstützten Formaten.

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

### Abrufen unterstützter Formate

Das folgende Beispiel ruft die Methode `getSupportedFormats()` auf und protokolliert die Ergebnisse in der Konsole.

```js
// unterstützte Typen prüfen
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

### Barcodes erkennen

Dieses Beispiel verwendet die Methode `detect()`, um die Barcodes im angegebenen Bild zu erkennen. Diese werden durchlaufen und die Barcode-Daten in der Konsole protokolliert.

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

- [barcodefaq.com: Eine Website mit Informationen über verschiedene Barcodes und Beispiele der unterschiedlichen Typen.](https://www.barcodefaq.com/)
- [Die Shape Detection API: Ein Bild sagt mehr als tausend Worte, Gesichter und Barcodes](https://developer.chrome.com/docs/capabilities/shape-detection#barcodedetector)
