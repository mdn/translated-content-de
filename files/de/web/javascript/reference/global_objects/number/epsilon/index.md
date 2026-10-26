---
title: Number.EPSILON
short-title: EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Number.EPSILON`** gibt die Differenz zwischen 1 und der kleinsten Gleitkommazahl an, die größer als 1 ist.

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

`Number.EPSILON` ist die Differenz zwischen 1 und der nächstgrößeren Zahl, die im Number-Format darstellbar ist. Das liegt daran, dass das [Gleitkommaformat mit doppelter Genauigkeit](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) nur 52 Bit für die Darstellung der [Mantisse](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) verwendet und das niederwertigste Bit einen Stellenwert von 2<sup>-52</sup> hat.

Beachten Sie, dass die absolute Genauigkeit von Gleitkommazahlen mit zunehmender Größe der Zahl abnimmt, weil der Exponent wächst, während die Genauigkeit der Mantisse gleich bleibt. {{jsxref("Number.MIN_VALUE")}} ist die kleinste darstellbare positive Zahl und deutlich kleiner als `Number.EPSILON`.

Da `EPSILON` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.EPSILON` und nicht als Eigenschaft eines Zahlenwerts.

## Beispiele

### Gleichheit prüfen

Jedes System zur Darstellung von Zahlen, das eine endliche Anzahl von Bits verwendet, kann unabhängig von der gewählten Basis (z. B. dezimal oder binär) _zwangsläufig_ nicht alle Zahlen exakt darstellen. Schließlich wird versucht, unendlich viele Punkte auf der Zahlengeraden mit einer endlichen Menge an Speicher darzustellen. Beispielsweise kann ein System zur Basis 10 (Dezimalsystem) 1/3 nicht exakt darstellen, und ein System zur Basis 2 (Binärsystem) kann `0.1` nicht exakt darstellen. Daher ist beispielsweise `0.1 + 0.2` nicht exakt gleich `0.3`:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Aus diesem Grund wird häufig empfohlen, **Gleitkommazahlen niemals mit `===` zu vergleichen**. Stattdessen können zwei Zahlen als gleich betrachtet werden, wenn sie _nahe genug_ beieinanderliegen. Die Konstante `Number.EPSILON` ist in der Regel ein geeigneter Schwellenwert für Abweichungen, wenn sich die Berechnungen in der Größenordnung von `1` bewegen. Denn `EPSILON` gibt im Wesentlichen an, mit welcher Genauigkeit die Zahl „1“ dargestellt wird.

```js
function equal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(equal(x + z, y)); // true
```

Für Berechnungen mit Zahlen in einer größeren Größenordnung ist `Number.EPSILON` jedoch ungeeignet. Wenn Ihre Daten in der Größenordnung von 10<sup>3</sup> liegen, ist die Genauigkeit des Dezimalteils deutlich geringer als `Number.EPSILON`:

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

In diesem Fall ist eine größere Toleranz erforderlich. Da die verglichenen Zahlen ungefähr die Größenordnung `2000` haben, ergibt ein Faktor wie `2000 * Number.EPSILON` für diesen Fall eine ausreichende Toleranz.

```js
function equal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(equal(x + y, z, 2000 * Number.EPSILON)); // true
```

Neben der Größenordnung sollten Sie auch die _Genauigkeit_ Ihrer Eingabedaten berücksichtigen. Wenn die Zahlen beispielsweise aus einem Formulareingabefeld stammen und sich der Eingabewert nur in Schritten von `0.1` ändern lässt (d.h. [`<input type="number" step="0.1">`](/de/docs/Web/HTML/Reference/Attributes/step)), ist es in der Regel sinnvoll, eine deutlich größere Toleranz wie `0.01` zuzulassen, da die Daten nur eine Genauigkeit von `0.1` haben.

> [!NOTE]
> Wichtig: Verwenden Sie `Number.EPSILON` nicht pauschal als Schwellenwert für Gleichheitsprüfungen. Wählen Sie einen Schwellenwert, der zur Größenordnung und Genauigkeit der verglichenen Zahlen passt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Number.EPSILON` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [es-shims-Polyfill für `Number.EPSILON`](https://www.npmjs.com/package/es-constants)
- {{jsxref("Number")}}
