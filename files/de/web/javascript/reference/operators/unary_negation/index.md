---
title: Unäre Negation (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für die **unäre Negation (`-`)** steht vor seinem Operanden und negiert ihn.

{{InteractiveExample("JavaScript Demo: Unary negation (-) operator")}}

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 14 (Präfixoperatoren) oder höher. Sein Wert wird [in eine Number oder einen BigInt umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Rückgabewert

Eine Number oder ein BigInt, die bzw. der den negierten numerischen Wert von `x` darstellt.

## Beschreibung

Der Operator `-` ist für zwei Operandentypen überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt den Operanden zunächst in einen numerischen Wert um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft dessen Typ. Wird der Operand zu einem BigInt, führt der Operator eine BigInt-Negation durch; andernfalls eine Number-Negation.

## Beispiele

### Zahlen negieren

```js
const x = 3;
const y = -x;
// y is -3; x is 3
```

### Andere Werte als Zahlen negieren

Der Operator für die unäre Negation kann einen Wert, der keine Zahl ist, in eine Zahl umwandeln.

```js
const x = "4";
const y = -x;

// y is -4
```

Auch BigInts können mit dem Operator für die unäre Negation negiert werden.

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
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
