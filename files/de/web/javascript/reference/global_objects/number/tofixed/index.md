---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
l10n:
  sourceCommit: 2de0ebb6bde4500adb9b7f497763210066f4e395
---

{{JSRef}}

Die **`toFixed()`**-Methode von {{jsxref("Number")}}-Werten gibt einen String zurück, der diese Zahl unter Verwendung der [Festkomma-Darstellung](https://en.wikipedia.org/wiki/Fixed-point_arithmetic) mit der angegebenen Anzahl von Dezimalstellen repräsentiert.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## Syntax

```js-nolint
toFixed()
toFixed(digits)
```

### Parameter

- `digits` {{optional_inline}}
  - : Die Anzahl der Ziffern, die nach dem Dezimalpunkt angezeigt werden sollen; sollte ein Wert zwischen `0` und `100` (einschließlich) sein. Wenn dieses Argument weggelassen wird, wird es als `0` behandelt.

### Rückgabewert

Ein String, der die angegebene Zahl unter Verwendung der Festkomma-Darstellung darstellt. Wissenschaftliche Notation wird verwendet, wenn die Größe der Zahl (ohne Vorzeichen) größer oder gleich 10<sup>21</sup> ist (gleicher Rückgabewert wie {{jsxref("Number.prototype.toString()")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `digits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Die `toFixed()`-Methode gibt eine String-Darstellung einer Zahl zurück, ohne [exponentielle Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) zu verwenden und mit genau `digits` Ziffern nach dem Dezimalpunkt. Die Zahl wird bei Bedarf gerundet, und der Bruchteil wird bei Bedarf mit Nullen aufgefüllt, sodass er die angegebene Länge hat.

Wenn der Absolutwert der Zahl größer oder gleich 10<sup>21</sup> ist, verwendet diese Methode denselben Algorithmus wie {{jsxref("Number.prototype.toString()")}} und gibt einen String in exponentieller Notation zurück. `toFixed()` gibt `"Infinity"`, `"NaN"` oder `"-Infinity"` zurück, wenn der Wert der Zahl nicht endlich ist.

Die Ausgabe von `toFixed()` kann für einige Werte präziser sein als [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString), da `toString()` nur genügend signifikante Ziffern anzeigt, um die Zahl von benachbarten Zahlen zu unterscheiden. Zum Beispiel:

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

Die Wahl einer zu hohen `digits`-Präzision kann jedoch unerwartete Ergebnisse liefern, da dezimale Brüche im Gleitkommaformat nicht präzise dargestellt werden können. Zum Beispiel:

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## Beispiele

### Verwendung von toFixed()

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; rounding, no fractional part
numObj.toFixed(1); // '12345.7'; it rounds up
numObj.toFixed(6); // '12345.678900'; additional zeros
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'; it rounds up
(2.55).toFixed(1); // '2.5'
// it rounds down as it can't be represented exactly by a float and the
// closest representable float is lower
(2.449999999999999999).toFixed(1); // '2.5'
// it rounds up as it's less than Number.EPSILON away from 2.45.
// This literal actually encodes the same number value as 2.45

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; large numbers still use exponential notation
```

### Verwendung von toFixed() mit negativen Zahlen

Da der Mitgliederzugriff eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als das unäre Minus hat, müssen Sie den Ausdruck der negativen Zahl gruppieren, um einen String zu erhalten.

```js-nolint
-2.34.toFixed(1); // -2.3, a number
(-2.34).toFixed(1); // '-2.3'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Number.EPSILON")}}
