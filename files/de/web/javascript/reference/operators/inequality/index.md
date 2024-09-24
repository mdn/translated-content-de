---
title: Ungleichheit (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **Ungleichheitsoperator (`!=`)** überprüft, ob seine beiden Operanden
nicht gleich sind, und gibt ein boolesches Ergebnis zurück.
Im Gegensatz zum [strikten Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
versucht er, Operanden unterschiedlichen Typs zu konvertieren und zu vergleichen.

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## Syntax

```js-nolint
x != y
```

## Beschreibung

Der Ungleichheitsoperator prüft, ob seine Operanden nicht gleich sind. Er ist die Negation
des [Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Equality), sodass die folgenden beiden Zeilen immer dasselbe Ergebnis liefern:

```js
x != y;

!(x == y);
```

Für Details zum Vergleichsalgorithmus siehe die Seite für den [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality).

Wie der Gleichheitsoperator versucht auch der Ungleichheitsoperator, Operanden unterschiedlichen Typs zu konvertieren und zu vergleichen:

```js
3 != "3"; // false
```

Um dies zu verhindern und zu verlangen, dass unterschiedliche Typen als unterschiedlich betrachtet werden, verwenden Sie stattdessen den [strikten Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality):

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
0 != !!null; // false, siehe Logischer NICHT-Operator
0 != !!undefined; // false, siehe Logischer NICHT-Operator
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
