---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Inkrement-Operator (`++`)** erhöht seinen Operanden um eins und gibt den Wert vor oder nach dem Inkrement zurück, je nachdem, wo der Operator platziert ist.

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

Der `++`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er wandelt den Operanden zunächst in einen numerischen Wert um und überprüft dessen Typ. Er führt ein BigInt-Inkrement durch, wenn der Operand zu einem BigInt wird; andernfalls führt er ein Nummerninkrement durch.

Wird er postfix verwendet, also mit dem Operator nach dem Operanden (zum Beispiel `x++`), erhöht der Inkrement-Operator und gibt den Wert vor dem Inkrement zurück.

Wird er präfix verwendet, also mit dem Operator vor dem Operanden (zum Beispiel `++x`), erhöht der Inkrement-Operator und gibt den Wert nach dem Inkrement zurück.

Der Inkrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, sodass Sie keine mehreren Inkrement-Operatoren zusammenketten können.

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
- [Exponenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
