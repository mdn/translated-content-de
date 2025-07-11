---
title: Object.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Object.isExtensible()`** bestimmt, ob ein Objekt erweiterbar ist (ob ihm neue Eigenschaften hinzugefügt werden können).

{{InteractiveExample("JavaScript Demo: Object.isExtensible()")}}

```js interactive-example
const object1 = {};

console.log(Object.isExtensible(object1));
// Expected output: true

Object.preventExtensions(object1);

console.log(Object.isExtensible(object1));
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

Objekte sind standardmäßig erweiterbar: ihnen können neue Eigenschaften hinzugefügt werden und ihr `[[Prototype]]` kann neu zugewiesen werden. Ein Objekt kann mit einer der Methoden {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, {{jsxref("Object.freeze()")}} oder {{jsxref("Reflect.preventExtensions()")}} als nicht erweiterbar gekennzeichnet werden.

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

In ES5 löst die Methode einen {{jsxref("TypeError")}} aus, wenn das Argument kein Objekt (ein primitiver Wert) ist. In ES2015 wird `false` zurückgegeben, ohne dass ein Fehler auftritt, wenn ein Nicht-Objekt-Argument übergeben wird, da primitive Werte per Definition unveränderlich sind.

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
