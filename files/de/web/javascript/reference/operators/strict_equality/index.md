---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Operator für strikte Gleichheit (`===`)** überprüft, ob seine beiden Operanden gleich sind, und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) betrachtet der Operator für strikte Gleichheit Operanden unterschiedlichen Typs immer als verschieden.

{{InteractiveExample("JavaScript Demo: Expressions - Strict equality operator")}}

```js interactive-example
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

## Syntax

```js-nolint
x === y
```

## Beschreibung

Die Operatoren für strikte Gleichheit (`===` und `!==`) verwenden die [IsStrictlyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using)-Semantik.

- Wenn die Operanden unterschiedliche Typen haben, wird `false` zurückgegeben.
- Wenn beide Operanden Objekte sind, wird `true` nur zurückgegeben, wenn sie auf dasselbe Objekt verweisen.
- Wenn beide Operanden `null` sind oder beide `undefined` sind, wird `true` zurückgegeben.
- Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben.
- Andernfalls werden die Werte der beiden Operanden verglichen:

  - Zahlen müssen denselben numerischen Wert haben. `+0` und `-0` werden als derselbe Wert betrachtet.
  - Zeichenketten müssen dieselben Zeichen in derselben Reihenfolge haben.
  - Booleans müssen entweder beide `true` oder beide `false` sein.

Der auffälligste Unterschied zwischen diesem Operator und dem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) ist, dass der `==`-Operator versucht, die Operanden vor dem Vergleich in den gleichen Typ zu konvertieren, wenn sie unterschiedliche Typen haben.

## Beispiele

### Vergleich von Operanden desselben Typs

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### Vergleich von Operanden unterschiedlichen Typs

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### Vergleich von Objekten

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gleichheit (`==`)](/de/docs/Web/JavaScript/Reference/Operators/Equality)
- [Ungleichheit (`!=`)](/de/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strikte Ungleichheit (`!==`)](/de/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
