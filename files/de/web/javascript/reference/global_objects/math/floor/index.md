---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{JSRef}}

Die statische Methode **`Math.floor()`** rundet immer ab und gibt die größte Ganzzahl zurück, die kleiner oder gleich einer gegebenen Zahl ist.

{{InteractiveExample("JavaScript Demo: Math.floor()")}}

```js interactive-example
console.log(Math.floor(5.95));
// Expected output: 5

console.log(Math.floor(5.05));
// Expected output: 5

console.log(Math.floor(5));
// Expected output: 5

console.log(Math.floor(-5.05));
// Expected output: -6
```

## Syntax

```js-nolint
Math.floor(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Die größte Ganzzahl, die kleiner oder gleich `x` ist. Es ist der gleiche Wert wie [`-Math.ceil(-x)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil).

## Beschreibung

Da `floor()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.floor()` und nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.floor()

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### Dezimalanpassung

In diesem Beispiel implementieren wir eine Methode namens `decimalAdjust()`, die eine Erweiterungsmethode von `Math.floor()`, {{jsxref("Math.ceil()")}} und {{jsxref("Math.round()")}} ist. Während die drei `Math`-Funktionen die Eingabe immer auf die Ziffern der Einheitenstelle anpassen, akzeptiert `decimalAdjust` einen `exp`-Parameter, der die Anzahl der Ziffern angibt, die links vom Dezimalpunkt eingestellt werden sollen. Zum Beispiel bedeutet `-1`, dass eine Ziffer nach dem Dezimalpunkt bleibt (wie in "× 10<sup>-1</sup>"). Darüber hinaus können Sie das Mittel der Anpassung — `round`, `floor` oder `ceil` — über den `type`-Parameter auswählen.

Dies erfolgt durch Multiplikation der Zahl mit einer Potenz von 10, dann durch Rundung des Ergebnisses zur nächsten Ganzzahl und schließlich durch Division durch die Potenz von 10. Um die Genauigkeit besser zu bewahren, nutzt es die Methode [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) von Number, welche große oder kleine Zahlen in wissenschaftlicher Notation darstellt (wie `6.02e23`).

```js
/**
 * Adjusts a number to the specified digit.
 *
 * @param {"round" | "floor" | "ceil"} type The type of adjustment.
 * @param {number} value The number.
 * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
 * @returns {number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${Number(newExponent) + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Ceil
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
