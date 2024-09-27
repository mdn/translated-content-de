---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`Object.is()`** statische Methode bestimmt, ob zwei Werte [der gleiche Wert](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind.

{{EmbedInteractiveExample("pages/js/object-is.html")}}

## Syntax

```js-nolint
Object.is(value1, value2)
```

### Parameter

- `value1`
  - : Der erste Wert zum Vergleichen.
- `value2`
  - : Der zweite Wert zum Vergleichen.

### Rückgabewert

Ein Boolean, der angibt, ob die beiden Argumente der gleiche Wert sind oder nicht.

## Beschreibung

`Object.is()` bestimmt, ob zwei Werte [der gleiche Wert](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind. Zwei Werte sind gleich, wenn eines der folgenden zutrifft:

- beide {{jsxref("undefined")}}
- beide [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- beide `true` oder beide `false`
- beide Strings mit derselben Länge und denselben Zeichen in derselben Reihenfolge
- beide dasselbe Objekt (bedeutet, beide Werte referenzieren dasselbe Objekt im Speicher)
- beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) mit demselben numerischen Wert
- beide [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die auf denselben Symbolwert verweisen
- beide Zahlen und

  - beide `+0`
  - beide `-0`
  - beide {{jsxref("NaN")}}
  - oder beide ungleich null, nicht {{jsxref("NaN")}}, und haben denselben Wert

`Object.is()` ist nicht äquivalent zum [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) Operator. Der `==` Operator wendet verschiedene Zwangsumwandlungen auf beide Seiten an (wenn sie nicht denselben Typ haben), bevor er auf Gleichheit testet (was zu solchem Verhalten wie `"" == false` führt, das `true` ist), aber `Object.is()` zwingt keinen der Werte.

`Object.is()` ist auch _nicht_ äquivalent zum [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) Operator. Der einzige Unterschied zwischen `Object.is()` und `===` liegt in ihrer Behandlung von vorzeichenbehafteten Nullen und `NaN`-Werten. Der `===` Operator (und der `==` Operator) behandelt die Zahlenwerte `-0` und `+0` als gleich, aber behandelt {{jsxref("NaN")}} als ungleich zu einander.

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
- [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness)
