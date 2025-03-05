---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Number.isSafeInteger()`** bestimmt, ob der bereitgestellte Wert eine Zahl ist, die ein _sicherer Integer_ ist.

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
  - : Der Wert, der darauf getestet werden soll, ob er ein sicherer Integer ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Zahl ist, die ein sicherer Integer ist. Andernfalls `false`.

## Beschreibung

Sichere Integer bestehen aus allen ganzen Zahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, einschließlich (±9,007,199,254,740,991). Ein sicherer Integer ist ein Integer, der:

- genau als IEEE-754-Doppelpräzisionszahl dargestellt werden kann, und
- dessen IEEE-754-Darstellung nicht das Ergebnis ist, wenn ein anderer Integer gerundet wird, um in die IEEE-754-Darstellung zu passen.

Beispielsweise ist 2<sup>53</sup> - 1 ein sicherer Integer: er kann genau dargestellt werden, und kein anderer Integer rundet auf ihn unter irgendeinem IEEE-754-Rundungsmodus. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Integer: er kann in IEEE-754 genau dargestellt werden, aber der Integer 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern rundet unter Rundung auf die nächste Zahl und Rundung auf Null auf 2<sup>53</sup>.

Um Werte größer oder kleiner als \~9 Billiarden mit voller Genauigkeit zu handhaben, ist die Verwendung einer [Arbiträrpräzisions-Arithmetik-Bibliothek](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic) erforderlich. Siehe [Was jeder Programmierer über Gleitkomma-Arithmetik wissen muss](https://floating-point-gui.de/) für mehr Informationen über Gleitkommadarstellungen von Zahlen.

Für größere Integer sollten Sie den {{jsxref("BigInt")}}-Typ in Betracht ziehen.

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
