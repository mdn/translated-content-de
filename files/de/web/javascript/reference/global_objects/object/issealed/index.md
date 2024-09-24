---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
l10n:
  sourceCommit: 2ae5490e54b413897242860dfe2328e825773bda
---

{{JSRef}}

Die statische Methode **`Object.isSealed()`** bestimmt, ob ein Objekt [versiegelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/seal) ist.

{{EmbedInteractiveExample("pages/js/object-issealed.html")}}

## Syntax

```js-nolint
Object.isSealed(obj)
```

### Parameter

- `obj`
  - : Das Objekt, das überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der anzeigt, ob das gegebene Objekt versiegelt ist oder nicht.

## Beschreibung

Gibt `true` zurück, wenn das Objekt versiegelt ist, andernfalls `false`. Ein Objekt ist versiegelt, wenn es nicht {{jsxref("Object/isExtensible", "extensible", "", 1)}} ist und alle seine Eigenschaften nicht konfigurierbar und somit nicht entfernbar sind (aber nicht notwendigerweise nicht schreibbar).

## Beispiele

### Verwenden von Object.isSealed

```js
// Objekte sind standardmäßig nicht versiegelt.
const empty = {};
Object.isSealed(empty); // false

// Wenn Sie ein leeres Objekt nicht erweiterbar machen,
// ist es zwangsläufig versiegelt.
Object.preventExtensions(empty);
Object.isSealed(empty); // true

// Dasselbe gilt nicht für ein nicht-leeres Objekt,
// es sei denn, seine Eigenschaften sind alle nicht konfigurierbar.
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // false

// Aber machen Sie sie alle nicht konfigurierbar
// und das Objekt wird versiegelt.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // true

// Der einfachste Weg, ein Objekt zu versiegeln, ist natürlich
// Object.seal.
const sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // true

// Ein versiegeltes Objekt ist definitionsgemäß nicht erweiterbar.
Object.isExtensible(sealed); // false

// Ein versiegeltes Objekt könnte eingefroren sein,
// muss es aber nicht.
Object.isFrozen(sealed); // true
// (alle Eigenschaften ebenfalls nicht überschreibbar)

const s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // false
// ('p' ist immer noch überschreibbar)

const s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // true
// (nur die Konfigurierbarkeit zählt für Zugriffseigenschaften)
```

### Argument ohne Objekt

In ES5 führt ein nicht-Objekt-Argument (ein primitiver Wert) bei Aufruf dieser Methode zu einem {{jsxref("TypeError")}}. In ES2015 wird `true` ohne Fehler zurückgegeben, wenn ein nicht-Objekt-Argument übergeben wird, da primitive Werte definitionsgemäß unveränderlich sind.

```js
Object.isSealed(1);
// TypeError: 1 ist kein Objekt (ES5-Code)

Object.isSealed(1);
// true                          (ES2015-Code)
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
