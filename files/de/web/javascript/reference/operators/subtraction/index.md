---
title: Subtraktion (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Subtraktionsoperator (`-`)** subtrahiert die beiden Operanden und ergibt ihre Differenz.

{{InteractiveExample("JavaScript Demo: Subtraction (-) operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## Syntax

```js-nolint
x - y
```

## Beschreibung

Der `-` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zuerst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet deren Typen. Er führt eine BigInt-Subtraktion durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahlen-Subtraktion durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

## Beispiele

### Subtraktion mit Zahlen

```js
5 - 3; // 2
3 - 5; // -2
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraktion mit BigInts

```js
2n - 1n; // 1n
```

Sie können BigInt- und Zahl-Operanden bei der Subtraktion nicht mischen.

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Subtraktion mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

```js
2n - BigInt(1); // 1n
Number(2n) - 1; // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
