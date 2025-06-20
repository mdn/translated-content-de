---
title: Iterator.from()
short-title: from()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/from
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Iterator.from()`** erstellt ein neues {{jsxref("Iterator")}} Objekt aus einem Iterator oder iterierbaren Objekt.

## Syntax

```js-nolint
from(object)
```

### Parameter

- `object`
  - : Ein Objekt, das das [iterate-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) oder das [iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol) implementiert.

### Rückgabewert

Wenn `object` ein iterierbares Objekt ist, wird seine `[Symbol.iterator]()`-Methode aufgerufen, um den Iterator zu erhalten. Andernfalls wird angenommen, dass `object` ein Iterator ist. Wenn der Iterator bereits {{jsxref("Operators/instanceof", "instanceof")}} {{jsxref("Iterator")}} ist (was bedeutet, dass er `Iterator.prototype` in seiner Prototyp-Kette hat), wird er direkt zurückgegeben. Andernfalls wird ein neues {{jsxref("Iterator")}} Objekt erstellt, das den ursprünglichen Iterator umschließt.

## Beschreibung

Diese Methode existiert, um benutzerdefinierte Iteratoren, die wahrscheinlich von Bibliotheken exportiert werden, in [korrekte Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#proper_iterators) zu konvertieren. Alle von `Iterator.from()` zurückgegebenen Iterator-Objekte erben von einem gemeinsamen Prototypenobjekt, das die folgenden Methoden hat:

- `next()`
  - : Ruft die `next()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück.
- `return()`
  - : Ruft die `return()`-Methode des zugrunde liegenden Iterators auf und gibt das Ergebnis zurück, oder gibt `{ value: undefined, done: true }` zurück, wenn der zugrunde liegende Iterator keine `return()`-Methode hat.

## Beispiele

### Konvertierung eines iterierbaren Objekts in einen korrekten Iterator

Da `obj` bereits ein iterierbares Objekt ist, das beim Aufrufen seiner `[Symbol.iterator]()`-Methode einen korrekten Iterator zurückgibt, gibt `Iterator.from(obj)` denselben Iterator zurück.

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

Da `obj2` ein iterierbares Objekt ist, das einen nicht korrekten Iterator zurückgibt, wenn seine `[Symbol.iterator]()`-Methode aufgerufen wird, gibt `Iterator.from(obj2)` einen neuen Iterator zurück, der den ursprünglichen Iterator umschließt.

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

### Konvertierung eines Iterators in einen korrekten Iterator

Da `obj` bereits ein korrekter Iterator ist, gibt `Iterator.from(obj)` sich selbst zurück.

```js
const obj = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const iterator = Iterator.from(obj);
console.log(iterator === obj); // true
```

Da `obj2` ein nicht korrekter Iterator ist, gibt `Iterator.from(obj2)` einen neuen Iterator zurück, der den ursprünglichen Iterator umschließt.

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

- [Polyfill von `Iterator.from` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.from`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
