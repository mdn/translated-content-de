---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

Die statische Methode **`Object.entries()`** gibt ein Array aus den eigenen aufzählbaren, string-indizierten Schlüssel-Wert-Paaren eines gegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Syntax

```js-nolint
Object.entries(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array der eigenen aufzählbaren, string-indizierten Schlüssel-Wert-Paare des gegebenen Objekts. Jedes Schlüssel-Wert-Paar ist ein Array mit zwei Elementen: Das erste Element ist der Schlüssel der Eigenschaft (der immer ein String ist), und das zweite Element ist der Wert der Eigenschaft.

## Beschreibung

`Object.entries()` gibt ein Array zurück, dessen Elemente Arrays sind, die den aufzählbaren, string-indizierten Schlüssel-Wert-Paaren entsprechen, die direkt auf dem `object` gefunden werden. Dies ist dasselbe wie das Iterieren mit einer {{jsxref("Statements/for...in", "for...in")}} Schleife, außer dass eine `for...in` Schleife auch Eigenschaften in der Prototypkette aufzählt. Die Reihenfolge des von `Object.entries()` zurückgegebenen Arrays ist die gleiche wie die, die von einer {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird.

Wenn Sie nur die Schlüssel der Eigenschaften benötigen, verwenden Sie stattdessen {{jsxref("Object.keys()")}}. Wenn Sie nur die Werte der Eigenschaften benötigen, verwenden Sie stattdessen {{jsxref("Object.values()")}}.

## Beispiele

### Verwendung von Object.entries()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo ist eine nicht-auflistbare Eigenschaft
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### Verwendung von Object.entries() mit primitiven Datentypen

Nicht-Objekt-Argumente werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und lösen sofort einen {{jsxref("TypeError")}} aus. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen primitiven Datentypen ein leeres Array zurückgeben.

```js
// Strings haben Indizes als eigene aufzählbare Eigenschaften
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Andere primitive Datentypen außer undefined und null haben keine eigenen Eigenschaften
console.log(Object.entries(100)); // []
```

### Umwandeln eines Objekts in eine Map

Der {{jsxref("Map/Map", "Map()")}} Konstruktor akzeptiert ein iterierbares Objekt von `entries`. Mit `Object.entries` können Sie leicht von einem {{jsxref("Object")}} zu einer {{jsxref("Map")}} umwandeln:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iteration durch ein Objekt

Unter Verwendung der [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring) können Sie einfach durch Objekte iterieren.

```js
// Mit for...of Schleife
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Mit Array-Methoden
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.entries` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
