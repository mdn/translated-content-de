---
title: Number.MIN_SAFE_INTEGER
short-title: MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Number.MIN_SAFE_INTEGER`** repräsentiert die kleinste sichere Ganzzahl in JavaScript, also -(2<sup>53</sup> - 1).

Um kleinere Ganzzahlen darzustellen, sollten Sie {{jsxref("BigInt")}} verwenden.

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

Das [Gleitkommaformat mit doppelter Genauigkeit](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) verfügt nur über 52 Bit zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Daher kann es nur Ganzzahlen zwischen -(2<sup>53</sup> – 1) und 2<sup>53</sup> – 1 sicher darstellen. „Sicher“ bedeutet in diesem Zusammenhang, dass Ganzzahlen exakt dargestellt und korrekt miteinander verglichen werden können. Beispielsweise ergibt `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` den Wert `true`, was mathematisch falsch ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Wie unter {{jsxref("Number.EPSILON")}} erläutert, hängt die Genauigkeit von Zahlen von ihrer Größenordnung ab. `Number.MIN_SAFE_INTEGER` bezeichnet den kleinsten Wert, bei dem Operationen auf Ganzzahlebene präzise ausgeführt werden können. Auch mit kleineren Zahlen lassen sich noch sinnvolle Berechnungen durchführen, allerdings ohne Genauigkeit auf Ganzzahlebene. Die größte in JavaScript darstellbare Zahl ist {{jsxref("Number.MAX_VALUE")}} mit ungefähr 1,7976931348623157 × 10<sup>308</sup>.

Da `MIN_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MIN_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### MIN_SAFE_INTEGER verwenden

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Number.MIN_SAFE_INTEGER` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [es-shims-Polyfill für `Number.MIN_SAFE_INTEGER`](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
