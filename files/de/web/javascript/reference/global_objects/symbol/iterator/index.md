---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Symbol.iterator`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.iterator`. Das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sucht dieses Symbol für die Methode, die den Iterator für ein Objekt zurückgibt. Damit ein Objekt iterierbar ist, muss es einen `[Symbol.iterator]` Schlüssel haben.

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## Wert

Das bekannte Symbol `Symbol.iterator`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Wann immer ein Objekt iteriert werden muss (zum Beispiel zu Beginn einer `for...of` Schleife), wird seine `[Symbol.iterator]()` Methode ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Einige eingebaute Typen haben ein Standard-Iterationsverhalten, während andere Typen (wie {{jsxref("Object")}}) dies nicht haben. Einige eingebaute Typen mit einer `[Symbol.iterator]()` Methode sind:

- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)

Siehe auch [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols) für weitere Informationen.

## Beispiele

### Benutzerspezifische Iterables

Wir können unsere eigenen Iterables wie folgt erstellen:

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

Oder Iterables können direkt innerhalb einer Klasse oder eines Objekts unter Verwendung einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) definiert werden:

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(...new Foo()); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
```

### Nicht wohlgeformte Iterables

Wenn die `[Symbol.iterator]()` Methode eines Iterables kein Iterator-Objekt zurückgibt, dann ist es ein nicht wohlgeformtes Iterable. Die Verwendung eines solchen führt wahrscheinlich zu Laufzeitausnahmen oder fehlerhaftem Verhalten:

```js example-bad
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.iterator` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
- [`Segments.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
