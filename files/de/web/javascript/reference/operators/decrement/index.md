---
title: Decrement (--)"
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Decrement-Operator (`--`)** verringert (zieht eins ab) seinen Operanden und gibt den Wert vor oder nach dem Verringern zurück, abhängig davon, wo der Operator platziert ist.

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## Syntax

```js-nolint
x--
--x
```

## Beschreibung

Der `--`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [erzwingt zuerst die Umwandlung des Operanden in einen numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet dessen Typ. Er führt eine BigInt-Verringerung durch, wenn der Operand zu einem BigInt wird; andernfalls führt er eine Zahl-Verringerung durch.

Wird er postfix verwendet, mit dem Operator nach dem Operanden (zum Beispiel `x--`), verringert der Decrement-Operator und gibt den Wert vor dem Verringern zurück.

Wird er prefix verwendet, mit dem Operator vor dem Operanden (zum Beispiel `--x`), verringert der Decrement-Operator und gibt den Wert nach dem Verringern zurück.

Der Decrement-Operator kann nur auf Operanden angewendet werden, die Verweise sind (Variablen und Objekteigenschaften; d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einem Verweis, daher können Sie keine mehrfachen Decrement-Operatoren miteinander verketten.

```js-nolint example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Decrement

```js
let x = 3;
const y = x--;
// x is 2; y is 3

let x2 = 3n;
const y2 = x2--;
// x2 is 2n; y2 is 3n
```

### Prefix-Decrement

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
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
