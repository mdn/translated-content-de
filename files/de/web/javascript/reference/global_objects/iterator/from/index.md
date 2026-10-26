---
title: Iterator.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/from
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Iterator.from()`** erstellt aus einem Iterator oder einem iterierbaren Objekt ein neues {{jsxref("Iterator")}}-Objekt.

## Syntax

```js-nolint
Iterator.from(object)
```

### Parameter

- `object`
  - : Ein Objekt, das das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder das [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert.

### Rückgabewert

Wenn `object` iterierbar ist, wird seine Methode `[Symbol.iterator]()` aufgerufen, um den Iterator zu erhalten. Andernfalls wird angenommen, dass `object` ein Iterator ist. Wenn der Iterator bereits eine Instanz von {{jsxref("Iterator")}} ist (das heißt, er hat `Iterator.prototype` in seiner Prototypkette), wird er direkt zurückgegeben. Andernfalls wird ein neues {{jsxref("Iterator")}}-Objekt erstellt, das den ursprünglichen Iterator umschließt.

## Beschreibung

Diese Methode dient dazu, benutzerdefinierte Iteratoren, beispielsweise aus Bibliotheken, in [reguläre Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#proper_iterators) umzuwandeln. Alle von `Iterator.from()` zurückgegebenen Iterator-Objekte erben von einem gemeinsamen Prototypobjekt mit den folgenden Methoden:

- `next()`
  - : Ruft die Methode `next()` des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die Methode `return()` des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück. Wenn der zugrunde liegende Iterator keine Methode `return()` hat, wird `{ value: undefined, done: true }` zurückgegeben.

## Beispiele

### Ein iterierbares Objekt in einen regulären Iterator umwandeln

Da `obj` bereits ein iterierbares Objekt ist, dessen Methode `[Symbol.iterator]()` einen regulären Iterator zurückgibt, gibt `Iterator.from(obj)` denselben Iterator zurück.

```js
const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const obj = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj);
console.log(iterator2 === iterator); // true
```

Da `obj2` ein iterierbares Objekt ist, dessen Methode `[Symbol.iterator]()` einen nicht regulären Iterator zurückgibt, gibt `Iterator.from(obj2)` einen neuen Iterator zurück, der den ursprünglichen Iterator umschließt.

```js
const iterator = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const obj2 = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj2);
console.log(iterator2 === iterator); // false
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
```

### Einen Iterator in einen regulären Iterator umwandeln

Da `obj` bereits ein regulärer Iterator ist, gibt `Iterator.from(obj)` ihn selbst zurück.

```js
const obj = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const iterator = Iterator.from(obj);
console.log(iterator === obj); // true
```

Da `obj2` ein nicht regulärer Iterator ist, gibt `Iterator.from(obj2)` einen neuen Iterator zurück, der den ursprünglichen Iterator umschließt.

```js
const obj2 = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const iterator = Iterator.from(obj2);
console.log(iterator === obj2); // false
console.log(iterator.next()); // { value: 0, done: false }
console.log(obj2.next()); // { value: 1, done: false }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.from` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.from` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
