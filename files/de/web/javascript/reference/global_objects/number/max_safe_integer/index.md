---
title: Number.MAX_SAFE_INTEGER
short-title: MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MAX_SAFE_INTEGER`** repräsentiert die maximale sichere Ganzzahl in JavaScript (2<sup>53</sup> – 1).

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

Das [Doppelpräzisions-Gleitkomma-Format](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen, daher können nur Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 sicher dargestellt werden. "Sicher" bedeutet in diesem Kontext die Fähigkeit, Ganzzahlen genau darzustellen und korrekt zu vergleichen. Zum Beispiel wird `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` zu true ausgewertet, was mathematisch nicht korrekt ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MAX_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Rückgabewert von MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Beziehung zwischen MAX_SAFE_INTEGER und EPSILON

{{jsxref("Number.EPSILON")}} ist 2<sup>-52</sup>, während `MAX_SAFE_INTEGER` 2<sup>53</sup> – 1 ist — beide werden aus der Breite der Mantisse abgeleitet, die 53 Bits beträgt (wobei das höchste Bit immer 1 ist). Wenn man sie multipliziert, ergibt sich ein Wert, der sehr nahe — aber nicht gleich — bei 2 liegt.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.MAX_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.MAX_SAFE_INTEGER`](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
