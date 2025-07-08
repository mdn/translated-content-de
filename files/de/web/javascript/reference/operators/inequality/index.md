---
title: Ungleichheit (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Ungleichheitsoperator (`!=`)** prüft, ob seine beiden Operanden nicht gleich sind und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [strikten Ungleichheits](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)-Operator versucht er, Operanden verschiedener Typen zu konvertieren und zu vergleichen.

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

## Beschreibung

Der Ungleichheitsoperator prüft, ob seine Operanden nicht gleich sind. Er ist die Negation des [Gleichheits](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operators, daher werden die folgenden beiden Zeilen immer dasselbe Ergebnis liefern:

```js
x != y;

!(x == y);
```

Details zum Vergleichsalgorithmus finden Sie auf der Seite des [Gleichheits](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operators.

Wie der Gleichheitsoperator wird der Ungleichheitsoperator versuchen, Operanden verschiedener Typen zu konvertieren und zu vergleichen:

```js
3 != "3"; // false
```

Um dies zu verhindern und zu verlangen, dass verschiedene Typen als unterschiedlich betrachtet werden, verwenden Sie stattdessen den [strikten Ungleichheits](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)-Operator:

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
