---
title: Number.isSafeInteger()
short-title: isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Number.isSafeInteger()`** statische Methode bestimmt, ob der angegebene Wert eine Zahl ist, die ein _sicherer Integer_ ist.

{{InteractiveExample("JavaScript Demo: Number.isSafeInteger()")}}

```js interactive-example
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Precision safe.";
  }
  return "Precision may be lost!";
}

console.log(warn(2 ** 53));
// Expected output: "Precision may be lost!"

console.log(warn(2 ** 53 - 1));
// Expected output: "Precision safe."
```

## Syntax

```js-nolint
Number.isSafeInteger(testValue)
```

### Parameter

- `testValue`
  - : Der Wert, der darauf getestet werden soll, ob er ein sicherer Integer ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl ist, die ein sicherer Integer ist. Andernfalls `false`.

## Beschreibung

Die sicheren Integer umfassen alle Ganzzahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1 einschließlich (±9.007.199.254.740.991). Ein sicherer Integer ist ein Integer, der:

- genau als IEEE-754-Doppelpräzisionszahl dargestellt werden kann und
- dessen IEEE-754-Darstellung nicht das Ergebnis der Rundung einer anderen Ganzzahl ist, um in die IEEE-754-Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 ein sicherer Integer: Er kann genau dargestellt werden, und keine andere Ganzzahl wird unter irgendeinem IEEE-754-Rundungsmodus auf ihn gerundet. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Integer: Er kann genau in IEEE-754 dargestellt werden, aber die Ganzzahl 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern wird stattdessen bei Rundung auf den nächsten und Rundung auf Null auf 2<sup>53</sup> gerundet.

Um Werte größer oder kleiner als \~9 Billiarden mit voller Präzision zu handhaben, ist die Verwendung einer [Arbitrary-Precision-Arithmetik-Bibliothek](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic) erforderlich. Siehe [Was jeder Programmierer über Gleitkommaarithmetik wissen muss](https://floating-point-gui.de/) für weitere Informationen zu Gleitkommadarstellungen von Zahlen.

Für größere Ganzzahlen sollten Sie den {{jsxref("BigInt")}}-Typ in Betracht ziehen.

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
- [es-shims Polyfill von `Number.isSafeInteger`](https://www.npmjs.com/package/number.issafeinteger)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
