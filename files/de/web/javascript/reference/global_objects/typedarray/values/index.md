---
title: TypedArray.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/values
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`values()`**-Methode von {{jsxref("TypedArray")}}-Instanzen gibt ein neues _[Array-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ zurück, das den Wert jedes Elements im typisierten Array durchläuft. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.values()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-values.html")}}

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Beschreibung

Siehe {{jsxref("Array.prototype.values()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Iteration mit einer for...of-Schleife

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
for (const n of values) {
  console.log(n);
}
```

### Alternative Iteration

```js
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
console.log(values.next().value); // 10
console.log(values.next().value); // 20
console.log(values.next().value); // 30
console.log(values.next().value); // 40
console.log(values.next().value); // 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.entries()")}}
- {{jsxref("TypedArray.prototype.keys()")}}
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- {{jsxref("Array.prototype.values()")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
