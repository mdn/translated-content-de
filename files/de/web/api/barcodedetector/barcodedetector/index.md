---
title: "BarcodeDetector: BarcodeDetector() Konstruktor"
short-title: BarcodeDetector()
slug: Web/API/BarcodeDetector/BarcodeDetector
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Der **`BarcodeDetector()`** Konstruktor erzeugt
ein neues [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector) Objekt, welches lineare und zweidimensionale
Barcodes in Bildern erkennt.

## Syntax

```js-nolint
new BarcodeDetector()
new BarcodeDetector(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das eine Reihe von `BarcodeFormats` enthält, nach denen in den anschließenden [`detect()`](/de/docs/Web/API/BarcodeDetector/detect)-Aufrufen gesucht wird. Die Optionen sind:
    - `formats` {{optional_inline}}
      - : Ein {{jsxref('Array')}} von Barcode-Formaten als Strings.
        Wenn nicht angegeben, suchen `detect()`-Aufrufe nach allen unterstützten Formaten.
        Aus Leistungsgründen wird empfohlen, auf spezifische Formate zu beschränken.
        Um eine vollständige Liste der unterstützten Formate zu sehen, siehe das [unterstützte Barcode-Format](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `formats` angegeben ist und der Parameter leer oder `unknown` enthält.

## Beispiele

Dieses Beispiel erstellt ein neues Barcode-Detektor-Objekt mit angegebenen unterstützten Formaten
und testet auf Browser-Kompatibilität.

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
