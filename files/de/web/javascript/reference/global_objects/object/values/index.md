---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
l10n:
  sourceCommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{JSRef}}

Die statische Methode **`Object.values()`** gibt ein Array der eigenständigen, aufzählbaren, string-indizierten Eigenschaftswerte eines angegebenen Objekts zurück.

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Syntax

```js-nolint
Object.values(obj)
```

### Parameter

- `obj`
  - : Ein Objekt.

### Rückgabewert

Ein Array, das die eigenständigen, aufzählbaren, string-indizierten Eigenschaftswerte des angegebenen Objekts enthält.

## Beschreibung

`Object.values()` gibt ein Array zurück, dessen Elemente die Werte der aufzählbaren, string-indizierten Eigenschaften sind, die direkt auf dem `object` gefunden werden. Dies entspricht dem Durchlaufen mit einer {{jsxref("Statements/for...in", "for...in")}} Schleife, außer dass eine `for...in` Schleife auch die Eigenschaften in der Prototyp-Kette aufzählt. Die Reihenfolge des durch `Object.values()` zurückgegebenen Arrays ist die gleiche wie die, die durch eine {{jsxref("Statements/for...in", "for...in")}} Schleife bereitgestellt wird.

Wenn Sie die Eigenschaftsschlüssel benötigen, verwenden Sie stattdessen {{jsxref("Object.keys()")}}. Wenn Sie sowohl die Eigenschaftsschlüssel als auch die Werte benötigen, verwenden Sie {{jsxref("Object.entries()")}}.

## Beispiele

### Verwendung von Object.values()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-ähnliches Objekt
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-ähnliches Objekt mit zufälliger Schlüsselreihenfolge
// Bei Verwendung von numerischen Schlüsseln werden die Werte in der numerischen Reihenfolge der Schlüssel zurückgegeben
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo ist eine nicht aufzählbare Eigenschaft
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
console.log(Object.values(myObj)); // ['bar']
```

### Verwendung von Object.values() auf Primitiven

Nicht-Objekt-Argumente werden [zu Objekten gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können nicht zu Objekten gezwungen werden und werfen einen {{jsxref("TypeError")}} im Voraus. Nur Strings können eigene aufzählbare Eigenschaften haben, während alle anderen Primitiven ein leeres Array zurückgeben.

```js
// Strings haben Indizes als eigene aufzählbare Eigenschaften
console.log(Object.values("foo")); // ['f', 'o', 'o']

// Andere Primitive außer undefined und null haben keine eigenen Eigenschaften
console.log(Object.values(100)); // []
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
