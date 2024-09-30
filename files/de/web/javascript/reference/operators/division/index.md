---
title: Division (/)
slug: Web/JavaScript/Reference/Operators/Division
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Divisionsoperator (`/`)** liefert den Quotienten seiner Operanden, wobei der linke Operand der Dividend und der rechte Operand der Divisor ist.

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## Syntax

```js-nolint
x / y
```

## Beschreibung

Der `/` Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er folgt der [Konvertierung beider Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Es wird eine BigInt-Division durchgeführt, wenn beide Operanden BigInts werden; andernfalls wird eine Zahlendivision durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

Bei der BigInt-Division ist das Ergebnis der Quotient der beiden Operanden, abgerundet in Richtung Null, und der Rest wird verworfen. Ein {{jsxref("RangeError")}} wird ausgelöst, wenn der Divisor `y` `0n` ist. Dies liegt daran, dass die Division von Zahlen durch Null `Infinity` oder `-Infinity` ergibt, BigInt jedoch kein Konzept von Unendlichkeit hat.

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

Andere nicht-BigInt-Werte werden in Zahlen umgewandelt:

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

Man kann BigInt- und Zahlenoperanden in der Division nicht mischen.

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
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
