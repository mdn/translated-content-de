---
title: Unäres Minus (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **unäre Minus-Operator (`-`)** steht vor seinem Operanden und negiert ihn.

{{InteractiveExample("JavaScript Demo: Unäres Minus (-) Operator")}}

```js interactive-example
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4
```

## Syntax

```js-nolint
-x
```

## Beschreibung

Der `-` Operator ist für zwei Arten von Operanden überladen: Nummern und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er erzwingt zuerst, [dass der Operand in einen numerischen Wert umgewandelt wird](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft dann dessen Typ. Wenn der Operand zu einem BigInt wird, führt er die BigInt-Negation durch; andernfalls führt er die Negation einer Zahl durch.

## Beispiele

### Zahlen negieren

```js
const x = 3;
const y = -x;
// y is -3; x is 3
```

### Nicht-Zahlen negieren

Der unäre Minus-Operator kann eine Nicht-Zahl in eine Zahl umwandeln.

```js
const x = "4";
const y = -x;

// y is -4
```

BigInts können mit dem unären Minus-Operator negiert werden.

```js
const x = 4n;
const y = -x;

// y is -4n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraktion (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplikation (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
