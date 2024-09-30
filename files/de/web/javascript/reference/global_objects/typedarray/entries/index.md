---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`entries()`** Methode von {{jsxref("TypedArray")}} Instanzen gibt ein neues _[array iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ Objekt zurück, das die Schlüssel/Wert-Paare für jeden Index im typisierten Array enthält. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.entries()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.entries()")}}. Diese Methode ist nicht generisch und kann nur bei typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Iteration mit der for...of Schleife

```js
const array = new Uint8Array([10, 20, 30, 40, 50]);
const arrayEntries = arr.entries();
for (const element of arrayEntries) {
  console.log(element);
}
```

### Alternative Iteration

```js
const array = new Uint8Array([10, 20, 30, 40, 50]);
const arrayEntries = arr.entries();

console.log(arrayEntries.next().value); // [0, 10]
console.log(arrayEntries.next().value); // [1, 20]
console.log(arrayEntries.next().value); // [2, 30]
console.log(arrayEntries.next().value); // [3, 40]
console.log(arrayEntries.next().value); // [4, 50]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [Leitfaden zu JavaScript-Typ-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- {{jsxref("TypedArray.prototype.values()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- {{jsxref("Array.prototype.entries()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
