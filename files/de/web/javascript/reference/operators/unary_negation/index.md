---
title: Unary-Negation (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Unary-Negation-Operator (`-`)** steht vor seinem Operanden und negiert diesen.

{{InteractiveExample("JavaScript Demo: Expressions - Unary negation operator")}}

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

Der `-` Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt den Operanden zunächst zu einem numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft dessen Typ. Wenn der Operand zu einem BigInt wird, wird die BigInt-Negation durchgeführt; andernfalls erfolgt die Zahlen-Negation.

## Beispiele

### Zahlen negieren

```js
const x = 3;
const y = -x;
// y is -3; x is 3
```

### Nicht-Zahlen negieren

Der Unary-Negation-Operator kann eine Nicht-Zahl in eine Zahl umwandeln.

```js
const x = "4";
const y = -x;

// y is -4
```

BigInts können mit dem Unary-Negation-Operator negiert werden.

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
- [Unary-Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
