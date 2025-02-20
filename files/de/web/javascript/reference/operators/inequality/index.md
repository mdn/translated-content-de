---
title: Ungleichheit (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Ungleichheitsoperator (`!=`)** überprüft, ob seine zwei Operanden nicht gleich sind, und liefert ein Boolean-Ergebnis zurück.
Im Gegensatz zum [strikten Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality) versucht er, Operanden unterschiedlicher Typen zu konvertieren und zu vergleichen.

{{InteractiveExample("JavaScript Demo: Expressions - Inequality operator")}}

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

## Beschreibung

Der Ungleichheitsoperator überprüft, ob seine Operanden nicht gleich sind. Er ist die Negation des [Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Equality), daher werden die folgenden zwei Zeilen immer dasselbe Ergebnis liefern:

```js
x != y;

!(x == y);
```

Details zum Vergleichsalgorithmus finden Sie auf der Seite zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality).

Wie der Gleichheitsoperator versucht der Ungleichheitsoperator, Operanden unterschiedlicher Typen zu konvertieren und zu vergleichen:

```js
3 != "3"; // false
```

Um dies zu verhindern und sicherzustellen, dass unterschiedliche Typen als unterschiedlich betrachtet werden, verwenden Sie stattdessen den [strikten Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality):

```js
3 !== "3"; // true
```

## Beispiele

### Vergleich ohne Typkonvertierung

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### Vergleich mit Typkonvertierung

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
