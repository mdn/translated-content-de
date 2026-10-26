---
title: TypedArray.of()
short-title: of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`TypedArray.of()`** erstellt ein neues [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) aus einer variablen Anzahl von Argumenten. Diese Methode ist {{jsxref("Array.of()")}} sehr ähnlich.

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

Dabei ist `TypedArray` eines der folgenden:

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
  - : Elemente, aus denen das typisierte Array erstellt wird.

### Rückgabewert

Eine neue {{jsxref("TypedArray")}}-Instanz.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.of()")}}. Zwischen {{jsxref("Array.of()")}} und `TypedArray.of()` gibt es einige feine Unterschiede:

- Wenn der an `TypedArray.of()` übergebene `this`-Wert kein Konstruktor ist, löst `TypedArray.of()` einen {{jsxref("TypeError")}} aus. `Array.of()` erstellt in diesem Fall standardmäßig ein neues {{jsxref("Array")}}.
- `TypedArray.of()` verwendet `[[Set]]`, während `Array.of()` `[[DefineOwnProperty]]` verwendet. Bei der Arbeit mit {{jsxref("Proxy")}}-Objekten wird daher zum Erstellen neuer Elemente [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) statt [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) aufgerufen.

## Beispiele

### Verwendung von of()

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

- [Polyfill für `TypedArray.of` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- Leitfaden zu [typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
