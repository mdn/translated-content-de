---
title: Number() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Number()`** Konstruktor erstellt {{jsxref("Number")}} Objekte. Wird er als Funktion aufgerufen, gibt er primitive Werte des Typs Number zurück.

## Syntax

```js-nolint
new Number(value)
Number(value)
```

> **Note:** `Number()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der numerische Wert des zu erstellenden Objekts.

### Rückgabewert

Wenn `Number()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt er `value` [in einen Zahlenwert umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) zurück. Insbesondere werden [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) in Zahlen umgewandelt, anstatt einen Fehler auszulösen. Wenn `value` fehlt, wird es zu `0`.

Wird `Number()` als Konstruktor (mit `new`) aufgerufen, verwendet er den obigen Umwandlungsprozess und gibt ein umhüllendes {{jsxref("Number")}} Objekt zurück, welches **kein** primitiver Wert ist.

> [!WARNING]
> Sie sollten `Number` selten als Konstruktor verwenden.

## Beispiele

### Number-Objekte erstellen

```js
const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
typeof a; // "object"
typeof b; // "number"
```

### Nutzung von Number() zur Umwandlung eines BigInt in eine Zahl

`Number()` ist der einzige Fall, in dem ein BigInt ohne Auslösen eines Fehlers in eine Zahl umgewandelt werden kann, da es sehr explizit ist.

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

Beachten Sie, dass dies zu einem Verlust von Präzision führen kann, wenn der BigInt zu groß ist, um [sicher dargestellt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für modernes `Number` Verhalten (mit Unterstützung für binäre und oktale Literale) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
