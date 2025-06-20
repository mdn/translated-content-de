---
title: TypedArray.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`TypedArray.of()`** statische Methode erstellt ein neues [Typed Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) aus einer variablen Anzahl von Argumenten. Diese Methode ist nahezu identisch mit {{jsxref("Array.of()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.of()", "shorter")}}

```js interactive-example
const int16array = Int16Array.of("10", "20", "30", "40", "50");

console.log(int16array);
// Expected output: Int16Array [10, 20, 30, 40, 50]
```

## Syntax

```js-nolint
TypedArray.of()
TypedArray.of(element1)
TypedArray.of(element1, element2)
TypedArray.of(element1, element2, /* …, */ elementN)
```

Wobei `TypedArray` eine der folgenden ist:

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float16Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### Parameter

- `element1`, …, `elementN`
  - : Elemente, die zur Erstellung des Typed Arrays verwendet werden.

### Rückgabewert

Eine neue {{jsxref("TypedArray")}}-Instanz.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.of()")}}. Es gibt einige feine Unterschiede zwischen {{jsxref("Array.of()")}} und `TypedArray.of()`:

- Wenn der `this`-Wert, der an `TypedArray.of()` übergeben wird, kein Konstruktor ist, wirft `TypedArray.of()` einen {{jsxref("TypeError")}}, während `Array.of()` standardmäßig ein neues {{jsxref("Array")}} erstellt.
- `TypedArray.of()` verwendet `[[Set]]`, während `Array.of()` `[[DefineOwnProperty]]` verwendet. Daher ruft es, wenn mit {{jsxref("Proxy")}}-Objekten gearbeitet wird, [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) auf, um neue Elemente zu erstellen, anstatt [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).

## Beispiele

### Nutzung von of()

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // Int16Array [ 0 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
