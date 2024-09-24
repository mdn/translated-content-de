---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MAX_SAFE_INTEGER`** repräsentiert die maximale sichere Ganzzahl in JavaScript (2<sup>53</sup> – 1).

Für größere Ganzzahlen sollten Sie {{jsxref("BigInt")}} in Betracht ziehen.

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}

## Wert

`9007199254740991` (9.007.199.254.740.991 oder \~9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), sodass es nur sicher Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 darstellen kann. "Sicher" bedeutet in diesem Zusammenhang die Fähigkeit, Ganzzahlen exakt darzustellen und sie korrekt zu vergleichen. Zum Beispiel wird `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` zu true ausgewertet, was mathematisch falsch ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Da `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie diese immer als `Number.MAX_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Rückgabewert von MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Beziehung zwischen MAX_SAFE_INTEGER und EPSILON

{{jsxref("Number.EPSILON")}} ist 2<sup>-52</sup>, während `MAX_SAFE_INTEGER` 2<sup>53</sup> – 1 ist — beide leiten sich aus der Breite der Mantisse ab, die 53 Bits beträgt (wobei das höchste Bit immer 1 ist). Das Multiplizieren von ihnen ergibt einen Wert, der sehr nahe — aber nicht gleich — 2 ist.

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
