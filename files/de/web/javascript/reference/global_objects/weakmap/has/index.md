---
title: WeakMap.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`has()`** Methode von {{jsxref("WeakMap")}} Instanzen gibt einen Boolean-Wert zurück, der angibt, ob ein Element mit dem angegebenen Schlüssel in diesem `WeakMap` existiert oder nicht.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-has.html")}}

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, dessen Vorhandensein im `WeakMap` Objekt überprüft werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Schlüssel im `WeakMap` Objekt existiert; andernfalls `false`. Gibt immer `false` zurück, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der has Methode

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
