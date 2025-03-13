---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **strikte Gleichheitsoperator (`===`)** prüft, ob seine beiden Operanden
gleich sind und gibt ein boolesches Ergebnis zurück. Im Gegensatz zum [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) betrachtet der strikte Gleichheitsoperator Operanden unterschiedlicher Typen immer als unterschiedlich.

{{InteractiveExample("JavaScript Demo: Strikter Gleichheitsoperator (===)")}}

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

Die strikten Gleichheitsoperatoren (`===` und `!==`) verwenden die [IsStrictlyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) Semantik.

- Sind die Operanden unterschiedlichen Typs, wird `false` zurückgegeben.
- Sind beide Operanden Objekte, wird `true` nur dann zurückgegeben, wenn sie auf dasselbe Objekt verweisen.
- Sind beide Operanden `null` oder beide `undefined`, wird `true` zurückgegeben.
- Ist einer der Operanden `NaN`, wird `false` zurückgegeben.
- Andernfalls werden die Werte der beiden Operanden verglichen:

  - Zahlen müssen denselben numerischen Wert haben. `+0` und `-0`
    werden als gleicher Wert betrachtet.
  - Zeichenketten müssen dieselben Zeichen in derselben Reihenfolge haben.
  - Booleans müssen beide `true` oder beide `false` sein.

Der bemerkenswerteste Unterschied zwischen diesem Operator und dem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality)
(`==`) besteht darin, dass der `==`-Operator versucht, die Operanden vor dem Vergleichen in denselben Typ zu konvertieren, wenn sie unterschiedlichen Typs sind.

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
