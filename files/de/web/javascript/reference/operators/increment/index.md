---
title: Inkrementieren (++)
slug: Web/JavaScript/Reference/Operators/Increment
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Inkrement-Operator (`++`)** erhöht seinen Operanden um eins und gibt den Wert entweder vor oder nach der Erhöhung zurück, abhängig davon, wo der Operator platziert wird.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js-nolint
x++
++x
```

## Beschreibung

Der `++` Operator ist überladen für zwei Arten von Operanden: number und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er wandelt zuerst den Operanden in einen numerischen Wert um und prüft den Typ. Er führt eine BigInt-Erhöhung durch, wenn der Operand zu einem BigInt wird; andernfalls erfolgt eine numerische Erhöhung.

Wenn der Operator postfix verwendet wird, also nach dem Operanden (beispielsweise `x++`), erhöht der Inkrement-Operator und gibt den Wert vor der Erhöhung zurück.

Wenn der Operator prefix verwendet wird, also vor dem Operanden (beispielsweise `++x`), erhöht der Inkrement-Operator und gibt den Wert nach der Erhöhung zurück.

Der Inkrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, d.h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `++x` selbst wertet auf einen Wert aus, nicht auf eine Referenz, sodass Sie keine mehreren Inkrement-Operatoren hintereinander verketten können.

```js-nolint example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Beispiele

### Postfix-Inkrement

```js
let x = 3;
const y = x++;
// x ist 4; y ist 3

let x2 = 3n;
const y2 = x2++;
// x2 ist 4n; y2 ist 3n
```

### Prefix-Inkrement

```js
let x = 3;
const y = ++x;
// x ist 4; y ist 4

let x2 = 3n;
const y2 = ++x2;
// x2 ist 4n; y2 ist 4n
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
- [Restwert (`%`)](/de/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Dekrementieren (`--`)](/de/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
