---
title: Object.is()
short-title: is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

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
  - : Der erste zu vergleichende Wert.
- `value2`
  - : Der zweite zu vergleichende Wert.

### Rückgabewert

Ein boolescher Wert, der angibt, ob die beiden Argumente derselbe Wert sind.

## Beschreibung

`Object.is()` bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind. Zwei Werte sind derselbe Wert, wenn eine der folgenden Bedingungen zutrifft:

- Beide sind {{jsxref("undefined")}}.
- Beide sind [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- Beide sind `true` oder beide sind `false`.
- Beide sind Zeichenfolgen gleicher Länge mit denselben Zeichen in derselben Reihenfolge.
- Beide sind dasselbe Objekt (das heißt, beide Werte verweisen auf dasselbe Objekt im Speicher).
- Beide sind [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) mit demselben numerischen Wert.
- Beide sind [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die auf denselben Symbolwert verweisen.
- Beide sind Zahlen und
  - beide sind `+0`,
  - beide sind `-0`,
  - beide sind {{jsxref("NaN")}},
  - oder beide sind ungleich null, nicht {{jsxref("NaN")}} und haben denselben Wert.

`Object.is()` ist nicht gleichbedeutend mit dem Operator [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality). Der Operator `==` führt vor dem Vergleich auf Gleichheit verschiedene Typumwandlungen auf beiden Seiten durch (wenn diese nicht denselben Typ haben). Dadurch ergibt beispielsweise `"" == false` den Wert `true`. `Object.is()` hingegen wandelt keinen der beiden Werte um.

`Object.is()` ist auch _nicht_ gleichbedeutend mit dem Operator [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality). Der einzige Unterschied zwischen `Object.is()` und `===` liegt in der Behandlung von Nullen mit Vorzeichen und `NaN`-Werten. Der Operator `===` (ebenso wie der Operator `==`) betrachtet die Zahlenwerte `-0` und `+0` als gleich, betrachtet {{jsxref("NaN")}} jedoch nicht als gleich mit sich selbst.

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

- [Polyfill für `Object.is` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.is` von es-shims](https://www.npmjs.com/package/object.is)
- [Gleichheitsvergleiche und Gleichheit von Werten](/de/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
