---
title: Object.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Object.entries()`** gibt ein Array mit den Schlüssel-Wert-Paaren der eigenen, aufzählbaren Eigenschaften eines Objekts zurück, deren Schlüssel Strings sind.

{{InteractiveExample("JavaScript Demo: Object.entries()")}}

```js interactive-example
const object = {
  a: "some string",
  b: 42,
};

for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: some string"
// "b: 42"
```

## Syntax

```js-nolint
Object.entries(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array mit den Schlüssel-Wert-Paaren der eigenen, aufzählbaren Eigenschaften des angegebenen Objekts, deren Schlüssel Strings sind. Jedes Schlüssel-Wert-Paar ist ein Array mit zwei Elementen: Das erste Element ist der Eigenschaftsschlüssel (immer ein String), das zweite der Eigenschaftswert.

## Beschreibung

`Object.entries()` gibt ein Array zurück, dessen Elemente Arrays sind, die den eigenen, aufzählbaren Schlüssel-Wert-Paaren von `object` entsprechen, deren Schlüssel Strings sind. Das entspricht der Iteration mit einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, mit dem Unterschied, dass eine `for...in`-Schleife auch Eigenschaften in der Prototypkette aufzählt. Die Reihenfolge der Elemente im von `Object.entries()` zurückgegebenen Array entspricht der Reihenfolge bei einer {{jsxref("Statements/for...in", "for...in")}}-Schleife.

Wenn Sie nur die Eigenschaftsschlüssel benötigen, verwenden Sie stattdessen {{jsxref("Object.keys()")}}. Wenn Sie nur die Eigenschaftswerte benötigen, verwenden Sie stattdessen {{jsxref("Object.values()")}}.

## Beispiele

### Object.entries() verwenden

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

### Object.entries() mit primitiven Werten verwenden

Argumente, die keine Objekte sind, werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und lösen sofort einen {{jsxref("TypeError")}} aus. Nur Strings können eigene, aufzählbare Eigenschaften haben; bei allen anderen primitiven Werten wird ein leeres Array zurückgegeben.

```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Ein Objekt in eine Map umwandeln

Der {{jsxref("Map/Map", "Map()")}}-Konstruktor akzeptiert ein iterierbares Objekt mit `entries`. Mit `Object.entries` können Sie ein {{jsxref("Object")}} einfach in eine {{jsxref("Map")}} umwandeln:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Über ein Objekt iterieren

Mit [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) können Sie einfach über Objekte iterieren.

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

- [Polyfill für `Object.entries` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.entries` von es-shims](https://www.npmjs.com/package/object.entries)
- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
