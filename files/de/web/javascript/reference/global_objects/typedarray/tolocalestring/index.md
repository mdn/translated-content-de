---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`toLocaleString()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt einen String zurück, der die Elemente des typisierten Arrays repräsentiert. Die Elemente werden mithilfe ihrer `toLocaleString`-Methoden in Strings umgewandelt, und diese Strings werden durch einen länderspezifischen String (wie ein Komma ",") getrennt. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.toLocaleString()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-tolocalestring.html")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit Konfigurationseigenschaften. Siehe {{jsxref("Number.prototype.toLocaleString()")}}.

### Rückgabewert

Ein String, der die Elemente des typisierten Arrays repräsentiert.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.toLocaleString()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays angewendet werden.

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

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
