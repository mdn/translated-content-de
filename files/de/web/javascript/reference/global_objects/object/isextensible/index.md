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

Objekte sind standardmäßig erweiterbar: Es können ihnen neue Eigenschaften hinzugefügt werden, und ihr `[[Prototype]]` kann neu zugewiesen werden. Ein Objekt kann mit einer der folgenden Methoden als nicht erweiterbar markiert werden: {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, {{jsxref("Object.freeze()")}} oder {{jsxref("Reflect.preventExtensions()")}}.

## Beispiele

### Verwendung von Object.isExtensible

```js
// Neue Objekte sind erweiterbar.
const empty = {};
Object.isExtensible(empty); // true

// Sie können nicht erweiterbar gemacht werden
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Versiegelte Objekte sind per Definition nicht erweiterbar.
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// Gefrorene Objekte sind ebenfalls per Definition nicht erweiterbar.
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false
```

### Argument ohne Objekt

In ES5 führt ein Argument, das kein Objekt ist (ein primitiver Wert), zu einem {{jsxref("TypeError")}}. In ES2015 wird `false` zurückgegeben, ohne dass ein Fehler auftritt, wenn ein Argument ohne Objekt übergeben wird, da primitive Werte per Definition unveränderlich sind.

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
