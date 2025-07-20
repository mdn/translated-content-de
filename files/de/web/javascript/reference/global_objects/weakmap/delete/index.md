---
title: WeakMap.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`delete()`**-Methode von {{jsxref("WeakMap")}}-Instanzen entfernt das angegebene Element aus diesem `WeakMap`.

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
  - : Der Schlüssel des zu entfernenden Elements aus dem `WeakMap`-Objekt.

### Rückgabewert

`true`, wenn ein Element im `WeakMap`-Objekt erfolgreich entfernt wurde. `false`, wenn der Schlüssel nicht im `WeakMap` gefunden wird. Gibt immer `false` zurück, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der delete() Methode

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
