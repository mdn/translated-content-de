---
title: Subtraktion (-)
slug: Web/JavaScript/Reference/Operators/Subtraction
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Subtraktionsoperator (`-`)** zieht den zweiten Operanden vom ersten ab und liefert deren Unterschied.

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction operator")}}

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

Der `-`-Operator ist für zwei Arten von Operanden überladen: `number` und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [wandelt er beide Operanden in numerische Werte um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft ihre Typen. Wenn beide Operanden zu `BigInt` werden, führt er eine BigInt-Subtraktion aus; ansonsten erfolgt eine Subtraktion auf Basis von Zahlen. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn ein Operand zu einem `BigInt` umgewandelt wird, der andere jedoch eine Zahl ist.

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

BigInt- und Zahl-Operanden können bei der Subtraktion nicht gemischt werden.

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
