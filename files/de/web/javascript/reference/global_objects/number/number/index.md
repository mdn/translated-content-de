---
title: Number() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Number()`** Konstruktor erstellt {{jsxref("Number")}} Objekte. Wenn sie als Funktion aufgerufen wird, gibt sie primitive Werte vom Typ Number zurück.

## Syntax

```js-nolint
new Number(value)
Number(value)
```

> **Note:** `Number()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden, jedoch mit unterschiedlichen Effekten. Siehe [Rückgabewert](#rückgabewert).

### Parameter

- `value`
  - : Der numerische Wert des zu erstellenden Objekts.

### Rückgabewert

Wenn `Number()` als Funktion (ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)) aufgerufen wird, wird `value` [zu einem number-Primitiv umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) zurückgegeben. Insbesondere werden [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Werte in Zahlen umgewandelt, anstatt einen Fehler zu werfen. Wenn `value` fehlt, wird es zu `0`.

Wenn `Number()` als Konstruktor (mit `new`) aufgerufen wird, nutzt es den oben beschriebenen Umwandlungsprozess und gibt ein umhüllendes {{jsxref("Number")}} Objekt zurück, das **kein** Primitiv ist.

> [!WARNING]
> Sie sollten den `Number` Konstruktor nur selten verwenden.

## Beispiele

### Erstellen von Number-Objekten

```js
const a = new Number("123"); // a === 123 ist falsch
const b = Number("123"); // b === 123 ist wahr
a instanceof Number; // ist wahr
b instanceof Number; // ist falsch
typeof a; // "object"
typeof b; // "number"
```

### Verwenden von Number(), um ein BigInt in eine Zahl zu konvertieren

`Number()` ist der einzige Fall, in dem ein BigInt in eine Zahl umgewandelt werden kann, ohne einen Fehler zu werfen, da dies sehr explizit ist.

```js example-bad
+1n; // TypeError: Kann einen BigInt-Wert nicht in eine Zahl umwandeln
0 + 1n; // TypeError: Kann BigInt nicht mit anderen Typen mischen, verwenden Sie explizite Umwandlungen
```

```js example-good
Number(1n); // 1
```

Beachten Sie, dass dies zu einem Präzisionsverlust führen kann, wenn der BigInt zu groß ist, um [sicher dargestellt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) zu werden.

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // falsch
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
