---
title: "BarcodeDetector: BarcodeDetector() Konstruktor"
short-title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
l10n:
  sourceCommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Der **`BarcodeDetector()`** Konstruktor erstellt ein neues {{domxref("BarcodeDetector")}}-Objekt, das lineare und zweidimensionale Barcodes in Bildern erkennt.

## Syntax

```js-nolint
new BarcodeDetector()
new BarcodeDetector(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das eine Reihe von `BarcodeFormats` enthält, nach denen in den nachfolgenden {{domxref('BarcodeDetector.detect()','detect()')}}-Aufrufen gesucht werden soll. Die Optionen sind:

    - `formats` {{optional_inline}}
      - : Ein {{jsxref('Array')}} von Barcode-Formaten als Strings.
        Wenn nicht angegeben, durchsuchen `detect()`-Aufrufe alle unterstützten Formate.
        Es wird daher empfohlen, auf spezifische Formate zu beschränken, um Leistungseinbußen zu vermeiden.
        Eine vollständige Liste der unterstützten Formate finden Sie unter [unterstützte Barcode-Formate](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn das `formats`-Argument angegeben und der Parameter leer oder `unknown` enthält.

## Beispiele

Dieses Beispiel erstellt ein neues Barcode-Detektor-Objekt mit angegebenen unterstützten Formaten und prüft die Browserkompatibilität.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
