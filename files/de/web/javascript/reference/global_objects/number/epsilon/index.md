---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.EPSILON`** repräsentiert den Unterschied zwischen 1 und der kleinsten Gleitkommazahl, die größer als 1 ist.

{{InteractiveExample("JavaScript Demo: Number.EPSILON")}}

```js interactive-example
const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// Expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// Expected output: true
```

## Wert

2<sup>-52</sup> oder ungefähr `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.EPSILON` ist der Unterschied zwischen 1 und der nächstgrößeren Zahl, die im Number-Format darstellbar ist, da das [Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bits hat, um die [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) darzustellen, und das kleinste Bit eine Signifikanz von 2<sup>-52</sup> hat.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen abnimmt, je größer die Zahl wird, da der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl, die viel kleiner als `Number.EPSILON` ist.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.EPSILON` und nicht als eine Eigenschaft eines Zahlenwerts.

## Beispiele

### Gleichheit testen

Jedes Zahlencodierungssystem, das eine endliche Anzahl von Bits verwendet, egal welche Basis Sie wählen (z. B. dezimal oder binär), wird _notwendigerweise_ nicht in der Lage sein, alle Zahlen exakt darzustellen, da versucht wird, eine unendliche Anzahl von Punkten auf der Zahlengeraden mit einer endlichen Menge an Speicher darzustellen. Zum Beispiel kann ein Dezimalsystem (Basis-10) nicht 1/3 exakt darstellen, und ein Binärsystem (Basis-2) kann `0.1` nicht exakt darstellen. Daher ist zum Beispiel `0.1 + 0.2` nicht genau gleich `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird oft empfohlen, **Gleitkommazahlen niemals mit `===` zu vergleichen**. Stattdessen können wir zwei Zahlen als gleich betrachten, wenn sie _nah genug_ beieinander liegen. Die Konstante `Number.EPSILON` ist normalerweise eine vernünftige Schwelle für Fehler, wenn die Arithmetik um die Größenordnung von `1` liegt, da `EPSILON` im Wesentlichen angibt, wie genau die Zahl "1" ist.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Jedoch ist `Number.EPSILON` ungeeignet für jegliche Arithmetik mit größerer Größenordnung. Wenn Ihre Daten in der Größenordnung von 10<sup>3</sup> liegen, wird der Dezimalteil eine viel kleinere Genauigkeit als `Number.EPSILON` haben:

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

In diesem Fall ist eine größere Toleranz erforderlich. Da die verglichenen Zahlen eine Größenordnung von ungefähr `2000` haben, schafft ein Multiplikator wie `2000 * Number.EPSILON` für diesen Fall genug Toleranz.

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

Neben der Größenordnung ist es wichtig, die _Genauigkeit_ Ihrer Eingaben zu berücksichtigen. Wenn die Zahlen beispielsweise aus einer Formulareingabe stammen und der Eingabewert nur in Schritten von `0.1` angepasst werden kann (d.h. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Attributes/step)), macht es normalerweise Sinn, eine viel größere Toleranz zuzulassen, wie `0.01`, da die Daten nur eine Genauigkeit von `0.1` haben.

> [!NOTE]
> Wichtige Erkenntnis: Verwenden Sie `Number.EPSILON` nicht einfach als Schwelle für Gleichheitstests. Verwenden Sie eine Schwelle, die für die Größenordnung und Genauigkeit der Zahlen, die Sie vergleichen, geeignet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.EPSILON`](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number")}}
