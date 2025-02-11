---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.is()`** bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind.

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
  - : Der erste Wert, der verglichen werden soll.
- `value2`
  - : Der zweite Wert, der verglichen werden soll.

### Rückgabewert

Ein boolescher Wert, der angibt, ob die beiden Argumente denselben Wert haben oder nicht.

## Beschreibung

`Object.is()` bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind. Zwei Werte sind gleich, wenn einer der folgenden Punkte zutrifft:

- beide sind {{jsxref("undefined")}}
- beide sind [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- beide sind `true` oder beide sind `false`
- beide sind Strings der gleichen Länge mit denselben Zeichen in derselben Reihenfolge
- beide sind dasselbe Objekt (das heißt, beide Werte verweisen auf dasselbe Objekt im Speicher)
- beide sind [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) mit demselben numerischen Wert
- beide sind [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die auf denselben Symbolwert verweisen
- beide sind Zahlen und

  - beide sind `+0`
  - beide sind `-0`
  - beide sind {{jsxref("NaN")}}
  - oder beide sind ungleich null, nicht {{jsxref("NaN")}} und haben denselben Wert

`Object.is()` ist nicht gleich dem [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operator. Der `==`-Operator wendet verschiedene Typumwandlungen auf beide Seiten an (wenn sie nicht denselben Typ haben), bevor er die Gleichheit prüft (was zu einem Verhalten wie `"" == false` ergibt `true` führt), aber `Object.is()` nimmt keine Typumwandlung vor.

`Object.is()` ist ebenfalls _nicht_ gleich dem [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)-Operator. Der einzige Unterschied zwischen `Object.is()` und `===` liegt in der Behandlung von Vorzeichen-Nullen und `NaN`-Werten. Der `===`-Operator (und auch der `==`-Operator) behandelt die Zahlenwerte `-0` und `+0` als gleich, betrachtet jedoch {{jsxref("NaN")}} als ungleich zu sich selbst.

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
- [Vergleiche für Gleichheit und Identität](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
