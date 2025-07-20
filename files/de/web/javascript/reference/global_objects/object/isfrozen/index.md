---
title: Object.isFrozen()
short-title: isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Object.isFrozen()`** bestimmt, ob ein Objekt {{jsxref("Object/freeze", "eingefroren", "", 1)}} ist.

{{InteractiveExample("JavaScript Demo: Object.isFrozen()")}}

```js interactive-example
const object = {
  foo: 42,
};

console.log(Object.isFrozen(object));
// Expected output: false

Object.freeze(object);

console.log(Object.isFrozen(object));
// Expected output: true
```

## Syntax

```js-nolint
Object.isFrozen(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das gegebene Objekt eingefroren ist oder nicht.

## Beschreibung

Ein Objekt ist eingefroren, wenn und nur wenn es nicht [erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) ist, alle seine Eigenschaften nicht konfigurierbar sind und alle seine Dateneigenschaften (das heißt, Eigenschaften, die keine Accessor-Eigenschaften mit Getter- oder Setter-Komponenten sind) nicht beschreibbar sind.

## Beispiele

### Verwendung von Object.isFrozen

```js
// A new object is extensible, so it is not frozen.
Object.isFrozen({}); // false

// An empty object which is not extensible
// is vacuously frozen.
const vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // true

// A new object with one property is also extensible,
// ergo not frozen.
const oneProp = { p: 42 };
Object.isFrozen(oneProp); // false

// Preventing extensions to the object still doesn't
// make it frozen, because the property is still
// configurable (and writable).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // false

// Deleting that property makes the object vacuously frozen.
delete oneProp.p;
Object.isFrozen(oneProp); // true

// A non-extensible object with a non-writable
// but still configurable property is not frozen.
const nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
  writable: false,
}); // make non-writable
Object.isFrozen(nonWritable); // false

// Changing that property to non-configurable
// then makes the object frozen.
Object.defineProperty(nonWritable, "e", {
  configurable: false,
}); // make non-configurable
Object.isFrozen(nonWritable); // true

// A non-extensible object with a non-configurable
// but still writable property also isn't frozen.
const nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // false

// Changing that property to non-writable
// then makes the object frozen.
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // true

// A non-extensible object with a configurable
// accessor property isn't frozen.
const accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // false

// When we make that property non-configurable it becomes frozen.
Object.defineProperty(accessor, "food", {
  configurable: false,
});
Object.isFrozen(accessor); // true

// But the easiest way for an object to be frozen
// is if Object.freeze has been called on it.
const frozen = { 1: 81 };
Object.isFrozen(frozen); // false
Object.freeze(frozen);
Object.isFrozen(frozen); // true

// By definition, a frozen object is non-extensible.
Object.isExtensible(frozen); // false

// Also by definition, a frozen object is sealed.
Object.isSealed(frozen); // true
```

### Argument ohne Objekt

In ES5 wird ein {{jsxref("TypeError")}} ausgelöst, wenn das Argument dieser Methode kein Objekt (ein Primitive) ist. In ES2015 wird `true` zurückgegeben und es werden keine Fehler ausgelöst, wenn ein Argument, das kein Objekt ist, übergeben wird, da Primitiven definitionsgemäß unveränderlich sind.

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
