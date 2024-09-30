---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

Die statische Methode **`Object.entries()`** gibt ein Array der eigenen aufzählbaren, mit einem String indizierten Schlüssel-Werte-Paare eines gegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Syntax

```js-nolint
Object.entries(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array der eigenen aufzählbaren, mit einem String indizierten Schlüssel-Werte-Paare des gegebenen Objekts. Jedes Schlüssel-Werte-Paar ist ein Array mit zwei Elementen: Das erste Element ist der Eigenschaftsschlüssel (der immer ein String ist), und das zweite Element ist der Eigenschaftswert.

## Beschreibung

`Object.entries()` gibt ein Array zurück, dessen Elemente Arrays sind, die den aufzählbaren, mit einem String indizierten Schlüssel-Werte-Paaren entsprechen, die direkt auf dem `object` gefunden werden. Dies ist dasselbe wie das Iterieren mit einer {{jsxref("Statements/for...in", "for...in")}} Schleife, außer dass eine `for...in` Schleife auch Eigenschaften in der Prototypenkette aufzählt. Die Reihenfolge des von `Object.entries()` zurückgegebenen Arrays ist dieselbe wie die, die eine {{jsxref("Statements/for...in", "for...in")}} Schleife bietet.

Wenn Sie nur die Eigenschaftsschlüssel benötigen, verwenden Sie stattdessen {{jsxref("Object.keys()")}}. Wenn Sie nur die Eigenschaftswerte benötigen, verwenden Sie stattdessen {{jsxref("Object.values()")}}.

## Beispiele

### Verwendung von Object.entries()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is a non-enumerable property
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

### Verwendung von Object.entries() bei Primitiven

Argumente, die keine Objekte sind, werden [in Objekte konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte konvertiert werden und werfen sofort einen {{jsxref("TypeError")}}. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen primitiven Werte ein leeres Array zurückgeben.

```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Umwandeln eines Objekts in eine Map

Der {{jsxref("Map/Map", "Map()")}}-Konstruktor akzeptiert ein Iterable von `entries`. Mit `Object.entries` können Sie einfach von einem {{jsxref("Object")}} zu einer {{jsxref("Map")}} konvertieren:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iterieren durch ein Objekt

Mit [Array-Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring) können Sie einfach durch Objekte iterieren.

```js
// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
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
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
