---
title: Number.isSafeInteger()
short-title: isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Number.isSafeInteger()`** bestimmt, ob der angegebene Wert eine Zahl ist, die ein _sicherer Ganzzahlwert_ ist.

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
  - : Der Wert, der darauf getestet wird, ein sicherer Ganzzahlwert zu sein.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Zahl ist, die ein sicherer Ganzzahlwert ist. Andernfalls `false`.

## Beschreibung

Die sicheren Ganzzahlen bestehen aus allen Ganzzahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, einschließlich (±9.007.199.254.740.991). Ein sicherer Ganzzahlwert ist eine Zahl, die:

- als IEEE-754-Doppelpräzisionszahl genau dargestellt werden kann und
- deren IEEE-754-Darstellung nicht das Ergebnis der Rundung einer anderen Ganzzahl ist, um in die IEEE-754-Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 ein sicherer Ganzzahlwert: Er kann genau dargestellt werden, und keine andere Ganzzahl wird bei irgendeiner IEEE-754-Rundungsart auf ihn gerundet. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Ganzzahlwert: Er kann in IEEE-754 genau dargestellt werden, aber die Ganzzahl 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern wird stattdessen unter Rundung auf den nächsten und Rundung auf null auf 2<sup>53</sup> gerundet.

Um Werte mit vollständiger Präzision zu handhaben, die größer oder kleiner als etwa 9 Billionen sind, ist die Verwendung einer [Arbitrary Precision Arithmetic Library](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic) erforderlich. Weitere Informationen zu Fließkommadarstellungen von Zahlen finden Sie unter [Was jeder Programmierer über Gleitkommaarithmetik wissen muss](https://floating-point-gui.de/).

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
- [es-shims polyfill von `Number.isSafeInteger`](https://www.npmjs.com/package/number.issafeinteger)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
