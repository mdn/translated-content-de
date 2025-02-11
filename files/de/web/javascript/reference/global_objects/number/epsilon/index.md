---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.EPSILON`** stellt den Unterschied zwischen 1 und der kleinsten Gleitkommazahl dar, die größer als 1 ist.

{{InteractiveExample("JavaScript Demo: Number.EPSILON")}}

```js interactive-example
const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// Expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// Expected output: true
```

## Wert

2<sup>-52</sup>, oder ungefähr `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.EPSILON` ist der Unterschied zwischen 1 und der nächstgrößeren Zahl im Number-Format, da das [Doppelgenaue Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bits verwendet, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen. Das niedrigste Bit hat dabei eine Bedeutung von 2<sup>-52</sup>.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen abnimmt, je größer die Zahl wird, da der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl, die wesentlich kleiner ist als `Number.EPSILON`.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer als `Number.EPSILON` verwendet und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Gleichheit testen

Jedes Zahlencodierungssystem, das eine endliche Anzahl von Bits verwendet, unabhängig von der Basis (z. B. Dezimal oder Binär), kann notwendigerweise nicht alle Zahlen exakt darstellen, da versucht wird, eine unendliche Anzahl von Punkten auf der Zahlenlinie mit einer endlichen Menge an Speicher darzustellen. Zum Beispiel kann ein System mit Basis-10 (Dezimalsystem) 1/3 nicht exakt darstellen, und ein System mit Basis-2 (Binärsystem) kann `0.1` nicht exakt darstellen. So ist beispielsweise `0.1 + 0.2` nicht exakt gleich `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird oft empfohlen, **Gleitkommazahlen niemals mit `===` zu vergleichen**. Stattdessen können zwei Zahlen als gleich angesehen werden, wenn sie _nahe genug_ beieinander liegen. Die Konstante `Number.EPSILON` ist in der Regel eine vernünftige Schwelle für Fehler, wenn die Arithmetik ungefähr die Größenordnung von `1` hat, da `EPSILON` im Wesentlichen angibt, wie genau die Zahl "1" ist.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Allerdings ist `Number.EPSILON` ungeeignet für Arithmetik auf einer größeren Größenordnung. Wenn Ihre Daten beispielsweise in der Größenordnung von 10<sup>3</sup> liegen, hat der Dezimalanteil eine viel geringere Genauigkeit als `Number.EPSILON`:

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(x + y); // 2000.3000000000002; error of 10^-13 instead of 10^-16
console.log(equal(x + y, z)); // false
```

In diesem Fall ist eine größere Toleranz erforderlich. Da die zu vergleichenden Zahlen eine Größenordnung von ungefähr `2000` haben, schafft ein Multiplikator wie `2000 * Number.EPSILON` genügend Toleranz für diesen Fall.

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

Zusätzlich zur Größenordnung ist es wichtig, die _Genauigkeit_ Ihrer Eingaben zu berücksichtigen. Wenn die Zahlen beispielsweise aus einem Formularfeld stammen und der Eingabewert nur in Schritten von `0.1` angepasst werden kann (d. h. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Attributes/step)), ist es in der Regel sinnvoll, eine viel größere Toleranz zuzulassen, wie etwa `0.01`, da die Daten nur eine Genauigkeit von `0.1` aufweisen.

> [!NOTE]
> Wichtiger Hinweis: Verwenden Sie `Number.EPSILON` nicht einfach als Schwelle für Gleichheitstests. Verwenden Sie eine Schwelle, die der Größenordnung und der Genauigkeit der Zahlen entspricht, die Sie vergleichen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
