---
title: Number()-Konstruktor
short-title: Number()
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Number()`**-Konstruktor erstellt {{jsxref("Number")}}-Objekte. Wird er als Funktion aufgerufen, gibt er primitive Werte des Typs Number zurück.

## Syntax

```js-nolint
new Number(value)
Number(value)
```

> [!NOTE]
> `Number()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, allerdings mit unterschiedlichen Auswirkungen. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der numerische Wert des zu erstellenden Objekts.

### Rückgabewert

Wenn `Number()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, gibt es `value` [als primitiven Zahlenwert konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) zurück. Insbesondere werden [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Werte in Zahlen umgewandelt, statt einen Fehler auszulösen. Fehlt `value`, wird `0` verwendet.

Wenn `Number()` als Konstruktor (mit `new`) aufgerufen wird, verwendet es den oben beschriebenen Konvertierungsprozess und gibt ein umhüllendes {{jsxref("Number")}}-Objekt zurück, das **kein** primitiver Wert ist.

> [!WARNING]
> Sie sollten `Number` nur selten als Konstruktor verwenden.

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

### Mit Number() einen BigInt-Wert in eine Zahl umwandeln

`Number()` ist die einzige Möglichkeit, einen BigInt-Wert ohne Fehler in eine Zahl umzuwandeln, da die Umwandlung dabei ausdrücklich erfolgt.

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

Beachten Sie, dass dies zu einem Genauigkeitsverlust führen kann, wenn der BigInt-Wert zu groß ist, um [sicher dargestellt zu werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für das moderne Verhalten von `Number` (mit Unterstützung für binäre und oktale Literale) in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- {{jsxref("NaN")}}
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
