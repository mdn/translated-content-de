---
title: TypedArray.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/keys
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`keys()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt ein neues _[Array Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ Objekt zurück, das die Schlüssel für jeden Index im typisierten Array enthält. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.keys()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.keys()")}}

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

Siehe {{jsxref("Array.prototype.keys()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Iteration mit for...of Schleife

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
