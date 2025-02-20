---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`delete()`**-Methode von {{jsxref("WeakMap")}}-Instanzen entfernt das angegebene Element aus diesem `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.delete()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.delete(object1));
// Expected output: true

console.log(weakmap1.has(object1));
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

`true`, wenn ein Element im `WeakMap`-Objekt erfolgreich entfernt wurde. `false`, wenn der Schlüssel nicht im `WeakMap` gefunden wird. Liefert immer `false`, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der delete()-Methode

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
