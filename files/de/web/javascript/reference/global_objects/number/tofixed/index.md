---
title: Number.prototype.toFixed()
short-title: toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toFixed()`** Methode von {{jsxref("Number")}} Werten gibt einen String zurück, der diese Zahl unter Verwendung der [Festkommadarstellung](https://en.wikipedia.org/wiki/Fixed-point_arithmetic) mit der angegebenen Anzahl an Dezimalstellen darstellt.

{{InteractiveExample("JavaScript Demo: Number.toFixed()")}}

```js interactive-example
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial("1.23e+5"));
// Expected output: "123000.00"
```

## Syntax

```js-nolint
toFixed()
toFixed(digits)
```

### Parameter

- `digits` {{optional_inline}}
  - : Die Anzahl der Stellen, die nach dem Dezimalpunkt erscheinen sollen; sollte ein Wert zwischen `0` und `100` sein, inklusive. Wenn dieses Argument weggelassen wird, wird es als `0` behandelt.

### Rückgabewert

Ein String, der die gegebene Zahl mit Festkommadarstellung repräsentiert. Wissenschaftliche Notation wird verwendet, wenn die Größe der Zahl (unabhängig vom Vorzeichen) größer oder gleich 10<sup>21</sup> ist (gleicher Rückgabewert wie {{jsxref("Number.prototype.toString()")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `digits` nicht zwischen `0` und `100` (inklusiv) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Die `toFixed()` Methode gibt eine String-Darstellung einer Zahl zurück, ohne [exponentielle Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) zu verwenden und mit genau `digits` Stellen nach dem Dezimalpunkt. Die Zahl wird bei Bedarf gerundet, und der Bruchteil wird bei Bedarf mit Nullen aufgefüllt, sodass er die angegebene Länge hat.

Wenn der Absolutwert der Zahl größer oder gleich 10<sup>21</sup> ist, verwendet diese Methode denselben Algorithmus wie {{jsxref("Number.prototype.toString()")}} und gibt eine String in exponentieller Notation zurück. `toFixed()` gibt `"Infinity"`, `"NaN"` oder `"-Infinity"` zurück, wenn der Wert der Zahl nicht endlich ist.

Der Output von `toFixed()` kann präziser sein als [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) für einige Werte, weil `toString()` nur genug signifikante Stellen druckt, um die Zahl von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel:

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

Allerdings kann die Wahl einer zu hohen `digits` Präzision unerwartete Ergebnisse liefern, da dezimale Bruchzahlen in Gleitkomma nicht genau dargestellt werden können. Zum Beispiel:

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

(6.02 * 10 ** 23).toFixed(50); // '6.019999999999999e+23'; large numbers still use exponential notation
```

### Verwendung von toFixed() mit negativen Zahlen

Da der Zugriff auf Mitglieder eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als ein einstelliger Minus-Operator hat, müssen Sie den Ausdruck der negativen Zahl gruppieren, um einen String zu erhalten.

```js-nolint
-2.34.toFixed(1); // -2.3; a number
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
