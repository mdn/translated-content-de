---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
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

2<sup>-52</sup>, oder ungefähr `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.EPSILON` ist der Unterschied zwischen 1 und der nächstgrößeren darstellbaren Zahl im Number-Format, da das [Double-Precision-Gleitkommaformat](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bits zur Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) hat, und das niedrigste Bit eine Bedeutung von 2<sup>-52</sup> hat.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen abnimmt, je größer die Zahl wird, da der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl, die viel kleiner als `Number.EPSILON` ist.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer als `Number.EPSILON` verwendet, anstatt als eine Eigenschaft eines Zahlenwerts.

## Beispiele

### Testen von Gleichheit

Jedes Zahlencodierungssystem, das eine endliche Anzahl von Bits belegt, unabhängig von der gewählten Basis (z. B. Dezimal oder Binär), wird _notwendigerweise_ nicht in der Lage sein, alle Zahlen genau darzustellen, weil Sie versuchen, eine unendliche Anzahl von Punkten auf der Zahlenlinie mit einer endlichen Menge an Speicher darzustellen. Zum Beispiel kann ein System der Basis 10 (Dezimal) 1/3 nicht genau darstellen, und ein System der Basis 2 (Binär) kann `0.1` nicht genau darstellen. Daher ist zum Beispiel `0.1 + 0.2` nicht genau gleich `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird oft geraten, **Gleitkommazahlen niemals mit `===` zu vergleichen**. Stattdessen können zwei Zahlen als gleich betrachtet werden, wenn sie _nahe genug_ beieinander liegen. Die Konstante `Number.EPSILON` ist in der Regel ein angemessener Schwellenwert für Fehler, wenn die Arithmetik um die Größenordnung von `1` liegt, da `EPSILON` im Wesentlichen angibt, wie genau die Zahl "1" ist.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Jedoch ist `Number.EPSILON` ungeeignet für Arithmetik, die auf einer größeren Größenordnung operiert. Wenn Ihre Daten in der Größenordnung von 10<sup>3</sup> liegen, wird der Dezimalteil eine wesentlich geringere Genauigkeit haben als `Number.EPSILON`:

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

In diesem Fall ist eine größere Toleranz erforderlich. Da die verglichenen Zahlen eine Größenordnung von ungefähr `2000` haben, erzeugt ein Multiplikator wie `2000 * Number.EPSILON` genügend Toleranz für diesen Fall.

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

Neben der Größenordnung ist es wichtig, die _Genauigkeit_ Ihrer Eingaben zu berücksichtigen. Wenn die Zahlen zum Beispiel aus einer Formulareingabe gesammelt werden und der Eingabewert nur in Schritten von `0.1` angepasst werden kann (d.h. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Attributes/step)), ergibt es in der Regel Sinn, eine viel größere Toleranz, wie `0.01`, zuzulassen, da die Daten nur eine Genauigkeit von `0.1` haben.

> [!NOTE]
> Wichtiger Hinweis: Verwenden Sie `Number.EPSILON` nicht einfach als Schwellenwert für Gleichheitstests. Verwenden Sie einen Schwellenwert, der für die Größenordnung und Genauigkeit der Zahlen, die Sie vergleichen, angemessen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.EPSILON` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.EPSILON`](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number")}}
