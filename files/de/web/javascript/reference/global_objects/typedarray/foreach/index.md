---
title: TypedArray.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`forEach()`**-Methode von {{jsxref("TypedArray")}}-Instanzen führt eine bereitgestellte Funktion einmal für jedes Element des typisierten Arrays aus. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.forEach()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.forEach()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);

uint8.forEach((element) => console.log(element));

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element im typisierten Array ausgeführt wird. Der Rückgabewert wird verworfen. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das im typisierten Array verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das im typisierten Array verarbeitet wird.
    - `array`
      - : Das typisierte Array, auf dem `forEach()` aufgerufen wurde.
- `thisArg` {{optional_inline}}
  - : Ein Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird. Siehe [iterative Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Siehe {{jsxref("Array.prototype.forEach()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Protokollieren des Inhalts eines typisierten Arrays

Der folgende Code protokolliert eine Zeile für jedes Element in einem typisierten Array:

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// Logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
