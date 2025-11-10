---
title: WeakMap.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`delete()`** Methode von {{jsxref("WeakMap")}}-Instanzen entfernt den durch den Schlüssel angegebenen Eintrag aus diesem `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap = new WeakMap();
const object = {};

weakmap.set(object, 42);

console.log(weakmap.delete(object));
// Expected output: true

console.log(weakmap.has(object));
// Expected output: false
```

## Syntax

```js-nolint
weakMapInstance.delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Eintrags, der aus dem `WeakMap`-Objekt entfernt werden soll. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.

### Rückgabewert

`true` wenn ein Eintrag im `WeakMap`-Objekt erfolgreich entfernt wurde. `false` wenn der Schlüssel im `WeakMap` nicht gefunden wird. Gibt immer `false` zurück, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von delete()

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.delete(window); // Returns true. Successfully removed.

wm.has(window); // Returns false. The window object is no longer in the WeakMap.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
