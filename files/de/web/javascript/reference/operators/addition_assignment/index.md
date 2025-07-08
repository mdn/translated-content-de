---
title: Addition Assignment (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Addition Assignment (`+=`)** Operator führt [Addition](/de/docs/Web/JavaScript/Reference/Operators/Addition) durch (entweder numerische Addition oder String-Konkatenation) auf den zwei Operanden und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Addition Assignment (+=) Operator")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Syntax

```js-nolint
x += y
```

## Beschreibung

`x += y` ist gleichwertig mit `x = x + y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Addition Assignment mit Zahlen

```js
let bar = 5;
bar += 2; // 7
```

Andere nicht-String, nicht-BigInt-Werte werden zu Zahlen konvertiert:

```js
let baz = true;
baz += 1; // 2
baz += false; // 2
```

### Addition Assignment mit BigInts

```js
let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

### Addition Assignment mit Strings

```js
let foo = "foo";
foo += false; // "foofalse"
foo += "bar"; // "foofalsebar"

let bar = 5;
bar += "foo"; // "5foo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
