---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.EPSILON`** stellt den Unterschied zwischen 1 und der kleinsten Gleitkommazahl dar, die größer als 1 ist.

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}

## Wert

2<sup>-52</sup>, oder ungefähr `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.EPSILON` ist die Differenz zwischen 1 und der nächstgrößeren Zahl, die im Number-Format darstellbar ist, da das [Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bits zum Repräsentieren der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) hat und das niederwertigste Bit eine Bedeutung von 2<sup>-52</sup> besitzt.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen abnimmt, je größer das Zahl wird, denn der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl, die viel kleiner ist als `Number.EPSILON`.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.EPSILON` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Gleichheit testen

Jedes Zahlencodierungssystem, das eine endliche Anzahl von Bits, in welcher Basis auch immer (z.B. dezimal oder binär), verwendet, kann _notwendigerweise_ nicht alle Zahlen exakt darstellen, weil Sie versuchen, eine unendliche Anzahl von Punkten auf der Zahlenlinie mit einer endlichen Menge Speicher darzustellen. Zum Beispiel kann ein Dezimalsystem (Basis 10) nicht 1/3 exakt darstellen und ein Binärsystem (Basis 2) kann `0.1` nicht exakt darstellen. Daher ist beispielsweise `0.1 + 0.2` nicht genau `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird oft geraten, keine Gleitkommazahlen mit `===` zu vergleichen. Stattdessen können wir zwei Zahlen als gleich erachten, wenn sie _nahe genug_ beieinander liegen. Die Konstante `Number.EPSILON` ist normalerweise eine angemessene Schwelle für Fehler, wenn die Arithmetik im Bereich der Größenordnung von `1` liegt, da `EPSILON` im Wesentlichen festlegt, wie genau die Zahl "1" ist.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Jedoch ist `Number.EPSILON` für jegliche Arithmetik mit größerer Größenordnung ungeeignet. Wenn Ihre Daten in der Größenordnung 10<sup>3</sup> sind, hat der Dezimalteil eine viel geringere Genauigkeit als `Number.EPSILON`:

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

In diesem Fall ist eine größere Toleranz erforderlich. Da die verglichenen Zahlen eine Größenordnung von ungefähr `2000` haben, schafft ein Multiplikator wie `2000 * Number.EPSILON` genügend Toleranz für diesen Fall.

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

Zusätzlich zur Größenordnung ist es wichtig, die _Genauigkeit_ Ihrer Eingaben zu berücksichtigen. Wenn die Zahlen beispielsweise aus einem Formulareingabefeld erfasst werden und der Eingabewert nur in Schritten von `0.1` angepasst werden kann (d.h. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Attributes/step)), ist es normalerweise sinnvoll, eine viel größere Toleranz wie `0.01` zuzulassen, da die Daten nur eine Genauigkeit von `0.1` haben.

> [!NOTE]
> Wichtiger Hinweis: Verwenden Sie `Number.EPSILON` nicht einfach als Schwelle für Gleichheitstests. Verwenden Sie eine Schwelle, die für die Größenordnung und Genauigkeit der zu vergleichenden Zahlen geeignet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
