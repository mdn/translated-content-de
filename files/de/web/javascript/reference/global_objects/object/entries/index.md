---
title: Object.entries()
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.entries()`** gibt ein Array der eigenen aufzählbaren, mit einem Zeichenfolgen-Schlüssel versehenen Schlüssel-Wert-Paare eines gegebenen Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.entries()")}}

```js interactive-example
const object1 = {
  a: "some string",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
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

Ein Array der eigenen aufzählbaren, mit einem Zeichenfolgen-Schlüssel versehenen Schlüssel-Wert-Paare des gegebenen Objekts. Jedes Schlüssel-Wert-Paar ist ein Array mit zwei Elementen: Das erste Element ist der Schlüssel der Eigenschaft (immer eine Zeichenfolge), und das zweite Element ist der Wert der Eigenschaft.

## Beschreibung

`Object.entries()` gibt ein Array zurück, dessen Elemente Arrays sind, die den aufzählbaren, mit einem Zeichenfolgen-Schlüssel versehenen Schlüssel-Wert-Paaren entsprechen, die direkt auf dem `object` gefunden werden. Dies entspricht dem Iterieren mit einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, außer dass eine `for...in`-Schleife auch Eigenschaften in der Prototypkette aufzählt. Die Reihenfolge des von `Object.entries()` zurückgegebenen Arrays entspricht der, die von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird.

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

### Verwendung von Object.entries() auf Primitiven

Nicht-Objekt-Argumente werden [in Objekte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht in Objekte umgewandelt werden und führen sofort zu einem {{jsxref("TypeError")}}. Nur Zeichenfolgen können eigene aufzählbare Eigenschaften haben, während alle anderen Primitiven ein leeres Array zurückgeben.

```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Konvertierung eines Objekts in eine Map

Der {{jsxref("Map/Map", "Map()")}}-Konstruktor akzeptiert ein iterables Element von `entries`. Mit `Object.entries` können Sie leicht von einem {{jsxref("Object")}} zu einer {{jsxref("Map")}} konvertieren:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iterieren durch ein Objekt

Mit [Array-Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) können Sie einfach durch Objekte iterieren.

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
- [es-shims Polyfill von `Object.entries`](https://www.npmjs.com/package/object.entries)
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
