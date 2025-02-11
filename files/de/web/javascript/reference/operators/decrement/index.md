---
title: Decrement (--)
slug: Web/JavaScript/Reference/Operators/Decrement
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Dekrement (`--`)**-Operator dekrementiert (subtrahiert eins von) seinem Operanden und gibt den Wert vor oder nach dem Dekrement zurück, abhängig davon, wo der Operator platziert ist.

{{InteractiveExample("JavaScript Demo: Expressions - Decrement operator")}}

```js interactive-example
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"
```

## Syntax

```js-nolint
x--
--x
```

## Beschreibung

Der `--`-Operator ist für zwei Arten von Operanden überladen: Zahl und [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt). Er [zwingt den Operanden zuerst in einen numerischen Wert um](/de/docs/Web/JavaScript/Data_structures#numeric_coercion) und prüft dann dessen Typ. Wenn der Operand zu einem BigInt wird, führt er die BigInt-Dekrementierung aus; ansonsten führt er die Dekrementierung für Zahlen durch.

Wenn der Operator als Postfix verwendet wird, also hinter dem Operanden (z. B. `x--`), dekrementiert der Operator und gibt den Wert vor dem Dekrementieren zurück.

Wenn der Operator als Präfix verwendet wird, also vor dem Operanden (z. B. `--x`), dekrementiert er und gibt den Wert nach dem Dekrementieren zurück.

Der Dekrement-Operator kann nur auf Operanden angewendet werden, die Referenzen sind (Variablen und Objekteigenschaften, d. h. gültige [Zuweisungsziele](/de/docs/Web/JavaScript/Reference/Operators/Assignment)). `--x` selbst wird zu einem Wert ausgewertet, nicht zu einer Referenz, sodass Sie keine Verkettung mehrerer Dekrement-Operatoren durchführen können.

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
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Inkrement (`++`)](/de/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unäres Minus (`-`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unäres Plus (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus)
