---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Increment-Operator (`++`)** erhöht (addiert eins zu) seinen Operand und gibt den Wert vor oder nach der Erhöhung zurück, abhängig davon, wo der Operator platziert ist.

{{InteractiveExample("JavaScript Demo: Expressions - Increment operator")}}

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

Der `++`-Operator ist für zwei Typen von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt zuerst den Operand in einen numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und überprüft den Typ davon. Falls der Operand zu einem BigInt wird, führt er eine BigInt-Erhöhung durch; andernfalls führt er eine numerische Erhöhung durch.

Wenn er postfix verwendet wird, mit dem Operator nach dem Operanden (zum Beispiel `x++`), erhöht der Increment-Operator und gibt den Wert vor der Erhöhung zurück.

Wenn er prefix verwendet wird, mit dem Operator vor dem Operanden (zum Beispiel `++x`), erhöht der Increment-Operator und gibt den Wert nach der Erhöhung zurück.

Der Increment-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d. h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, sodass Sie mehrere Increment-Operatoren nicht miteinander verkettet verwenden können.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Incremente

```js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Prefix-Incremente

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
- [Subtraction (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division (`/`)](/de/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication (`*`)](/de/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
