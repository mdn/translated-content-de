---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

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
  - : Der zu testende Wert, ob er ein sicherer Integer ist.

### Rückgabewert

Der boolesche Wert `true`, wenn der gegebene Wert eine Zahl ist, die ein sicherer Integer ist. Andernfalls `false`.

## Beschreibung

Die sicheren Integer bestehen aus allen ganzen Zahlen von -(2<sup>53</sup> - 1) bis 2<sup>53</sup> - 1, einschließlich (±9.007.199.254.740.991). Ein sicherer Integer ist ein Integer, der:

- genau als eine IEEE-754 Doppelpräzisionszahl dargestellt werden kann, und
- dessen IEEE-754-Darstellung nicht das Ergebnis der Rundung eines anderen Integers ist, um zur IEEE-754-Darstellung zu passen.

Zum Beispiel ist 2<sup>53</sup> - 1 ein sicherer Integer: Er kann genau dargestellt werden, und kein anderer Integer wird unter einem IEEE-754-Rundungsmodus auf ihn gerundet. Im Gegensatz dazu ist 2<sup>53</sup> _kein_ sicherer Integer: Er kann genau in IEEE-754 dargestellt werden, aber der Integer 2<sup>53</sup> + 1 kann nicht direkt in IEEE-754 dargestellt werden, sondern wird stattdessen auf 2<sup>53</sup> unter Rundungen auf das Nächste und Null gerundet.

Das genaue Arbeiten mit Werten größer oder kleiner als ca. 9 Billiarden erfordert die Verwendung einer [Arbiträrpräzisions-Arithmetikbibliothek](https://de.wikipedia.org/wiki/Arbiträrpräzise_Arithmetik). Siehe [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) für weitere Informationen über Gleitpunktdarstellungen von Zahlen.

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
