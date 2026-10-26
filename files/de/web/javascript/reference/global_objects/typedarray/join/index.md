---
title: TypedArray.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`join()`** von {{jsxref("TypedArray")}}-Instanzen gibt einen neuen String zurück, der aus allen Elementen dieses typisierten Arrays zusammengesetzt ist. Die Elemente werden durch Kommas oder einen angegebenen Trennstring getrennt. Wenn das typisierte Array nur ein Element enthält, wird dessen String-Darstellung ohne Trennzeichen zurückgegeben. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.join()")}}.

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
  - : Ein String, der jeweils zwei benachbarte Elemente des typisierten Arrays trennt. Wird er weggelassen, werden die Elemente durch ein Komma (",") getrennt.

### Rückgabewert

Ein String, der alle Elemente des typisierten Arrays enthält. Wenn `array.length` gleich `0` ist, wird ein leerer String zurückgegeben.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.join()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### join() verwenden

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

- [Polyfill für `TypedArray.prototype.join` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
