---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die **`delete()`** Methode von {{jsxref("WeakMap")}} Instanzen entfernt das angegebene Element aus diesem `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}

## Syntax

```js-nolint
weakMapInstance.delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das vom `WeakMap`-Objekt entfernt werden soll.

### Rückgabewert

`true`, wenn ein Element im `WeakMap`-Objekt erfolgreich entfernt wurde. `false`, wenn der Schlüssel nicht im `WeakMap` gefunden wird. Gibt immer `false` zurück, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

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
