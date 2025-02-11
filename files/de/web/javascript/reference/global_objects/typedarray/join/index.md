---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`join()`**-Methode von {{jsxref("TypedArray")}}-Instanzen erstellt und gibt eine neue Zeichenkette zurück, indem alle Elemente dieses Typed Arrays zusammengefügt werden, getrennt durch Kommata oder eine angegebene Trennzeichen-Zeichenkette. Wenn das Typed Array nur ein Element enthält, wird dieses ohne das Trennzeichen zurückgegeben. Diese Methode verwendet den gleichen Algorithmus wie {{jsxref("Array.prototype.join()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.join()")}}

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
  - : Eine Zeichenkette, die verwendet wird, um jedes Paar benachbarter Elemente des Typed Arrays zu trennen. Falls nicht angegeben, werden die Elemente des Typed Arrays durch ein Komma (",") getrennt.

### Rückgabewert

Eine Zeichenkette, bei der alle Elemente des Typed Arrays zusammengefügt wurden. Wenn `array.length` `0` ist, wird eine leere Zeichenkette zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.join()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typed Array-Instanzen aufgerufen werden.

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
