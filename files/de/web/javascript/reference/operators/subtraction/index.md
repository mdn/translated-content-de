---
title: Subtraction (-)
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

Der `-` Operator ist für zwei Operanden-Arten überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt beide Operanden zuerst in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft deren Typen. Er führt eine BigInt-Subtraktion durch, wenn beide Operanden zu BigInts werden; andernfalls führt er eine Zahlensubtraktion durch. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem BigInt wird, aber der andere zu einer Zahl.

## Beispiele

### Subtraktion mit Zahlen

```js
5 - 3; // 2
3 - 5; // -2
```

Andere Nicht-BigInt-Werte werden zu Zahlen umgewandelt:

```js
"foo" - 3; // NaN; "foo" is converted to the number NaN
5 - "3"; // 2; "3" is converted to the number 3
```

### Subtraktion mit BigInts

```js
2n - 1n; // 1n
```

Sie können BigInt- und Zahlen-Operanden in der Subtraktion nicht mischen.

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
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
