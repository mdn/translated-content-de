---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MAX_SAFE_INTEGER`** stellt die maximale sichere Ganzzahl in JavaScript dar (2<sup>53</sup> – 1).

Für größere Ganzzahlen sollten Sie {{jsxref("BigInt")}} in Betracht ziehen.

{{InteractiveExample("JavaScript Demo: Number.MAX_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true
```

## Wert

`9007199254740991` (9.007.199.254.740.991 oder \~9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Doppelpräzisions-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), sodass es Ganzzahlen nur sicher zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 darstellen kann. „Sicher“ bedeutet in diesem Kontext, dass Ganzzahlen genau dargestellt und korrekt verglichen werden können. Zum Beispiel wird `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` als wahr ausgewertet, was mathematisch falsch ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MAX_SAFE_INTEGER`, anstatt sie als Eigenschaft eines Zahlenwertes zu verwenden.

## Beispiele

### Rückgabewert von MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Beziehung zwischen MAX_SAFE_INTEGER und EPSILON

{{jsxref("Number.EPSILON")}} ist 2<sup>-52</sup>, während `MAX_SAFE_INTEGER` 2<sup>53</sup> – 1 ist — beide Werte leiten sich von der Breite der Mantisse ab, die 53 Bits beträgt (mit dem höchsten Bit, das immer 1 ist). Multipliziert man diese beiden Werte, erhält man einen Wert, der sehr nahe, aber nicht gleich 2 ist.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.MAX_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
