---
title: Dekrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Dekrement-Operator (`--`)** verringert seinen Operanden um eins und gibt abhängig von seiner Position den Wert vor oder nach der Verringerung zurück.

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

### Parameter

- `x`
  - : Ein gültiges Zuweisungsziel, beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird in [eine Zahl oder einen BigInt-Wert](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) umgewandelt.

### Rückgabewert

Eine Zahl oder ein BigInt-Wert. Die Postfix-Form (`x--`) gibt den numerischen Wert vor der Verringerung zurück. Die Präfix-Form (`--x`) gibt den Wert nach der Verringerung zurück.

## Beschreibung

Der Operator `--` ist für zwei Operandentypen überladen: Zahlen und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [wandelt den Operanden zunächst in einen numerischen Wert um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft dessen Typ. Ist der resultierende Wert ein BigInt-Wert, führt er eine BigInt-Dekrementierung durch; andernfalls eine Dekrementierung einer Zahl.

In der Postfix-Form, bei der der Operator nach dem Operanden steht (beispielsweise `x--`), verringert der Dekrement-Operator den Operanden und gibt den Wert vor der Verringerung zurück.

In der Präfix-Form, bei der der Operator vor dem Operanden steht (beispielsweise `--x`), verringert der Dekrement-Operator den Operanden und gibt den Wert nach der Verringerung zurück.

Der Dekrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, also gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst ergibt einen Wert und keine Referenz. Daher können Sie nicht mehrere Dekrement-Operatoren hintereinander anwenden.

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
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
