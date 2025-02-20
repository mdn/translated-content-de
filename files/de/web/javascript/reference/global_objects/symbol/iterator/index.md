---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.iterator`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.iterator`. Das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) verwendet dieses Symbol, um die Methode aufzurufen, die den Iterator für ein Objekt zurückgibt. Damit ein Objekt iterierbar ist, muss es einen `[Symbol.iterator]`-Schlüssel besitzen.

{{InteractiveExample("JavaScript Demo: Symbol.iterator")}}

```js interactive-example
const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);
// Expected output: Array [1, 2, 3]
```

## Wert

Das wohlbekannte Symbol `Symbol.iterator`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Immer wenn ein Objekt iteriert werden muss (zum Beispiel zu Beginn einer `for...of`-Schleife), wird dessen Methode `[Symbol.iterator]()` ohne Argumente aufgerufen, und der zurückgegebene **Iterator** wird verwendet, um die zu iterierenden Werte zu erhalten.

Einige eingebaute Typen haben ein Standardverhalten für Iterationen, während andere Typen (wie z. B. {{jsxref("Object")}}) dies nicht haben. Einige eingebaute Typen mit einer `[Symbol.iterator]()`-Methode sind:

- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)

Weitere Informationen finden Sie unter [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

## Beispiele

### Benutzerdefinierte Iterables

Wir können unsere eigenen Iterables so erstellen:

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

Oder Iterables können direkt in einer Klasse oder einem Objekt unter Verwendung einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) definiert werden:

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

### Nicht korrekt geformte Iterables

Wenn die `[Symbol.iterator]()`-Methode eines Iterables kein Iterator-Objekt zurückgibt, ist es ein nicht korrekt geformtes Iterable. Die Verwendung eines solchen Iterables führt wahrscheinlich zu Laufzeitfehlern oder fehlerhaftem Verhalten:

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

- [Polyfill für `Symbol.iterator` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
- [`Segments.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
