---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 934ba3b7968030a573a28346dfcb371e796075a3
---

{{jsSidebar("Operators")}}

Der **strikte Gleichheitsoperator (`===`)** prüft, ob seine beiden Operanden gleich sind und gibt ein Boolesches Ergebnis zurück. Im Gegensatz zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) betrachtet der strikte Gleichheitsoperator Operanden unterschiedlichen Typs immer als unterschiedlich.

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## Syntax

```js-nolint
x === y
```

## Beschreibung

Die strikten Gleichheitsoperatoren (`===` und `!==`) bieten die [IsStrictlyEqual](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) Semantik.

- Wenn die Operanden unterschiedliche Typen haben, gibt `false` zurück.
- Wenn beide Operanden Objekte sind, gibt `true` nur zurück, wenn sie sich auf dasselbe Objekt beziehen.
- Wenn beide Operanden `null` sind oder beide Operanden `undefined` sind, gibt `true` zurück.
- Wenn einer der Operanden `NaN` ist, gibt `false` zurück.
- Andernfalls werden die Werte der beiden Operanden verglichen:

  - Zahlen müssen denselben numerischen Wert haben. `+0` und `-0` werden als derselbe Wert betrachtet.
  - Zeichenketten müssen dieselben Zeichen in derselben Reihenfolge haben.
  - Boolesche Werte müssen beide `true` oder beide `false` sein.

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality)
(`==`) besteht darin, dass der `==` Operator versucht, die Operanden vor dem Vergleich in denselben Typ zu konvertieren, wenn sie unterschiedliche Typen haben.

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
