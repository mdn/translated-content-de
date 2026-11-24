---
title: Strikte Ungleichheit (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für **strikte Ungleichheit (`!==`)** prüft, ob seine beiden Operanden ungleich sind, und gibt einen booleschen Wert zurück. Anders als der [Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Inequality) betrachtet er Operanden unterschiedlichen Typs immer als ungleich.

{{InteractiveExample("JavaScript Demo: Strict inequality (!==) operator")}}

```js interactive-example
console.log(1 !== 1);
// Expected output: false

console.log("hello" !== "hello");
// Expected output: false

console.log("1" !== 1);
// Expected output: true

console.log(0 !== false);
// Expected output: true
```

## Syntax

```js-nolint
x !== y
```

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 8 (Gleichheit).
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 9 (relationale Operatoren).

### Rückgabewert

`true`, wenn `x` und `y` gemäß der [strikten Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) ungleich sind, andernfalls `false`.

## Beschreibung

Der Operator für strikte Ungleichheit prüft, ob seine Operanden ungleich sind. Er ist die Negation des [Operators für strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality). Daher liefern die folgenden beiden Zeilen immer dasselbe Ergebnis:

```js
x !== y;

!(x === y);
```

Einzelheiten zum Vergleichsalgorithmus finden Sie auf der Seite zum [Operator für strikte Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality).

Wie der Operator für strikte Gleichheit betrachtet auch der Operator für strikte Ungleichheit Operanden unterschiedlichen Typs immer als ungleich:

```js
3 !== "3"; // true
```

## Beispiele

### Operanden desselben Typs vergleichen

```js
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### Operanden unterschiedlichen Typs vergleichen

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### Objekte vergleichen

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gleichheit (`==`)](/de/docs/Web/JavaScript/Reference/Operators/Equality)
- [Ungleichheit (`!=`)](/de/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strikte Gleichheit (`===`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)
