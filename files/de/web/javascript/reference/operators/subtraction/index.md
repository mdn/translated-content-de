---
title: Subtraktion (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Subtraktionsoperator (`-`)** subtrahiert die beiden Operanden und erzeugt deren Differenz.

{{EmbedInteractiveExample("pages/js/expressions-subtraction.html")}}

## Syntax

```js-nolint
x - y
```

## Beschreibung

Der `-`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Subtraktion durch, wenn beide Operanden BigInts werden; andernfalls führt er eine Zahlensubtraktion durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, der andere jedoch zu einer Zahl.

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
- [Unary negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
