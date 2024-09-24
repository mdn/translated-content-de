---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`Math.pow()`** statische Methode gibt den Wert einer Basis zurück, die auf eine Potenz erhoben wird. Das heißt

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚙𝚘𝚠</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo>,</mo><mi>𝚢</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>y</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.pow}(x, y)} = x^y</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-pow.html")}}

## Syntax

```js-nolint
Math.pow(base, exponent)
```

### Parameter

- `base`
  - : Die Basisnummer.
- `exponent`
  - : Der Exponentnummer.

### Rückgabewert

Eine Zahl, die `base` zur Potenz von `exponent` repräsentiert. Gibt {{jsxref("NaN")}} in einem der folgenden Fälle zurück:

- `exponent` ist `NaN`.
- `base` ist `NaN` und `exponent` ist nicht `0`.
- `base` ist ±1 und `exponent` ist ±`Infinity`.
- `base < 0` und `exponent` ist keine ganze Zahl.

## Beschreibung

`Math.pow()` ist äquivalent zum [`**`](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) Operator, außer dass `Math.pow()` nur Zahlen akzeptiert.

`Math.pow(NaN, 0)` (und das äquivalente `NaN ** 0`) ist der einzige Fall, in dem {{jsxref("NaN")}} sich nicht durch mathematische Operationen fortpflanzt — es gibt `1` zurück, obwohl der Operant `NaN` ist. Zusätzlich ist das Verhalten, wenn `base` 1 ist und `exponent` nicht endliche Werte (±Infinity oder `NaN`) hat, anders als bei IEEE 754, welches spezifiziert, dass das Ergebnis 1 sein sollte, während JavaScript `NaN` zurückgibt, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu bewahren.

Da `pow()` eine statische Methode von `Math` ist, verwenden Sie sie als `Math.pow()` und nicht als eine Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.pow()

```js
// Einfache Fälle
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Brüchexponenten
Math.pow(4, 0.5); // 2 (Quadratwurzel von 4)
Math.pow(8, 1 / 3); // 2 (Kubikwurzel von 8)
Math.pow(2, 0.5); // 1.4142135623730951 (Quadratwurzel von 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (Kubikwurzel von 2)

// Signierte Exponenten
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Signierte Basen
Math.pow(-7, 2); // 49 (Quadrate sind positiv)
Math.pow(-7, 3); // -343 (Kuben können negativ sein)
Math.pow(-7, 0.5); // NaN (negative Zahlen haben keine reale Quadratwurzel)
// Aufgrund der Nähe von "geraden" und "ungeraden" Wurzeln
// und Beschränkungen der Gleitkommapräzision,
// liefern negative Basen mit gebrochenen Exponenten immer NaN,
// auch wenn das mathematische Ergebnis tatsächlich ist
Math.pow(-7, 1 / 3); // NaN

// Null und Unendlichkeit
Math.pow(0, 0); // 1 (irgendetwas ** ±0 ist 1)
Math.pow(Infinity, 0.1); // Infinity (positive Exponent)
Math.pow(Infinity, -1); // 0 (negative Exponent)
Math.pow(-Infinity, 1); // -Infinity (positive ungerade ganzzahlige Exponent)
Math.pow(-Infinity, 1.5); // Infinity (positive Exponent)
Math.pow(-Infinity, -1); // -0 (negative ungerade ganzzahlige Exponent)
Math.pow(-Infinity, -1.5); // 0 (negative Exponent)
Math.pow(0, 1); // 0 (positive Exponent)
Math.pow(0, -1); // Infinity (negative Exponent)
Math.pow(-0, 1); // -0 (positive ungerade ganzzahlige Exponent)
Math.pow(-0, 1.5); // 0 (positive Exponent)
Math.pow(-0, -1); // -Infinity (negative ungerade ganzzahlige Exponent)
Math.pow(-0, -1.5); // Infinity (negative Exponent)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: nur Math.pow(NaN, 0) ergibt nicht NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
