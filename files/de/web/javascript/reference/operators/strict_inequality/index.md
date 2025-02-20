---
title: Strikte Ungleichheit (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **strikte Ungleichheitsoperator (`!==`)** überprüft, ob seine beiden Operanden
nicht gleich sind, und gibt ein Boolean-Ergebnis zurück. Im Gegensatz zum [Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Inequality)
berücksichtigt der strikte Ungleichheitsoperator immer Operanden unterschiedlichen Typs als
unterschiedlich.

{{InteractiveExample("JavaScript Demo: Expressions - Strict inequality operator")}}

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

## Beschreibung

Der strikte Ungleichheitsoperator prüft, ob seine Operanden nicht gleich sind.
Er ist die Negation des
[strikten Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality),
sodass die folgenden zwei Zeilen immer dasselbe Ergebnis liefern:

```js
x !== y;

!(x === y);
```

Für Details zum Vergleichsalgorithmus siehe die Seite des
[strikten Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality).

Wie der strikte Gleichheitsoperator betrachtet der strikte Ungleichheitsoperator immer
Operanden unterschiedlichen Typs als unterschiedlich:

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
