---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die statische Methode **`Object.is()`** bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind.

{{EmbedInteractiveExample("pages/js/object-is.html")}}

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

Ein Boolean, der angibt, ob die beiden Argumente denselben Wert darstellen oder nicht.

## Beschreibung

`Object.is()` bestimmt, ob zwei Werte [derselbe Wert](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value_equality_using_object.is) sind. Zwei Werte sind gleich, wenn einer der folgenden Fälle zutrifft:

- beide {{jsxref("undefined")}}
- beide [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)
- beide `true` oder beide `false`
- beide Zeichenketten mit derselben Länge und denselben Zeichen in derselben Reihenfolge
- beide dasselbe Objekt (was bedeutet, dass beide Werte auf dasselbe Objekt im Speicher verweisen)
- beide [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) mit demselben numerischen Wert
- beide [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol), die auf dasselbe Symbol verweisen
- beide Zahlen und

  - beide `+0`
  - beide `-0`
  - beide {{jsxref("NaN")}}
  - oder beide ungleich null, nicht {{jsxref("NaN")}} und mit demselben Wert

`Object.is()` ist nicht gleichbedeutend mit dem [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operator. Der `==`-Operator wendet verschiedene Typumformungen auf beide Seiten an (wenn sie nicht denselben Typ haben), bevor er auf Gleichheit testet (was zu einem Verhalten führt wie `"" == false` ergibt `true`), aber `Object.is()` formt keinen der Werte um.

`Object.is()` ist auch _nicht_ gleichbedeutend mit dem [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)-Operator. Der einzige Unterschied zwischen `Object.is()` und `===` liegt in ihrer Behandlung von signierten Nullen und `NaN`-Werten. Der `===`-Operator (und der `==`-Operator) behandelt die Zahlenwerte `-0` und `+0` als gleich, behandelt jedoch {{jsxref("NaN")}} als ungleich einander.

## Beispiele

### Verwendung von Object.is()

```js
// Fall 1: Das Ergebnis der Auswertung entspricht der Verwendung von ===
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

// Fall 2: Signierte Null
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Fall 3: NaN
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
