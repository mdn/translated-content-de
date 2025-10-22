---
title: Number.MAX_SAFE_INTEGER
short-title: MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: c1c0f13171a9e266210f0b284243b2996fc3ec91
---

Die statische Dateneigenschaft **`Number.MAX_SAFE_INTEGER`** repräsentiert die größte sichere Ganzzahl in JavaScript (2<sup>53</sup> – 1).

Für größere Ganzzahlen sollten Sie erwägen, {{jsxref("BigInt")}} zu verwenden.

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

Das [Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), daher kann es nur sicher Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 darstellen. "Sicher" bedeutet in diesem Zusammenhang die Fähigkeit, Ganzzahlen exakt darzustellen und korrekt zu vergleichen. Zum Beispiel wird `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` als wahr bewertet, was mathematisch inkorrekt ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Wie in {{jsxref("Number.EPSILON")}} erwähnt, hängt die Genauigkeit von Zahlen von ihrer Größe ab. `Number.MAX_SAFE_INTEGER` stellt den größten Wert dar, bei dem Ganzzahlen genau verarbeitet werden können, aber Sie können immer noch sinnvolle arithmetische Operationen an größeren Zahlen durchführen, allerdings ohne die Präzision auf Ganzzahlebene. Die größte darstellbare Zahl in JavaScript ist tatsächlich {{jsxref("Number.MAX_VALUE")}}, die etwa 1,7976931348623157 × 10<sup>308</sup> beträgt.

Da `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.MAX_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Rückgabewert von MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Beziehung zwischen MAX_SAFE_INTEGER und EPSILON

{{jsxref("Number.EPSILON")}} beträgt 2<sup>-52</sup>, während `MAX_SAFE_INTEGER` 2<sup>53</sup> – 1 ist — beide leiten sich aus der Breite der Mantisse ab, die 53 Bits beträgt (wobei das höchste Bit immer 1 ist). Das Multiplizieren ergibt einen Wert, der sehr nahe — aber nicht gleich — 2 ist.

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
- {{jsxref("Number.MAX_VALUE")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
