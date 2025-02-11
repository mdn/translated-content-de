---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Number.isSafeInteger()`** statische Methode bestimmt, ob der übergebene Wert eine Zahl ist, die ein _sicherer Integer_ ist.

{{InteractiveExample("JavaScript Demo: Number.isSafeInteger()")}}

```js interactive-example
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Precision safe.";
  }
  return "Precision may be lost!";
}

console.log(warn(Math.pow(2, 53)));
// Expected output: "Precision may be lost!"

console.log(warn(Math.pow(2, 53) - 1));
// Expected output: "Precision safe."
```

## Syntax

```js-nolint
Number.isSafeInteger(testValue)
```

### Parameter

- `testValue`
  - : Der Wert, der darauf getestet wird, ob er ein sicherer Integer ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl ist, die ein sicherer Integer ist. Andernfalls `false`.

## Beschreibung

Die sicheren Integer umfassen alle Ganzzahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, einschließlich (±9.007.199.254.740.991). Ein sicherer Integer ist ein Integer, der:

- exakt als IEEE-754-Doppelpräzisionszahl dargestellt werden kann, und
- dessen IEEE-754-Darstellung nicht das Ergebnis des Rundens einer anderen Ganzzahl ist, um in die IEEE-754-Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 ein sicherer Integer: Er kann exakt dargestellt werden, und keine andere Ganzzahl wird auf ihn gemäß irgendeinem IEEE-754-Rundungsmodus gerundet. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Integer: Er kann exakt in IEEE-754 dargestellt werden, aber die Ganzzahl 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern wird stattdessen im Rundungsmodus "auf nächste Zahl runden" oder "auf null runden" auf 2<sup>53</sup> gerundet.

Um Werte jenseits von \~9 Billiarden mit voller Präzision zu bearbeiten, wird die Verwendung einer [Arbitrary Precision Arithmetic Library](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic) benötigt. Lesen Sie [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) für weitere Informationen über die Darstellung von Gleitkommazahlen.

Für größere Ganzzahlen sollten Sie den Typ {{jsxref("BigInt")}} in Betracht ziehen.

## Beispiele

### Verwendung von isSafeInteger()

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.isSafeInteger` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
