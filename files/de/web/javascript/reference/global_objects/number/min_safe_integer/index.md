---
title: Number.MIN_SAFE_INTEGER
short-title: MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MIN_SAFE_INTEGER`** repräsentiert die minimale sichere Ganzzahl in JavaScript, oder -(2<sup>53</sup> - 1).

Um Ganzzahlen darzustellen, die kleiner sind als diese, sollten Sie in Betracht ziehen, {{jsxref("BigInt")}} zu verwenden.

{{InteractiveExample("JavaScript Demo: Number.MIN_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Expected output: -9007199254740991

console.log(x);
// Expected output: -9007199254740992

console.log(x === y);
// Expected output: true
```

## Wert

`-9007199254740991` (-9.007.199.254.740.991 oder etwa -9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

[Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen, sodass es nur sicher Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 darstellen kann. "Sicher" bedeutet in diesem Kontext die Fähigkeit, Ganzzahlen genau darzustellen und sie korrekt zu vergleichen. Zum Beispiel wird `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` zu true ausgewertet, was mathematisch inkorrekt ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.MIN_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwertes.

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
- [es-shims Polyfill von `Number.MIN_SAFE_INTEGER`](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
