---
title: Addition Assignment (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Addition Assignment (`+=`)** Operator führt eine [Addition](/de/docs/Web/JavaScript/Reference/Operators/Addition) durch (entweder numerische Addition oder Zeichenfolgenverkettung) auf den beiden Operanden und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

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

Andere Nicht-Zeichenfolgen- und Nicht-BigInt-Werte werden in Zahlen umgewandelt:

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
