---
title: Dekrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Dekrement-Operator (`--`)** dekrementiert (subtrahiert eins von) seinem Operanden und gibt den Wert vor oder nach dem Dekrement zurück, je nachdem, wo der Operator platziert ist.

{{InteractiveExample("JavaScript Demo: Decrement (--) operator")}}

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

Der `--`-Operator ist überladen für zwei Arten von Operanden: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [wandelt er den Operanden in einen numerischen Wert um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet dessen Typ. Er führt einen BigInt-Dekrement durch, wenn der Operand zu einem BigInt wird; andernfalls wird ein Zahlen-Dekrement durchgeführt.

Wird der Operator als Postfix verwendet, also nach dem Operanden (zum Beispiel `x--`), dekrementiert der Dekrement-Operator und gibt den Wert vor dem Dekrementieren zurück.

Wird der Operator als Präfix verwendet, also vor dem Operanden (zum Beispiel `--x`), dekrementiert der Dekrement-Operator und gibt den Wert nach dem Dekrementieren zurück.

Der Dekrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d.h. gültige [Zuordnungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, daher können Sie keine mehreren Dekrement-Operatoren zusammenketten.

```js-nolint example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Dekrement

```js
let x = 3;
const y = x--;
// x is 2; y is 3

let x2 = 3n;
const y2 = x2--;
// x2 is 2n; y2 is 3n
```

### Präfix-Dekrement

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
