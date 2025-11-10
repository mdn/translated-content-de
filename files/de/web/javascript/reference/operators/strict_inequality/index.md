---
title: Strikte Ungleichheit (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **strikte Ungleichheitsoperator (`!==`)** prüft, ob seine beiden Operanden
ungleich sind, und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Inequality)
betrachtet der strikte Ungleichheitsoperator Operanden unterschiedlicher Typen
immer als verschieden.

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

## Beschreibung

Der strikte Ungleichheitsoperator prüft, ob seine Operanden ungleich sind.
Er ist die Negation des
[strikten Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), sodass die folgenden beiden Zeilen immer das gleiche Ergebnis liefern:

```js
x !== y;

!(x === y);
```

Einzelheiten zum Vergleichsalgorithmus finden Sie auf der Seite des
[strikten Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality).

Wie der strikte Gleichheitsoperator betrachtet der strikte Ungleichheitsoperator
Operanden unterschiedlicher Typen immer als verschieden:

```js
3 !== "3"; // true
```

## Beispiele

### Vergleich von Operanden desselben Typs

```js
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### Vergleich von Operanden unterschiedlicher Typen

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### Vergleich von Objekten

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
