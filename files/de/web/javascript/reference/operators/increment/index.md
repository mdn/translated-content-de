---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Increment (`++`)** Operator erhöht seinen Operanden um eins und gibt den Wert vor oder nach der Erhöhung zurück, abhängig davon, wo der Operator platziert wird.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js-nolint
x++
++x
```

## Beschreibung

Der `++` Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt den Operanden zunächst zu einem numerischen Wert und testet dessen Typ. Er führt eine BigInt-Erhöhung durch, wenn der Operand zu einem BigInt wird; andernfalls führt er eine Zahlenerhöhung durch.

Wird er postfix verwendet, also mit dem Operator nach dem Operanden (zum Beispiel `x++`), erhöht der Inkrementoperator und gibt den Wert vor der Erhöhung zurück.

Wird er als Präfix verwendet, also mit dem Operator vor dem Operanden (zum Beispiel `++x`), erhöht der Inkrementoperator und gibt den Wert nach der Erhöhung zurück.

Der Inkrementoperator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d.h. gültige [Zuordnungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, daher können Sie nicht mehrere Inkrementoperatoren hintereinander ketten.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Inkrement

```js
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Präfix-Inkrement

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
- [Rest (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
