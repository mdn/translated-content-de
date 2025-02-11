---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toLocaleString()`** von {{jsxref("TypedArray")}}-Instanzen gibt eine Zeichenkette zurück, die die Elemente des Typed Arrays repräsentiert. Die Elemente werden unter Verwendung ihrer `toLocaleString`-Methoden in Strings umgewandelt, und diese Strings werden durch eine localespezifische Zeichenfolge (wie ein Komma ",") getrennt. Diese Methode folgt demselben Algorithmus wie {{jsxref("Array.prototype.toLocaleString()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.toLocaleString()")}}

```js interactive-example
const uint8 = new Uint32Array([500, 8123, 12]);

console.log(uint8.toLocaleString());
// Expected output: "500,8123,12"

console.log(uint8.toLocaleString("en-GB"));
// Expected output: "500,8,123,12"

console.log(
  uint8.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Expected output: "500,00 €,8.123,00 €,12,00 €"
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

- `locales` {{optional_inline}}
  - : Eine Zeichenkette mit einem BCP 47-Sprach-Tag oder ein Array solcher Zeichenketten. Informationen zur allgemeinen Form und Interpretation des Arguments `locales` finden Sie in [der Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Siehe {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Eine Zeichenkette, die die Elemente des Typed Arrays repräsentiert.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.toLocaleString()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typed Arrays aufgerufen werden.

## Beispiele

### Verwendung von toLocaleString()

```js
const uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// if run in a de-DE locale
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
