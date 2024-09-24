---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Number.MIN_SAFE_INTEGER`** stellt die kleinste sichere ganze Zahl in JavaScript dar, oder -(2<sup>53</sup> - 1).

Um ganze Zahlen darzustellen, die kleiner als diese sind, ziehen Sie in Betracht, {{jsxref("BigInt")}} zu verwenden.

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}

## Wert

`-9007199254740991` (-9.007.199.254.740.991 oder etwa -9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Double-Precision Floating-Point-Format](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen. Daher kann es nur sicher ganze Zahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 darstellen. Sicher bedeutet in diesem Kontext die Fähigkeit, ganze Zahlen exakt darzustellen und korrekt zu vergleichen. Zum Beispiel wird `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` als wahr ausgewertet, was mathematisch inkorrekt ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.MIN_SAFE_INTEGER` anstelle einer Eigenschaft eines Zahlenwertes.

## Beispiele

### Verwendung von MIN_SAFE_INTEGER

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.MIN_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
