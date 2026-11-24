---
title: Strikte Gleichheit (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator für **strikte Gleichheit (`===`)** prüft, ob seine beiden Operanden gleich sind, und gibt einen booleschen Wert zurück. Anders als der [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) betrachtet er Operanden unterschiedlichen Typs immer als ungleich.

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

### Parameter

- `x`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 8 (Gleichheit) oder höher.
- `y`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von 9 (relationale Operatoren) oder höher.

### Rückgabewert

`true`, wenn `x` und `y` gemäß der [strikten Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using) gleich sind, andernfalls `false`.

## Beschreibung

Die Operatoren für strikte Gleichheit (`===` und `!==`) verwenden die [IsStrictlyEqual](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using)-Semantik.

- Wenn die Operanden unterschiedliche Typen haben, wird `false` zurückgegeben.
- Wenn beide Operanden Objekte sind, wird `true` nur dann zurückgegeben, wenn sie auf dasselbe Objekt verweisen.
- Wenn beide Operanden `null` oder beide `undefined` sind, wird `true` zurückgegeben.
- Wenn einer der Operanden `NaN` ist, wird `false` zurückgegeben.
- Andernfalls werden die Werte der beiden Operanden verglichen:
  - Zahlen müssen denselben numerischen Wert haben. `+0` und `-0` gelten als derselbe Wert.
  - Zeichenfolgen müssen dieselben Zeichen in derselben Reihenfolge enthalten.
  - Boolesche Werte müssen entweder beide `true` oder beide `false` sein.

Der wichtigste Unterschied zwischen diesem Operator und dem [Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) besteht darin, dass der Operator `==` bei Operanden unterschiedlichen Typs versucht, sie vor dem Vergleich in denselben Typ umzuwandeln.

## Beispiele

### Operanden desselben Typs vergleichen

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### Operanden unterschiedlichen Typs vergleichen

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### Objekte vergleichen

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
