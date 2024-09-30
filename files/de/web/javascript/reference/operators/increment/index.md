---
title: Increment (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Inkrementoperator (`++`)** erhöht (addiert eins zu) seinen Operanden und gibt den Wert vor oder nach der Erhöhung zurück, abhängig davon, wo der Operator platziert ist.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js-nolint
x++
++x
```

## Beschreibung

Der `++` Operator ist für zwei Arten von Operanden überladen: Nummer und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er zwingt zunächst den Operanden zu einem numerischen Wert [koerciert](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und testet den Typ. Bei einem BigInt wird ein BigInt-Inkrement durchgeführt; andernfalls wird ein Nummer-Inkrement durchgeführt.

Wird er postfix verwendet, mit dem Operator nach dem Operanden (zum Beispiel `x++`), erhöht der Inkrementoperator den Operanden und gibt den Wert vor der Erhöhung zurück.

Wird er prefix verwendet, mit dem Operator vor dem Operanden (zum Beispiel `++x`), erhöht der Inkrementoperator den Operanden und gibt den Wert nach der Erhöhung zurück.

Der Inkrementoperator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften; d. h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, daher können Sie keine mehreren Inkrementoperatoren zusammen verketten.

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
- [Dekrement (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäre Negation (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
