---
title: "BarcodeDetector: BarcodeDetector() Konstruktor"
short-title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
l10n:
  sourceCommit: 78d53558b704be923e00aa2664f47a93c32652b4
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Der **`BarcodeDetector()`** Konstruktor erstellt ein neues [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector)-Objekt, das lineare und zweidimensionale Barcodes in Bildern erkennt.

## Syntax

```js-nolint
new BarcodeDetector()
new BarcodeDetector(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Optionsobjekt, das eine Reihe von `BarcodeFormats` enthält, nach denen in den folgenden [`detect()`](/de/docs/Web/API/BarcodeDetector/detect)-Aufrufen gesucht wird. Die Optionen sind:

    - `formats` {{optional_inline}}
      - : Ein {{jsxref('Array')}} von Barcode-Formaten als Strings. Wenn nicht angegeben, suchen `detect()`-Aufrufe nach allen unterstützten Formaten. Aus Leistungsgründen wird empfohlen, auf bestimmte Formate zu beschränken. Eine vollständige Liste der unterstützten Formate finden Sie im Abschnitt [unterstützte Barcode-Formate](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn `formats` angegeben wird und der Parameter leer ist oder `unknown` enthält.

## Beispiele

Dieses Beispiel erstellt ein neues Barcode-Detector-Objekt mit angegebenen unterstützten Formaten und testet die Browser-Kompatibilität.

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
