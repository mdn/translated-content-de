---
title: Number.MIN_SAFE_INTEGER
short-title: MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: c1c0f13171a9e266210f0b284243b2996fc3ec91
---

Die statische Dateneigenschaft **`Number.MIN_SAFE_INTEGER`** repräsentiert die kleinste sichere Ganzzahl in JavaScript, oder -(2<sup>53</sup> - 1).

Um Ganzzahlen darzustellen, die kleiner als dieser Wert sind, sollten Sie {{jsxref("BigInt")}} in Betracht ziehen.

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

`-9007199254740991` (-9.007.199.254.740.991 oder ungefähr -9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Double precision floating-point format](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) hat nur 52 Bits, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen, daher können nur Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 sicher dargestellt werden. Sicher bedeutet in diesem Kontext die Fähigkeit, Ganzzahlen exakt darzustellen und korrekt zu vergleichen. Zum Beispiel wird `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` als wahr ausgewertet, was mathematisch inkorrekt ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Wie in {{jsxref("Number.EPSILON")}} erwähnt, hängt die Präzision von Zahlen von ihrer Größe ab. `Number.MIN_SAFE_INTEGER` stellt den kleinsten Wert dar, bei dem Ganzzahl-Operationen exakt durchgeführt werden können, dennoch können sinnvolle Rechenoperationen auf Zahlen durchgeführt werden, die negativer als dieser Wert sind, jedoch ohne Ganzzahl-Präzision. Die größte darstellbare Zahl in JavaScript ist tatsächlich {{jsxref("Number.MAX_VALUE")}}, die ungefähr 1.7976931348623157 × 10<sup>308</sup> ist.

Da `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie ihn immer als `Number.MIN_SAFE_INTEGER` und nicht als eine Eigenschaft eines Zahlenwertes.

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
