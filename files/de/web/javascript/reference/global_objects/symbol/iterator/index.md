---
title: Symbol.iterator
short-title: iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.iterator`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.iterator`. Das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) verwendet dieses Symbol, um die Methode zu finden, die den Iterator für ein Objekt zurückgibt. Damit ein Objekt iterierbar ist, muss es einen `[Symbol.iterator]`-Schlüssel besitzen.

{{InteractiveExample("JavaScript Demo: Symbol.iterator")}}

```js interactive-example
const iterable = {};

iterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable]);
// Expected output: Array [1, 2, 3]
```

## Wert

Das bekannte Symbol `Symbol.iterator`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Immer wenn über ein Objekt iteriert werden soll (beispielsweise zu Beginn einer `for...of`-Schleife), wird seine Methode `[Symbol.iterator]()` ohne Argumente aufgerufen. Der zurückgegebene **Iterator** wird verwendet, um die Werte für die Iteration abzurufen.

Einige integrierte Typen haben ein Standardverhalten für die Iteration, andere Typen (wie {{jsxref("Object")}}) hingegen nicht. Zu den integrierten Typen mit einer Methode `[Symbol.iterator]()` gehören:

- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)

Weitere Informationen finden Sie unter [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols).

## Beispiele

### Benutzerdefinierte iterierbare Objekte

Sie können eigene iterierbare Objekte wie folgt erstellen:

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

Alternativ können iterierbare Objekte mithilfe einer [berechneten Eigenschaft](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) direkt innerhalb einer Klasse oder eines Objekts definiert werden:

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

### Nicht wohlgeformte iterierbare Objekte

Wenn die Methode `[Symbol.iterator]()` eines iterierbaren Objekts kein Iteratorobjekt zurückgibt, ist das iterierbare Objekt nicht wohlgeformt. Seine Verwendung als iterierbares Objekt führt wahrscheinlich zu Laufzeitausnahmen oder fehlerhaftem Verhalten:

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

- [Polyfill für `Symbol.iterator` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- [`TypedArray.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- [`Map.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator)
- [`Set.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
- [`arguments[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
- [`Segments.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
