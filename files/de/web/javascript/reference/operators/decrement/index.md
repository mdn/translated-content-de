---
title: Dekrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Der **Dekompositionsoperator (`--`)** dekrementiert (subtrahiert eins von) seinem Operanden und gibt den Wert entweder vor oder nach der Dekomposition zurück, abhängig davon, wo der Operator platziert ist.

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

Der `--` Operator ist für zwei Arten von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zunächst den Operanden zu einem numerischen Wert und prüft dessen Typ. Er führt eine BigInt-Dekomposition durch, wenn der Operand ein BigInt wird; ansonsten führt er eine numerische Dekomposition durch.

Wird der Operator als Postfix verwendet, also nach dem Operanden (zum Beispiel `x--`), dekrementiert der Operator und gibt den Wert vor der Dekomposition zurück.

Wird der Operator als Präfix verwendet, also vor dem Operanden (zum Beispiel `--x`), dekrementiert der Operator und gibt den Wert nach der Dekomposition zurück.

Der Dekrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, d.h. gültige [Zuordnungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, daher können Sie nicht mehrere Dekrement-Operatoren hintereinander verkettet verwenden.

```js-nolint example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Dekomposition

```js
let x = 3;
const y = x--;
// x is 2; y is 3

let x2 = 3n;
const y2 = x2--;
// x2 is 2n; y2 is 3n
```

### Präfix-Dekomposition

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
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
