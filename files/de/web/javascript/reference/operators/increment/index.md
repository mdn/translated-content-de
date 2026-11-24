---
title: Inkrement (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Inkrementoperator (`++`)** erhöht seinen Operanden um eins und gibt je nach Position des Operators den Wert vor oder nach der Erhöhung zurück.

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

### Parameter

- `x`
  - : Ein gültiges [Zuweisungsziel](/de/docs/Web/JavaScript/Reference/Operators/Assignment), beispielsweise ein [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) oder ein [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Sein aktueller Wert wird [in eine Number oder einen BigInt umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion).

### Rückgabewert

Eine Number oder ein BigInt. Die Postfixform (`x++`) gibt den numerischen Wert vor der Erhöhung zurück. Die Präfixform (`++x`) gibt den Wert nach der Erhöhung zurück.

## Beschreibung

Der Operator `++` ist für zwei Operandentypen überladen: Number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Zunächst [wandelt er den Operanden in einen numerischen Wert um](/de/docs/Web/JavaScript/Guide/Data_structures#numeric_coercion) und prüft dessen Typ. Ist der umgewandelte Operand ein BigInt, führt er eine BigInt-Inkrementierung aus; andernfalls eine Number-Inkrementierung.

In der Postfixform steht der Operator hinter dem Operanden (beispielsweise `x++`). Der Inkrementoperator erhöht den Wert und gibt den Wert vor der Erhöhung zurück.

In der Präfixform steht der Operator vor dem Operanden (beispielsweise `++x`). Der Inkrementoperator erhöht den Wert und gibt den Wert nach der Erhöhung zurück.

Der Inkrementoperator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, also gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst ergibt einen Wert und keine Referenz. Deshalb können Sie nicht mehrere Inkrementoperatoren hintereinander anwenden.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Inkrementierung

```js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Präfix-Inkrementierung

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
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Potenzierung (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
