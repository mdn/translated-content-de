---
title: Object.is()
short-title: is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die statische Methode **`Object.is()`** bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind.

{{InteractiveExample("JavaScript Demo: Object.is()")}}

```js interactive-example
console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

const obj = {};
console.log(Object.is(obj, {}));
// Expected output: false
```

## Syntax

```js-nolint
Object.is(value1, value2)
```

### Parameter

- `value1`
  - : Der erste Wert, der verglichen wird.
- `value2`
  - : Der zweite Wert, der verglichen wird.

### Rückgabewert

Ein boolean, der angibt, ob die beiden Argumente derselbe Wert sind oder nicht.

## Beschreibung

`Object.is()` bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind. Zwei Werte sind gleich, wenn einer der folgenden Punkte zutrifft:

- beide {{jsxref("undefined")}}
- beide [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- beide `true` oder beide `false`
- beides Strings gleicher Länge mit denselben Zeichen in derselben Reihenfolge
- beide dasselbe Objekt (das bedeutet, dass beide Werte auf dasselbe Objekt im Speicher verweisen)
- beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) mit demselben numerischen Wert
- beide [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die auf denselben Symbolwert verweisen
- beide Zahlen und
  - beide `+0`
  - beide `-0`
  - beide {{jsxref("NaN")}}
  - oder beide ungleich null, nicht {{jsxref("NaN")}} und haben denselben Wert

`Object.is()` ist nicht gleich dem [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operator. Der `==`-Operator wendet verschiedene Konvertierungen auf beide Seiten an (wenn sie nicht vom gleichen Typ sind), bevor er auf Gleichheit testet (was zu Verhaltensweisen wie `"" == false` führt, die `true` ergeben), aber `Object.is()` konvertiert keinen der beiden Werte.

`Object.is()` ist auch _nicht_ gleich dem [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)-Operator. Der einzige Unterschied zwischen `Object.is()` und `===` liegt in ihrer Behandlung von Vorzeichen-Nullen und `NaN`-Werten. Der `===`-Operator (und der `==`-Operator) behandelt die Zahlenwerte `-0` und `+0` als gleich, behandelt jedoch {{jsxref("NaN")}} als nicht gleich.

## Beispiele

### Verwendung von Object.is()

```js
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: Signed zero
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.is` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [es-shims Polyfill von `Object.is`](https://www.npmjs.com/package/object.is)
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
