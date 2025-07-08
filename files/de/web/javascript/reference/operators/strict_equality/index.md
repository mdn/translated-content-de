---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **strikte Gleichheitsoperator (`===`)** überprüft, ob seine beiden Operanden gleich sind, und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) betrachtet der strikte Gleichheitsoperator Operanden verschiedener Typen immer als unterschiedlich.

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
- Wenn beide Operanden `null` sind oder beide Operanden `undefined` sind, wird `true` zurückgegeben.
- Wenn ein Operand `NaN` ist, wird `false` zurückgegeben.
- Andernfalls werden die Werte der beiden Operanden verglichen:
  - Zahlen müssen identische numerische Werte haben. `+0` und `-0` werden als derselbe Wert betrachtet.
  - Zeichenfolgen müssen dieselben Zeichen in derselben Reihenfolge haben.
  - Booleans müssen beide `true` oder beide `false` sein.

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) ist, dass der `==` Operator versucht, die Operanden vor dem Vergleich in denselben Typ zu konvertieren, wenn sie unterschiedliche Typen haben.

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

### Vergleich von Operanden verschiedener Typen

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
