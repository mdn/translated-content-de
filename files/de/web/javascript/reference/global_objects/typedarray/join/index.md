---
title: TypedArray.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 7c2fdcaace1ab622a1055b7cc710297c452ce9ee
---

Die **`join()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt einen neuen String zurück, der die Verkettung aller Elemente in diesem typisierten Array ist, getrennt durch Kommas oder einen angegebenen Trennstring. Wenn das typisierte Array nur ein Element hat, wird die String-Darstellung dieses Elements ohne Verwendung des Trennzeichens zurückgegeben. Diese Methode folgt demselben Algorithmus wie {{jsxref("Array.prototype.join()")}}.

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
  - : Ein String, um jedes Paar von benachbarten Elementen des typisierten Arrays zu trennen. Wird dieser weggelassen, werden die typisierten Array-Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String mit allen verbundenen Elementen des typisierten Arrays. Wenn `array.length` `0` ist, wird der leere String zurückgegeben.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.join()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen eines typisierten Arrays aufgerufen werden.

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
