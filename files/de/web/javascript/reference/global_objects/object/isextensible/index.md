---
title: Object.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die statische Methode **`Object.isExtensible()`** bestimmt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

{{InteractiveExample("JavaScript Demo: Object.isExtensible()")}}

```js interactive-example
const object = {};

console.log(Object.isExtensible(object));
// Expected output: true

Object.preventExtensions(object);

console.log(Object.isExtensible(object));
// Expected output: false
```

## Syntax

```js-nolint
Object.isExtensible(obj)
```

### Parameter

- `obj`
  - : Das zu überprüfende Objekt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das gegebene Objekt erweiterbar ist oder nicht.

## Beschreibung

Objekte sind standardmäßig erweiterbar: Sie können neue Eigenschaften enthalten, und ihr `[[Prototype]]` kann neu zugewiesen werden. Ein Objekt kann als nicht erweiterbar markiert werden, indem eine der folgenden Methoden verwendet wird: {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, {{jsxref("Object.freeze()")}}, oder {{jsxref("Reflect.preventExtensions()")}}.

## Beispiele

### Verwendung von Object.isExtensible

```js
// New objects are extensible.
const empty = {};
Object.isExtensible(empty); // true

// They can be made un-extensible
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false
```

### Nicht-Objekt-Argument

In ES5 verursacht es einen {{jsxref("TypeError")}}, wenn das Argument dieser Methode kein Objekt (eine Primitive) ist. In ES2015 wird `false` ohne Fehler zurückgegeben, wenn ein Nicht-Objekt-Argument übergeben wird, da Primitive per Definition unveränderlich sind.

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
