---
title: Unäres Minus (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **unäre Negationsoperator (`-`)** steht vor seinem Operanden und negiert diesen.

{{InteractiveExample("JavaScript Demo: Unarer Negationsoperator (-)")}}

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

Der `-` Operator ist für zwei Typen von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [erzwingt zunächst die Konvertierung des Operanden in einen numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft den Typ davon. Er führt eine BigInt-Negation durch, wenn der Operand zu einem BigInt wird; andernfalls führt er eine Nummer-Negation durch.

## Beispiele

### Negierung von Zahlen

```js
const x = 3;
const y = -x;
// y is -3; x is 3
```

### Negierung von Nicht-Zahlen

Der unäre Negationsoperator kann eine Nicht-Zahl in eine Zahl umwandeln.

```js
const x = "4";
const y = -x;

// y is -4
```

BigInts können durch den unären Negationsoperator negiert werden.

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
