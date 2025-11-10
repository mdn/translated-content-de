---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Divisionsoperator (`/`)** erzeugt den Quotienten seiner Operanden, wobei der linke Operand der Dividend und der rechte Operand der Divisor ist.

{{InteractiveExample("JavaScript Demo: Division (/) operator")}}

```js interactive-example
console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / "3");
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity
```

## Syntax

```js-nolint
x / y
```

## Beschreibung

Der `/`-Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zuerst [beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Division durch, wenn beide Operanden BigInts werden; andernfalls führt er eine number-Division durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand ein BigInt wird, aber der andere eine Zahl wird.

Für BigInt-Division ist das Ergebnis der Quotient der beiden Operanden, der Richtung Null gekürzt wird, und der Rest wird verworfen. Ein {{jsxref("RangeError")}} wird ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass die Division von Zahlen durch null `Infinity` oder `-Infinity` zurückgibt, BigInt jedoch kein Konzept von Unendlichkeit hat.

## Beispiele

### Division mit Zahlen

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
5 / "2"; // 2.5
5 / "foo"; // NaN
```

### Division mit BigInts

```js
1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n

2n / 0n; // RangeError: BigInt division by zero
```

Sie können BigInt- und Zahlenoperanden bei der Division nicht mischen.

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um die Division mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

```js
2n / BigInt(2); // 1n
Number(2n) / 2; // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
