---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`get()`**-Methode von {{jsxref("WeakMap")}}-Instanzen gibt ein bestimmtes Element aus diesem `WeakMap` zurück.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `WeakMap`-Objekt zurückgegeben werden soll.

### Rückgabewert

Das Element, das dem angegebenen Schlüssel im `WeakMap`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird {{jsxref("undefined")}} zurückgegeben. Immer `undefined`, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der get()-Methode

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Returns "foo".
wm.get("baz"); // Returns undefined.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
