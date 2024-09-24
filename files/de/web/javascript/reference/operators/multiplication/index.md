---
title: Multiplikation (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Multiplikationsoperator (`*`)** erzeugt das Produkt der Operanden.

{{EmbedInteractiveExample("pages/js/expressions-multiplication.html")}}

## Syntax

```js-nolint
x * y
```

## Beschreibung

Der `*` Operator ist für zwei Typen von Operanden überladen: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zunächst beide Operanden in numerische Werte](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Multiplikation durch, wenn beide Operanden zu BigInts werden; andernfalls wird eine Zahl-Multiplikation durchgeführt. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

## Beispiele

### Multiplikation mit Zahlen

```js
2 * 2; // 4
-2 * 2; // -4

Infinity * 0; // NaN
Infinity * Infinity; // Infinity
```

Andere Nicht-BigInt-Werte werden in Zahlen konvertiert:

```js
"foo" * 2; // NaN
"2" * 2; // 4
```

### Multiplikation mit BigInts

```js
2n * 2n; // 4n
-2n * 2n; // -4n
```

Sie können BigInt und Zahl-Operanden bei der Multiplikation nicht mischen.

```js example-bad
2n * 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 * 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Um eine Multiplikation mit einem BigInt und einem Nicht-BigInt durchzuführen, konvertieren Sie einen der Operanden:

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
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
