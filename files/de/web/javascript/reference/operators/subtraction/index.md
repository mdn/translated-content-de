---
title: Subtraktion (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Subtraktionsoperator (`-`)** subtrahiert die beiden Operanden, wodurch deren Differenz entsteht.

{{EmbedInteractiveExample("pages/js/expressions-subtraction.html")}}

## Syntax

```js-nolint
x - y
```

## Beschreibung

Der `-` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zuerst beide Operanden zu numerischen Werten](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft deren Typen. Er führt eine BigInt-Subtraktion durch, wenn beide Operanden zu BigInts werden; andernfalls wird eine Zahlensubtraktion durchgeführt. Ein {{jsxref("TypeError")}} wird geworfen, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

## Beispiele

### Subtraktion mit Zahlen

```js
5 - 3; // 2
3 - 5; // -2
```

Andere, nicht-BigInt-Werte, werden in Zahlen umgewandelt:

```js
"foo" - 3; // NaN; "foo" wird in die Zahl NaN umgewandelt
5 - "3"; // 2; "3" wird in die Zahl 3 umgewandelt
```

### Subtraktion mit BigInts

```js
2n - 1n; // 1n
```

Sie können in der Subtraktion keine BigInt- und Zahlen-Operanden mischen.

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
- [Inkrementierung (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrementierung (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
