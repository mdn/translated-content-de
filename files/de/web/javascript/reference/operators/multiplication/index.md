---
title: Multiplikation (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Multiplikations-Operator (`*`)** erzeugt das Produkt der Operanden.

{{InteractiveExample("JavaScript Demo: Expressions - Multiplication operator")}}

```js interactive-example
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log("3" * 2);
// Expected output: 6

console.log("foo" * 2);
// Expected output: NaN
```

## Syntax

```js-nolint
x * y
```

## Beschreibung

Der Operator `*` ist für zwei Arten von Operanden überladen: `number` und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [werden beide Operanden zu numerischen Werten umgewandelt](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und ihre Typen getestet. Er führt eine Multiplikation von BigInt aus, wenn beide Operanden BigInts werden; andernfalls wird eine Multiplikation von Zahlen durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

## Beispiele

### Multiplikation mit Zahlen

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

Andere Nicht-BigInt-Werte werden in Zahlen umgewandelt:

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplikation mit BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

Es ist nicht möglich, BigInt- und Zahl-Operanden bei der Multiplikation zu mischen.

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Multiplikation mit einem BigInt und einem Nicht-BigInt auszuführen, konvertieren Sie einen der Operanden:

```js
2n * BigInt(2); // 4n
Number(2n) * 2; // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negativ (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary positiv (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
