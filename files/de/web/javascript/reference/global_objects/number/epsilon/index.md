---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.EPSILON`** repräsentiert den Unterschied zwischen 1 und der kleinsten Gleitkommazahl, die größer als 1 ist.

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}

## Wert

2<sup>-52</sup>, oder ungefähr `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.EPSILON` ist der Unterschied zwischen 1 und der nächsten größeren Zahl, die im Zahlformat dargestellt werden kann, da das [Doppelpräzisions-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bits verwendet, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen, und das niedrigste Bit eine Bedeutung von 2<sup>-52</sup> hat.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen sinkt, wenn die Zahl größer wird, da der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl, die viel kleiner als `Number.EPSILON` ist.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.EPSILON`, und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Testen der Gleichheit

Jedes Zahlencodierungssystem, das eine endliche Anzahl von Bits einnimmt, egal welche Basis Sie wählen (z.B. Dezimal oder Binär), kann _zwangsläufig_ nicht alle Zahlen genau darstellen, da Sie eine unendliche Anzahl von Punkten auf der Zahlengeraden mit einer endlichen Menge von Speicher darstellen möchten. Zum Beispiel kann ein System zur Basis 10 (Dezimal) 1/3 nicht genau darstellen, und ein System zur Basis 2 (Binär) kann `0.1` nicht genau darstellen. So ist zum Beispiel `0.1 + 0.2` nicht genau gleich `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird oft empfohlen, **Gleitkommazahlen niemals mit `===` zu vergleichen**. Stattdessen können wir zwei Zahlen als gleich ansehen, wenn sie _nahe genug_ beieinander liegen. Die Konstante `Number.EPSILON` ist in der Regel ein angemessener Schwellenwert für Fehler, wenn die Arithmetik um die Größenordnung von `1` liegt, da `EPSILON` im Wesentlichen angibt, wie genau die Zahl "1" ist.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Jedoch ist `Number.EPSILON` ungeeignet für jede Arithmetik mit größeren Größenordnungen. Wenn Ihre Daten in der Größenordnung von 10<sup>3</sup> liegen, wird der Dezimalteil eine viel geringere Genauigkeit haben als `Number.EPSILON`:

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(x + y); // 2000.3000000000002; Fehler von 10^-13 anstatt 10^-16
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

Zusätzlich zur Größenordnung ist es wichtig, die _Genauigkeit_ Ihrer Eingaben zu berücksichtigen. Zum Beispiel, wenn die Zahlen von einer Formulareingabe gesammelt werden und der Eingabewert nur in Schritten von `0.1` angepasst werden kann (z.B. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Attributes/step)), ist es üblich, eine viel größere Toleranz zuzulassen, wie `0.01`, da die Daten nur eine Präzision von `0.1` haben.

> [!NOTE]
> Wichtiger Punkt: Verwenden Sie `Number.EPSILON` nicht einfach als Schwellenwert für Gleichheitstests. Verwenden Sie einen Schwellenwert, der für die Größenordnung und Genauigkeit der Zahlen, die Sie vergleichen, angemessen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
