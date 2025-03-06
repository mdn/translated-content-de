---
title: Dekrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **Dekrement (`--`)** Operator dekrementiert (subtrahiert eins von) seinem Operanden und gibt je nach Platzierung des Operators den Wert vor oder nach der Dekrementierung zurück.

{{InteractiveExample("JavaScript Demo: Expressions - Decrement operator")}}

```js interactive-example
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"
```

## Syntax

```js-nolint
x--
--x
```

## Beschreibung

Der `--` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [erzwingt er die Umwandlung des Operanden in einen numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und überprüft dessen Typ. Er führt eine BigInt-Dekrementierung durch, wenn der Operand zu einem BigInt wird; andernfalls führt er eine Zahlendekrementierung durch.

Wird er als Postfix verwendet, also mit Operator nach dem Operanden (zum Beispiel `x--`), dekrementiert der Dekrementoperator und gibt den Wert vor der Dekrementierung zurück.

Wird er als Präfix verwendet, also mit Operator vor dem Operanden (zum Beispiel `--x`), dekrementiert der Dekrementoperator und gibt den Wert nach der Dekrementierung zurück.

Der Dekrementoperator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, sodass Sie nicht mehrere Dekrementoperatoren hintereinander verwenden können.

```js-nolint example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix Dekrement

```js
let x = 3;
const y = x--;
// x is 2; y is 3

let x2 = 3n;
const y2 = x2--;
// x2 is 2n; y2 is 3n
```

### Präfix Dekrement

```js
let x = 3;
const y = --x;
// x is 2; y = 2

let x2 = 3n;
const y2 = --x2;
// x2 is 2n; y2 is 2n
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
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
