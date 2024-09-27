---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 934ba3b7968030a573a28346dfcb371e796075a3
---

{{jsSidebar("Operators")}}

Der Operator **strikte Gleichheit (`===`)** überprüft, ob seine beiden Operanden gleich sind und gibt ein Boolesches Ergebnis zurück. Im Gegensatz zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) betrachtet der Operator für strikte Gleichheit Operanden unterschiedlichen Typs immer als verschieden.

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## Syntax

```js-nolint
x === y
```

## Beschreibung

Die Operatoren für strikte Gleichheit (`===` und `!==`) bieten die [IsStrictlyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) Semantik.

- Wenn die Operanden von verschiedenen Typen sind, wird `false` zurückgegeben.
- Wenn beide Operanden Objekte sind, wird `true` nur zurückgegeben, wenn sie auf dasselbe Objekt verweisen.
- Wenn beide Operanden `null` sind oder beide `undefined`, wird `true` zurückgegeben.
- Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben.
- Andernfalls werden die Werte der beiden Operanden verglichen:

  - Zahlen müssen die gleichen numerischen Werte haben. `+0` und `-0` werden als derselbe Wert betrachtet.
  - Zeichenfolgen müssen die gleichen Zeichen in derselben Reihenfolge haben.
  - Boolesche Werte müssen beide `true` oder beide `false` sein.

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) ist, dass der `==` Operator versucht, die Operanden vor dem Vergleich in denselben Typ zu konvertieren, wenn sie unterschiedlichen Typs sind.

## Beispiele

### Vergleichen von Operanden desselben Typs

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### Vergleichen von Operanden unterschiedlichen Typs

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### Vergleichen von Objekten

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
