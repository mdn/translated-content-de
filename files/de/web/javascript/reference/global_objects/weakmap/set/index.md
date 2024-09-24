---
title: WeakMap.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`set()`**-Methode von {{jsxref("WeakMap")}}-Instanzen fügt ein neues Element mit einem angegebenen Schlüssel und Wert zu diesem `WeakMap` hinzu.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-set.html")}}

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Der Schlüssel des Eintrags, der dem `WeakMap`-Objekt hinzugefügt werden soll.
- `value`
  - : Ein beliebiger Wert, der den Wert des Eintrags darstellt, der dem `WeakMap`-Objekt hinzugefügt werden soll.

### Rückgabewert

Das `WeakMap`-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der set()-Methode

```js
const wm = new WeakMap();
const obj = {};

// Neue Elemente zum WeakMap hinzufügen
wm.set(obj, "foo").set(window, "bar"); // verkettbar

// Ein Element im WeakMap aktualisieren
wm.set(obj, "baz");

// Verwenden eines nicht registrierten Symbols als Schlüssel
const sym = Symbol("foo");
wm.set(sym, "baz");
wm.set(Symbol.iterator, "qux");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.has()")}}
