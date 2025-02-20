---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Object.isSealed()`** überprüft, ob ein Objekt [versiegelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) ist.

{{InteractiveExample("JavaScript Demo: Object.isSealed()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

console.log(Object.isSealed(object1));
// Expected output: false

Object.seal(object1);

console.log(Object.isSealed(object1));
// Expected output: true
```

## Syntax

```js-nolint
Object.isSealed(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das angegebene Objekt versiegelt ist oder nicht.

## Beschreibung

Gibt `true` zurück, wenn das Objekt versiegelt ist, andernfalls `false`. Ein Objekt ist versiegelt, wenn es nicht {{jsxref("Object/isExtensible", "erweiterbar", "", 1)}} ist und alle seine Eigenschaften nicht konfigurierbar sind und daher nicht entfernt werden können (aber nicht unbedingt schreibgeschützt).

## Beispiele

### Verwendung von Object.isSealed

```js
// Objects aren't sealed by default.
const empty = {};
Object.isSealed(empty); // false

// If you make an empty object non-extensible,
// it is vacuously sealed.
Object.preventExtensions(empty);
Object.isSealed(empty); // true

// The same is not true of a non-empty object,
// unless its properties are all non-configurable.
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // false

// But make them all non-configurable
// and the object becomes sealed.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // true

// The easiest way to seal an object, of course,
// is Object.seal.
const sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // true

// A sealed object is, by definition, non-extensible.
Object.isExtensible(sealed); // false

// A sealed object might be frozen,
// but it doesn't have to be.
Object.isFrozen(sealed); // true
// (all properties also non-writable)

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false
// ('p' is still writable)

const s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // true
// (only configurability matters for accessor properties)
```

### Nicht-Objekt-Argument

In ES5 verursacht diese Methode einen {{jsxref("TypeError")}}, wenn das Argument kein Objekt (ein primitives Datenelement) ist. In ES2015 wird `true` zurückgegeben, ohne dass ein Fehler auftritt, wenn ein Nicht-Objekt-Argument übergeben wird, da primitive Datenelemente per Definition unveränderlich sind.

```js
Object.isSealed(1);
// TypeError: 1 is not an object (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
