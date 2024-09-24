---
title: Dekrement (-- )
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Dekrementoperator (`--`)** verringert seinen Operanden um eins und gibt den Wert vor oder nach dem Dekrement zurück, abhängig davon, wo der Operator platziert ist.

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## Syntax

```js-nolint
x--
--x
```

## Beschreibung

Der `--`-Operator ist für zwei Typen von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt den Operanden zuerst in einen numerischen Wert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft dann seinen Typ. Er führt eine BigInt-Dekrementierung durch, wenn der Operand zu einem BigInt wird; andernfalls wird eine Zahlendekrementierung durchgeführt.

Wird er postfix, d.h. mit dem Operator nach dem Operanden (zum Beispiel `x--`), verwendet, dekrementiert der Operator und gibt den Wert vor dem Dekrementieren zurück.

Wird er präfix, d.h. mit dem Operator vor dem Operanden (zum Beispiel `--x`), verwendet, dekrementiert der Operator und gibt den Wert nach dem Dekrementieren zurück.

Der Dekrementoperator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, daher können Sie nicht mehrere Dekrementoperatoren aneinanderreihen.

```js-nolint example-bad
--(--x); // SyntaxError: Ungültiger Ausdruck auf der linken Seite in der Präfixoperation
```

## Beispiele

### Postfix-Dekrement

```js
let x = 3;
const y = x--;
// x ist 2; y ist 3

let x2 = 3n;
const y2 = x2--;
// x2 ist 2n; y2 ist 3n
```

### Präfix-Dekrement

```js
let x = 3;
const y = --x;
// x ist 2; y = 2

let x2 = 3n;
const y2 = --x2;
// x2 ist 2n; y2 ist 2n
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
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
