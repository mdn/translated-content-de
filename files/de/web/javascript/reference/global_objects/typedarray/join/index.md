---
title: TypedArray.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`join()`** Methode von {{jsxref("TypedArray")}} Instanzen erstellt und gibt einen neuen String zurück, indem alle Elemente in diesem typisierten Array verkettet werden, getrennt durch Kommata oder eine angegebene Trennzeichen-Zeichenfolge. Wenn das typisierte Array nur ein Element hat, wird dieses Element ohne Verwendung des Trennzeichens zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.join()")}}.

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
  - : Ein String, der jedes Paar benachbarter Elemente des typisierten Arrays trennt. Wenn es weggelassen wird, werden die Elemente des typisierten Arrays mit einem Komma (",") getrennt.

### Rückgabewert

Ein String, in dem alle Elemente des typisierten Arrays verbunden sind. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.join()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
