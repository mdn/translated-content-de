---
title: Ungleichheit (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **Ungleichheit (`!=`)** prüft, ob seine beiden Operanden ungleich sind, und gibt ein boolesches Ergebnis zurück. Anders als der Operator für [strikte Ungleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality) versucht er, Operanden unterschiedlichen Typs zu konvertieren und zu vergleichen.

{{InteractiveExample("JavaScript Demo: Inequality (!=) operator")}}

```js interactive-example
console.log(1 != 1);
// Expected output: false

console.log("hello" != "hello");
// Expected output: false

console.log("1" != 1);
// Expected output: false

console.log(0 != false);
// Expected output: false
```

## Syntax

```js-nolint
x != y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 8 (Gleichheit).
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 9 (relationale Operatoren).

### Rückgabewert

`true`, wenn `x` und `y` gemäß der [losen Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#loose_equality_using) ungleich sind, andernfalls `false`.

## Beschreibung

Der Ungleichheitsoperator prüft, ob seine Operanden ungleich sind. Er ist die Negation des [Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Equality). Daher liefern die folgenden beiden Zeilen immer dasselbe Ergebnis:

```js
x != y;

!(x == y);
```

Einzelheiten zum Vergleichsalgorithmus finden Sie auf der Seite zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality).

Wie der Gleichheitsoperator versucht auch der Ungleichheitsoperator, Operanden unterschiedlichen Typs zu konvertieren und zu vergleichen:

```js
3 != "3"; // false
```

Wenn Sie dies verhindern und Operanden unterschiedlichen Typs stets als ungleich behandeln möchten, verwenden Sie stattdessen den Operator für [strikte Ungleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality):

```js
3 !== "3"; // true
```

## Beispiele

### Vergleich ohne Typumwandlung

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### Vergleich mit Typumwandlung

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, look at Logical NOT operator
0 != !!undefined; // false, look at Logical NOT operator
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### Vergleich von Objekten

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gleichheit (`==`)](/de/docs/Web/JavaScript/Reference/Operators/Equality)
- [Strikte Gleichheit (`===`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strikte Ungleichheit (`!==`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
