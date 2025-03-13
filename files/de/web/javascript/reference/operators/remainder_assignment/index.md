---
title: Restzuweisung (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Restzuweisungsoperator (`%=`)** führt die [Restoperation](/de/docs/Web/JavaScript/Reference/Operators/Remainder) auf den beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Restzuweisungsoperator (%=)")}}

```js interactive-example
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## Syntax

```js-nolint
x %= y
```

## Beschreibung

`x %= y` ist gleichbedeutend mit `x = x % y`, mit dem Unterschied, dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der Restzuweisung

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
