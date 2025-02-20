---
title: TypedArray.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`keys()`** von {{jsxref("TypedArray")}}-Instanzen gibt ein neues _[Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das die Schlüssel für jeden Index im Typed Array enthält. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.keys()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.keys()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const keys = uint8.keys();

keys.next();
keys.next();

console.log(keys.next().value);
// Expected output: 2
```

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

Weitere Informationen finden Sie unter {{jsxref("Array.prototype.keys()")}}. Diese Methode ist nicht generisch und kann nur auf Instanzen von Typed Arrays angewendet werden.

## Beispiele

### Iteration mit for...of-Schleife

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
for (const n of arrKeys) {
  console.log(n);
}
```

### Alternative Iteration

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
console.log(arrKeys.next().value); // 0
console.log(arrKeys.next().value); // 1
console.log(arrKeys.next().value); // 2
console.log(arrKeys.next().value); // 3
console.log(arrKeys.next().value); // 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- {{jsxref("Array.prototype.keys()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
