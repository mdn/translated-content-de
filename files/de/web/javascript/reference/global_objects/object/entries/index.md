---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.entries()`** gibt ein Array der eigenen aufzählbaren, string-basierten Schlüssel-Wert-Paare eines Objekts zurück.

{{InteractiveExample("JavaScript Demo: Object.entries()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
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

Ein Array der eigenen aufzählbaren, string-basierten Schlüssel-Wert-Paare des angegebenen Objekts. Jedes Schlüssel-Wert-Paar ist ein Array mit zwei Elementen: Das erste Element ist der Eigenschaftsschlüssel (immer ein String), und das zweite Element ist der Eigenschaftswert.

## Beschreibung

`Object.entries()` gibt ein Array zurück, dessen Elemente Arrays entsprechen, die mit den aufzählbaren Schlüssel-Wert-Paaren direkt auf dem `object` übereinstimmen. Dies entspricht der Iteration mit einer {{jsxref("Statements/for...in", "for...in")}}-Schleife, mit dem Unterschied, dass eine `for...in`-Schleife auch Eigenschaften in der Prototypenkette auflistet. Die Reihenfolge des von `Object.entries()` zurückgegebenen Arrays entspricht der, die von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife geliefert wird.

Falls Sie nur die Eigenschaftsschlüssel benötigen, verwenden Sie {{jsxref("Object.keys()")}}. Falls Sie nur die Eigenschaftswerte benötigen, verwenden Sie {{jsxref("Object.values()")}}.

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

### Verwendung von Object.entries() auf primitiven Werten

Argumente, die keine Objekte sind, werden [zu Objekten konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht zu Objekten konvertiert werden und werfen sofort eine {{jsxref("TypeError")}}. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen primitiven Werte ein leeres Array zurückgeben.

```js
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Konvertierung eines Objekts in eine Map

Der Konstruktor {{jsxref("Map/Map", "Map()")}} akzeptiert ein Iterable von `entries`. Mit `Object.entries` können Sie einfach von {{jsxref("Object")}} zu {{jsxref("Map")}} konvertieren:

```js
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iteration über ein Objekt

Durch die Verwendung von [Array-Dekonstruktion](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring) können Sie Objekte einfach iterieren.

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
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
