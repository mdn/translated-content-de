---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Divisionsoperator (`/`)** erzeugt den Quotienten seiner Operanden, wobei der linke Operand der Dividend und der rechte Operand der Divisor ist.

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## Syntax

```js-nolint
x / y
```

## Beschreibung

Der `/`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er erzwingt zunächst die Konvertierung beider Operanden in numerische Werte und überprüft deren Typen. Er führt eine BigInt-Division durch, wenn beide Operanden BigInts werden; andernfalls führt er eine Zahlendivision durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch eine Zahl bleibt.

Für die BigInt-Division ist das Ergebnis der Quotient der beiden Operanden, der in Richtung Null gekürzt wird, und der Rest wird verworfen. Ein {{jsxref("RangeError")}} wird ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass die Division von Zahlen durch null `Infinity` oder `-Infinity` zurückgibt, aber BigInt kein Konzept von Unendlichkeit hat.

## Beispiele

### Division mit Zahlen

```js
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, weil 0.0 === 0
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

Sie können BigInt- und Zahl-Operanden nicht in der Division mischen.

```js example-bad
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Division mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

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
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
