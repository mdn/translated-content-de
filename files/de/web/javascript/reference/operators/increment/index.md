---
title: "Inkrementieren (++) "
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Inkrement-Operator (`++`)** erhöht (addiert eins zu) seinen Operanden und gibt den Wert vor oder nach der Inkrementierung zurück, abhängig davon, wo der Operator platziert ist.

{{InteractiveExample("JavaScript Demo: Inkrement (++) Operator")}}

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

Der `++` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt den Operanden zuerst zu einem numerischen Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und testet dessen Typ. Er führt eine BigInt-Inkrementierung durch, wenn der Operand zu einem BigInt wird; andernfalls erfolgt eine Zahlen-Inkrementierung.

Wenn der Operator postfix, mit dem Operator nach dem Operanden (zum Beispiel `x++`), verwendet wird, erhöht der Inkrement-Operator und gibt den Wert vor der Erhöhung zurück.

Wenn der Operator prefix, mit dem Operator vor dem Operanden (zum Beispiel `++x`), verwendet wird, erhöht der Inkrement-Operator und gibt den Wert nach der Erhöhung zurück.

Der Inkrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wertet zu einem Wert aus, nicht zu einer Referenz, daher können Sie keine multiplen Inkrement-Operatoren hintereinander verketten.

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
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Dekrementieren (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
