---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Methode **`Object.isExtensible()`** bestimmt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

{{EmbedInteractiveExample("pages/js/object-isextensible.html")}}

## Syntax

```js-nolint
Object.isExtensible(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das gegebene Objekt erweiterbar ist oder nicht.

## Beschreibung

Objekte sind standardmäßig erweiterbar: ihnen können neue Eigenschaften hinzugefügt werden, und ihr `[[Prototype]]` kann neu zugewiesen werden. Ein Objekt kann als nicht erweiterbar markiert werden, indem eine der Methoden {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, {{jsxref("Object.freeze()")}} oder {{jsxref("Reflect.preventExtensions()")}} verwendet wird.

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

In ES5 verursacht die Übergabe eines nicht-Objekt-Arguments (eines Primitivwertes) an diese Methode einen {{jsxref("TypeError")}}. In ES2015 wird `false` zurückgegeben, ohne dass ein Fehler auftritt, wenn ein nicht-Objekt-Argument übergeben wird, da Primitive definitionsgemäß unveränderlich sind.

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
