---
title: Number.isSafeInteger()
short-title: isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Number.isSafeInteger()`** bestimmt, ob der angegebene Wert eine Zahl ist, die eine _sichere Ganzzahl_ darstellt.

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
  - : Der Wert, der darauf geprüft werden soll, ob er eine sichere Ganzzahl ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der angegebene Wert eine Zahl ist, die eine sichere Ganzzahl darstellt. Andernfalls `false`.

## Beschreibung

Die sicheren Ganzzahlen umfassen alle Ganzzahlen von -(2<sup>53</sup> - 1) bis einschließlich 2<sup>53</sup> - 1 (±9.007.199.254.740.991). Eine sichere Ganzzahl ist eine Ganzzahl, die:

- sich exakt als IEEE-754-Zahl mit doppelter Genauigkeit darstellen lässt und
- deren IEEE-754-Darstellung nicht dadurch entstehen kann, dass eine andere Ganzzahl auf eine darstellbare IEEE-754-Zahl gerundet wird.

Beispielsweise ist 2<sup>53</sup> - 1 eine sichere Ganzzahl: Sie lässt sich exakt darstellen, und keine andere Ganzzahl wird bei irgendeinem IEEE-754-Rundungsmodus auf sie gerundet. Dagegen ist 2<sup>53</sup> _keine_ sichere Ganzzahl: Sie lässt sich zwar in IEEE-754 exakt darstellen, aber die Ganzzahl 2<sup>53</sup> + 1 lässt sich nicht direkt in IEEE-754 darstellen und wird stattdessen sowohl bei Rundung auf den nächsten Wert als auch bei Rundung gegen null auf 2<sup>53</sup> gerundet.

Um Werte über oder unter etwa 9 Billiarden mit voller Genauigkeit zu verarbeiten, benötigen Sie eine [Bibliothek für Arithmetik mit beliebiger Genauigkeit](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). Weitere Informationen zur Gleitkommadarstellung von Zahlen finden Sie unter [Was jeder Programmierer über Gleitkommaarithmetik wissen sollte](https://floating-point-gui.de/).

Für größere Ganzzahlen sollten Sie den Typ {{jsxref("BigInt")}} verwenden.

## Beispiele

### isSafeInteger() verwenden

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

- [Polyfill für `Number.isSafeInteger` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.isSafeInteger` von es-shims](https://www.npmjs.com/package/number.issafeinteger)
- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
