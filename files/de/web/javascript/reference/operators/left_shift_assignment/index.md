---
title: Linke Schiebezuweisung (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **linke Schiebezuweisungsoperator (`<<=`)** führt eine [Linksschiebung](/de/docs/Web/JavaScript/Reference/Operators/Left_shift) auf die beiden Operanden aus und weist das Ergebnis dem linken Operanden zu.

{{InteractiveExample("JavaScript Demo: Linke Schiebezuweisung (<<=) Operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntax

```js-nolint
x <<= y
```

## Beschreibung

`x <<= y` ist gleichbedeutend mit `x = x << y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Verwendung der linken Schiebezuweisung

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Linksschiebung (`<<`)](/de/docs/Web/JavaScript/Reference/Operators/Left_shift)
