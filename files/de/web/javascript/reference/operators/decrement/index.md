---
title: Decrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Decrement-Operator (`--`)** dekrementiert (zieht eins ab von) seinen Operand und gibt den Wert vor oder nach dem Dekrement zurück, je nachdem, wo der Operator platziert ist.

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

Der `--` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zuerst den Operanden zu einem numerischen Wert [zu werden](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet dann dessen Typ. Er führt ein BigInt-Dekrement durch, wenn der Operand ein BigInt wird; andernfalls führt er ein Zahldekrement durch.

Wird er postfix verwendet, mit Operator nach dem Operanden (zum Beispiel `x--`), dekrementiert der Operator und gibt den Wert vor dem Dekrement zurück.

Wird er präfix verwendet, mit Operator vor dem Operanden (zum Beispiel `--x`), dekrementiert der Operator und gibt den Wert nach dem Dekrement zurück.

Der Dekrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wertet zu einem Wert aus, nicht zu einer Referenz, weshalb Sie keine mehrfachen Dekrement-Operatoren miteinander verketten können.

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
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
