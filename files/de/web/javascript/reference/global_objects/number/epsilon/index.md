---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.EPSILON`** stellt den Unterschied dar zwischen 1 und der kleinsten Gleitkommazahl, die größer als 1 ist.

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}

## Wert

2<sup>-52</sup> oder ungefähr `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.EPSILON` ist der Unterschied zwischen 1 und der nächstgrößeren Zahl, die im `Number`-Format darstellbar ist, da das [Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) hat, und das niederwertigste Bit eine Bedeutung von 2<sup>-52</sup> hat.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen abnimmt, je größer die Zahl wird, da der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl, die viel kleiner ist als `Number.EPSILON`.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.EPSILON` und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Gleichheit testen

Jedes Zahlencodierungssystem, das eine endliche Anzahl von Bits verwendet, egal welche Basis Sie wählen (z.B. dezimal oder binär), wird _notwendigerweise_ nicht in der Lage sein, alle Zahlen exakt darzustellen, da Sie versuchen, eine unendliche Anzahl von Punkten auf der Zahlengeraden mit einer endlichen Menge an Speicher darzustellen. Zum Beispiel kann ein Basis-10-(Dezimal)-System 1/3 nicht genau darstellen, und ein Basis-2-(Binär)-System kann `0.1` nicht genau darstellen. Somit ist zum Beispiel `0.1 + 0.2` nicht exakt gleich `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird oft geraten, dass **Gleitkommazahlen niemals mit `===` verglichen werden sollten**. Stattdessen können wir zwei Zahlen als gleich betrachten, wenn sie _nahe genug_ beieinander liegen. Die Konstante `Number.EPSILON` ist normalerweise ein angemessener Schwellenwert für Fehler, wenn die Arithmetik um den Größenordnungsbereich von `1` liegt, da `EPSILON` im Wesentlichen angibt, wie genau die Zahl "1" ist.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Jedoch ist `Number.EPSILON` ungeeignet für jede Arithmetik, die auf einem größeren Größenordnungsniveau operiert. Wenn Ihre Daten im Bereich der Größenordnung 10<sup>3</sup> liegen, wird der Dezimalteil eine viel geringere Genauigkeit haben als `Number.EPSILON`:

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

In diesem Fall ist eine größere Toleranz erforderlich. Da die verglichenen Zahlen eine Größenordnung von ungefähr `2000` haben, erzeugt ein Multiplikator wie `2000 * Number.EPSILON` genug Toleranz für diesen Fall.

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

Zusätzlich zur Größenordnung ist es wichtig, die _Genauigkeit_ Ihrer Eingabewerte zu berücksichtigen. Wenn beispielsweise die Zahlen aus einem Formulareingabefeld gesammelt werden und der Eingabewert nur in Schritten von `0.1` verändert werden kann (z.B. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Attributes/step)), macht es in der Regel Sinn, eine viel größere Toleranz zuzulassen, wie z.B. `0.01`, da die Daten nur eine Präzision von `0.1` besitzen.

> [!NOTE]
> Wichtige Erkenntnis: Verwenden Sie `Number.EPSILON` nicht einfach als Schwellenwert für Gleichheitstests. Verwenden Sie einen Schwellenwert, der für die Größenordnung und Genauigkeit der Zahlen, die Sie vergleichen, angemessen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
