---
title: Number.MAX_SAFE_INTEGER
short-title: MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Number.MAX_SAFE_INTEGER`** gibt die größte sichere Ganzzahl in JavaScript an (2<sup>53</sup> – 1).

Für größere Ganzzahlen sollten Sie {{jsxref("BigInt")}} verwenden.

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

`9007199254740991` (9.007.199.254.740.991 oder ungefähr 9 Billiarden).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Das [Gleitkommaformat mit doppelter Genauigkeit](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) verfügt nur über 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Daher kann es Ganzzahlen nur im Bereich von -(2<sup>53</sup> – 1) bis 2<sup>53</sup> – 1 sicher darstellen. „Sicher“ bedeutet in diesem Zusammenhang, dass Ganzzahlen exakt dargestellt und korrekt verglichen werden können. Beispielsweise ergibt `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` den Wert `true`, obwohl dies mathematisch falsch ist. Weitere Informationen finden Sie unter {{jsxref("Number.isSafeInteger()")}}.

Wie unter {{jsxref("Number.EPSILON")}} beschrieben, hängt die Genauigkeit von Zahlen von ihrer Größenordnung ab. `Number.MAX_SAFE_INTEGER` ist der größte Wert, bei dem Operationen mit Ganzzahlen präzise ausgeführt werden können. Auch mit größeren Zahlen können Sie noch sinnvolle Berechnungen durchführen, allerdings nicht mehr mit Ganzzahlgenauigkeit. Die größte in JavaScript darstellbare Zahl ist {{jsxref("Number.MAX_VALUE")}} mit ungefähr 1,7976931348623157 × 10<sup>308</sup>.

Da `MAX_SAFE_INTEGER` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MAX_SAFE_INTEGER` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Rückgabewert von MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Zusammenhang zwischen MAX_SAFE_INTEGER und EPSILON

{{jsxref("Number.EPSILON")}} ist 2<sup>-52</sup>, während `MAX_SAFE_INTEGER` 2<sup>53</sup> – 1 ist. Beide Werte ergeben sich aus der Breite der Mantisse von 53 Bits (wobei das höchstwertige Bit immer 1 ist). Ihr Produkt liegt sehr nahe bei 2, ist aber nicht gleich 2.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Number.MAX_SAFE_INTEGER` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.MAX_SAFE_INTEGER` von es-shims](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_VALUE")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
