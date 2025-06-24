---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{jsSidebar("Operators")}}

Der **Operator für strikte Gleichheit (`===`)** überprüft, ob seine zwei Operanden
gleich sind, und gibt ein Boolean-Ergebnis zurück. Im Gegensatz zum [Gleichheits-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality)
behandelt der Operator für strikte Gleichheit stets Operanden unterschiedlichen Typs als
unterschiedlich.

{{InteractiveExample("JavaScript Demo: Strict equality (===) operator")}}

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

Die strikten Gleichheitsoperatoren (`===` und `!==`) bieten die [IsStrictlyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) Semantik.

- Wenn die Operanden unterschiedliche Typen haben, wird `false` zurückgegeben.
- Wenn beide Operanden Objekte sind, wird `true` nur zurückgegeben, wenn sie auf dasselbe Objekt verweisen.
- Wenn beide Operanden `null` sind oder beide Operanden `undefined`,
  wird `true` zurückgegeben.
- Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben.
- Andernfalls werden die Werte der beiden Operanden verglichen:
  - Zahlen müssen denselben numerischen Wert haben. `+0` und `-0`
    werden als derselbe Wert angesehen.
  - Zeichenfolgen müssen dieselben Zeichen in derselben Reihenfolge haben.
  - Booleans müssen beide `true` oder beide `false` sein.

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [Gleichheits-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality)
(`==`) ist, dass der `==`-Operator versucht, Operanden unterschiedlichen Typs vor dem Vergleich in denselben Typ zu konvertieren.

## Beispiele

### Vergleich von Operanden des gleichen Typs

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
