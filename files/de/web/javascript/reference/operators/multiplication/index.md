---
title: Multiplication (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Multiplikationsoperator (`*`)** gibt das Produkt der Operanden zurück.

{{EmbedInteractiveExample("pages/js/expressions-multiplication.html")}}

## Syntax

```js-nolint
x * y
```

## Beschreibung

Der `*` Operator ist für zwei Typen von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt beide Operanden zunächst zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet dann deren Typen. Er führt eine BigInt-Multiplikation durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahlenmultiplikation durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

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

Sie können BigInt- und Zahlen-Operanden bei der Multiplikation nicht mischen.

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Multiplikation mit einem BigInt und einem Nicht-BigInt durchzuführen, wandeln Sie einen der Operanden um:

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
- [Inkrementierung (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrementierung (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
