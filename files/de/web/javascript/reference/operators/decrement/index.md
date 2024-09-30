---
title: Decrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Dekrementoperator (`--`)** dekrementiert (subtrahiert eins von) seinem Operanden und gibt den Wert vor oder nach dem Dekrement zurück, abhängig davon, wo der Operator platziert ist.

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## Syntax

```js-nolint
x--
--x
```

## Beschreibung

Der `--` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zuerst den Operanden zu einem numerischen Wert [um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet den Typ davon. Er führt ein BigInt-Dekrement aus, wenn der Operand ein BigInt wird; andernfalls führt er ein Zahlen-Dekrement aus.

Wird er nach dem Operanden verwendet (postfix, z.B. `x--`), dekrementiert der Dekrementoperator und gibt den Wert vor dem Dekrementieren zurück.

Wird er vor dem Operanden verwendet (präfix, z.B. `--x`), dekrementiert der Dekrementoperator und gibt den Wert nach dem Dekrementieren zurück.

Der Dekrementoperator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, also gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, daher können Sie nicht mehrere Dekrementoperatoren aneinander ketten.

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
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentialoperator (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
