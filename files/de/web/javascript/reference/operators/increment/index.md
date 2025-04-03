---
title: Increment (``++``)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Der **Inkrement-Operator (`++`)** erhöht (addiert eins zu) seinen Operanden und gibt den Wert vor oder nach der Erhöhung zurück, abhängig davon, wo der Operator platziert ist.

{{InteractiveExample("JavaScript Demo: Increment (++) operator")}}

```js interactive-example
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```

## Syntax

```js-nolint
x++
++x
```

## Beschreibung

Der `++` Operator ist für zwei Arten von Operanden überladen: Nummern und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zuerst [wandelt er den Operanden in einen numerischen Wert um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet den Typ davon. Er führt ein BigInt-Inkrement durch, wenn der Operand zu einem BigInt wird; andernfalls führt er ein Nummerninkrement durch.

Wird er als Postfix verwendet, mit Operator nach dem Operanden (zum Beispiel `x++`), inkrementiert der Inkrement-Operator und gibt den Wert vor der Erhöhung zurück.

Wird er als Präfix verwendet, mit Operator vor dem Operanden (zum Beispiel `++x`), inkrementiert der Inkrement-Operator und gibt den Wert nach der Erhöhung zurück.

Der Inkrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, sodass Sie keine mehreren Inkrement-Operatoren zusammenketten können.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Inkrement

```js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Präfix-Inkrement

```js
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
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
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
