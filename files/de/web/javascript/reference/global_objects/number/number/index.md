---
title: Number() Konstruktor
short-title: Number()
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Number()`** Konstruktor erstellt {{jsxref("Number")}} Objekte. Bei Aufruf als Funktion gibt er primitive Werte des Typs Number zurück.

## Syntax

```js-nolint
new Number(value)
Number(value)
```

> [!NOTE]
> `Number()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, aber mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der numerische Wert des zu erstellenden Objekts.

### Rückgabewert

Wenn `Number()` als Funktion aufgerufen wird (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)), gibt es `value` [in einen Zahl-Primitive umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) zurück. Insbesondere werden [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte in Zahlen umgewandelt, anstatt einen Fehler auszulösen. Wenn `value` fehlt, wird es zu `0`.

Wenn `Number()` als Konstruktor aufgerufen wird (mit `new`), verwendet es den oben beschriebenen Umwandlungsprozess und gibt ein umhüllendes {{jsxref("Number")}} Objekt zurück, das **kein** Primitive ist.

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

### Verwendung von Number(), um ein BigInt in eine Zahl zu konvertieren

`Number()` ist der einzige Fall, bei dem ein BigInt ohne Fehler in eine Zahl konvertiert werden kann, da es sehr explizit ist.

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

Beachten Sie, dass dies zu einem Präzisionsverlust führen kann, wenn das BigInt zu groß ist, um [sicher dargestellt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des modernen `Number`-Verhaltens (mit Unterstützung für binäre und oktale Literale) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
