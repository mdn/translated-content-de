---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("TypedArray")}}-Instanzen erstellt und gibt einen neuen String zurück, indem alle Elemente in diesem Typ-Array verbunden werden, getrennt durch Kommas oder eine angegebene Trennzeichen-Zeichenfolge. Wenn das Typ-Array nur ein Element enthält, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben. Diese Methode folgt demselben Algorithmus wie {{jsxref("Array.prototype.join()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.join()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.join());
// Expected output: "10,20,30,40,50"

console.log(uint8.join(""));
// Expected output: "1020304050"

console.log(uint8.join("-"));
// Expected output: "10-20-30-40-50"
```

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Eine Zeichenfolge, die jedes Paar benachbarter Elemente des Typ-Arrays trennt. Wenn sie weggelassen wird, werden die Typ-Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String, bei dem alle Typ-Array-Elemente verbunden sind. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.join()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typ-Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von join()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.join` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
