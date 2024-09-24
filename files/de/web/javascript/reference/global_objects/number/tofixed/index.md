---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
l10n:
  sourceCommit: 2de0ebb6bde4500adb9b7f497763210066f4e395
---

{{JSRef}}

Die **`toFixed()`** Methode der {{jsxref("Number")}}-Werte gibt eine Zeichenkette zurück, die diese Zahl in [festkomma Schreibweise](https://en.wikipedia.org/wiki/Fixed-point_arithmetic) mit der angegebenen Anzahl von Dezimalstellen darstellt.

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## Syntax

```js-nolint
toFixed()
toFixed(digits)
```

### Parameter

- `digits` {{optional_inline}}
  - : Die Anzahl der Ziffern, die nach dem Dezimalpunkt erscheinen sollen; sollte ein Wert zwischen `0` und `100` einschließlich sein. Wenn dieses Argument weggelassen wird, wird es als `0` behandelt.

### Rückgabewert

Eine Zeichenkette, die die angegebene Zahl in Festkomma-Schreibweise darstellt. Wissenschaftliche Notation wird verwendet, wenn die Größe der Zahl (Vorzeichen ignoriert) größer oder gleich 10<sup>21</sup> ist (gleicher Rückgabewert wie {{jsxref("Number.prototype.toString()")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `digits` nicht zwischen `0` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beschreibung

Die `toFixed()` Methode gibt eine Zeichenketten-Darstellung einer Zahl zurück, ohne [exponentielle Notation](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) zu verwenden und mit genau `digits` Nachkommastellen. Die Zahl wird falls nötig gerundet, und der Bruchteil wird mit Nullen gefüllt, falls nötig, sodass er die angegebene Länge hat.

Wenn der Absolutwert der Zahl größer oder gleich 10<sup>21</sup> ist, verwendet diese Methode denselben Algorithmus wie {{jsxref("Number.prototype.toString()")}} und gibt eine Zeichenkette in exponentieller Notation zurück. `toFixed()` liefert `"Infinity"`, `"NaN"` oder `"-Infinity"`, wenn der Wert der Zahl unendlich ist.

Die Ausgabe von `toFixed()` kann für einige Werte präziser sein als [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString), da `toString()` nur genügend signifikante Ziffern druckt, um die Zahl von benachbarten Zahlenwerten zu unterscheiden. Zum Beispiel:

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

Jedoch kann eine zu hohe Präzision von `digits` unerwartete Ergebnisse erzeugen, da dezimale Bruchzahlen nicht präzise in Gleitkommazahlen dargestellt werden können. Zum Beispiel:

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## Beispiele

### Verwendung von toFixed()

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'; Rundung, kein Bruchteil
numObj.toFixed(1); // '12345.7'; es wird aufgerundet
numObj.toFixed(6); // '12345.678900'; zusätzliche Nullen
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'; es wird aufgerundet
(2.55).toFixed(1); // '2.5'
// es wird abgerundet, da es nicht genau durch ein Float darstellbar ist
// und der nächstgelegene darstellbare Float niedriger ist
(2.449999999999999999).toFixed(1); // '2.5'
// es wird aufgerundet, da es weniger als Number.EPSILON von 2.45 entfernt ist.
// Dieser Literalwert kodiert tatsächlich denselben Zahlenwert wie 2.45

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23; große Zahlen verwenden immer noch exponentielle Notation
```

### Verwendung von toFixed() mit negativen Zahlen

Da der Zugriff auf Member eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als das unäre Minus hat, müssen Sie den Ausdruck der negativen Zahl gruppieren, um eine Zeichenkette zu erhalten.

```js-nolint
-2.34.toFixed(1); // -2.3, eine Zahl
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
