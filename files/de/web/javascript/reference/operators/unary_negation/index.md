---
title: Unäre Negation (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **unäre Negationsoperator (`-`)** steht vor seinem Operanden und negiert ihn.

{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}

## Syntax

```js-nolint
-x
```

## Beschreibung

Der `-` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zunächst [den Operanden zu einem numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet den Typ davon. Er führt eine BigInt-Negation durch, wenn der Operand zu einem BigInt wird; andernfalls führt er eine Zahlen-Negation durch.

## Beispiele

### Negation von Zahlen

```js
const x = 3;
const y = -x;
// y ist -3; x ist 3
```

### Negation von Nicht-Zahlen

Der unäre Negationsoperator kann eine Nicht-Zahl in eine Zahl konvertieren.

```js
const x = "4";
const y = -x;

// y ist -4
```

BigInts können mit dem unären Negationsoperator negiert werden.

```js
const x = 4n;
const y = -x;

// y ist -4n
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
- [Exponentialrechnung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
