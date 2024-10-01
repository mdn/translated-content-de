---
title: Exponentiation-Zuweisung (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

Der **Exponentiation-Zuweisungsoperator (`**=`)\*\* führt die [Exponentiation](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation) an den beiden Operanden durch und weist das Ergebnis dem linken Operanden zu.

{{EmbedInteractiveExample("pages/js/expressions-exponentiation-assignment.html")}}

## Syntax

```js-nolint
x **= y
```

## Beschreibung

`x **= y` ist äquivalent zu `x = x ** y`, außer dass der Ausdruck `x` nur einmal ausgewertet wird.

## Beispiele

### Exponentiation-Zuweisung mit Zahlen

```js
let bar = 5;
bar **= 2; // 25
```

Andere Werte, die keine BigInts sind, werden in Zahlen umgewandelt:

```js
let baz = 5;
baz **= "foo"; // NaN
```

### Exponentiation-Zuweisung mit BigInts

```js
let foo = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zuweisungsoperatoren im JS-Leitfaden](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
