---
title: Addition Assignment (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Addition Assignment (`+=`)**-Operator führt eine [Addition](/de/docs/Web/JavaScript/Reference/Operators/Addition) (entweder numerische Addition oder Zeichenfolgenverkettung) bei den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

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

`x += y` ist äquivalent zu `x = x + y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Addition Assignment mit Zahlen

```js
let bar = 5;
bar += 2; // 7
```

Andere Werte, die keine Zeichenfolgen oder BigInts sind, werden in Zahlen umgewandelt:

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

### Addition Assignment mit Zeichenfolgen

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
