---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die statische Methode **`TypedArray.of()`** erstellt ein neues [TypedArray](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) aus einer variablen Anzahl von Argumenten. Diese Methode ist nahezu identisch mit {{jsxref("Array.of()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-of.html", "shorter")}}

## Syntax

```js-nolint
TypedArray.of()
TypedArray.of(element1)
TypedArray.of(element1, element2)
TypedArray.of(element1, element2, /* …, */ elementN)
```

Wo `TypedArray` eines der folgenden ist:

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

Eine neue Instanz von {{jsxref("TypedArray")}}.

## Beschreibung

Siehe {{jsxref("Array.of()")}} für weitere Details. Es gibt einige subtile Unterschiede zwischen {{jsxref("Array.of()")}} und `TypedArray.of()`:

- Wenn der `this`-Wert, der an `TypedArray.of()` übergeben wird, kein Konstruktor ist, wird `TypedArray.from()` einen {{jsxref("TypeError")}} werfen, während `Array.of()` standardmäßig ein neues {{jsxref("Array")}} erstellt.
- `TypedArray.of()` verwendet `[[Set]]`, während `Array.of()` `[[DefineOwnProperty]]` verwendet. Daher wird beim Arbeiten mit {{jsxref("Proxy")}}-Objekten [`handler.set()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) aufgerufen, um neue Elemente zu erstellen, anstatt [`handler.defineProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty).

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

- [Polyfill von `TypedArray.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- JavaScript-Typed-Arrays [Leitfaden](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
