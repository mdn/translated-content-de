---
title: "BarcodeDetector: statische Methode getSupportedFormats()"
short-title: getSupportedFormats()
slug: Web/API/BarcodeDetector/getSupportedFormats_static
l10n:
  sourceCommit: e4669cf973422d9badcc54ae3d09f97286d720a3
---

{{securecontext_header}}{{APIRef("Barcode Detector API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`getSupportedFormats()`**-statische Methode
der [`BarcodeDetector`](/de/docs/Web/API/BarcodeDetector)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem {{jsxref('Array')}} der unterstützten Barcode-Formattypen erfüllt wird.

## Syntax

```js-nolint
BarcodeDetector.getSupportedFormats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einem {{jsxref('Array')}} von
[unterstützten Barcode-Formattypen](/de/docs/Web/API/Barcode_Detection_API#supported_barcode_formats) erfüllt wird.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.

## Beispiele

Das folgende Beispiel ruft die statische Methode `getSupportedFormats()` auf und protokolliert die Ergebnisse in der Konsole.

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
