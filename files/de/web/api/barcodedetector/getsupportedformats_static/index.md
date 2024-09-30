---
title: "BarcodeDetector: getSupportedFormats() statische Methode"
short-title: getSupportedFormats()
slug: Web/API/BarcodeDetector/getSupportedFormats_static
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`getSupportedFormats()`** statische Methode der [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} von unterstützten Barcode-Formattypen erfüllt wird.

## Syntax

```js-nolint
BarcodeDetector.getSupportedFormats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{jsxref('Array')}} von [unterstützten Barcode-Formattypen](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) erfüllt wird.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

Das folgende Beispiel ruft die `getSupportFormat()` statische Methode auf und protokolliert die Ergebnisse in der Konsole.

```js
// check supported types
BarcodeDetector.getSupportedFormats().then((supportedFormats) => {
  supportedFormats.forEach((format) => console.log(format));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
