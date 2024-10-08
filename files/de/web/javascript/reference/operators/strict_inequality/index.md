---
title: Strikte Ungleichheit (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Der **strikte Ungleichheitsoperator (`!==`)** überprüft, ob seine beiden Operanden nicht gleich sind und gibt ein Boolesches Ergebnis zurück. Im Gegensatz zum [Ungleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Inequality) betrachtet der strikte Ungleichheitsoperator Operanden unterschiedlicher Typen immer als unterschiedlich.

{{EmbedInteractiveExample("pages/js/expressions-strict-inequality.html")}}

## Syntax

```js-nolint
x !== y
```

## Beschreibung

Der strikte Ungleichheitsoperator überprüft, ob seine Operanden nicht gleich sind. Er ist die Negation des [strikten Gleichheitsoperators](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), sodass die folgenden zwei Zeilen immer das gleiche Ergebnis liefern:

```js
x !== y;

!(x === y);
```

Details des Vergleichsalgorithmus finden Sie auf der Seite für den [strikten Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality).

Wie der strikte Gleichheitsoperator betrachtet der strikte Ungleichheitsoperator Operanden unterschiedlicher Typen immer als unterschiedlich:

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
