---
title: WeakMap.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/set
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`set()`** Methode von {{jsxref("WeakMap")}} Instanzen fügt ein neues Element mit einem angegebenen Schlüssel und Wert zu diesem `WeakMap` hinzu.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.set()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");
weakmap1.set(object2, "bar");

console.log(weakmap1.get(object1));
// Expected output: "foo"

console.log(weakmap1.get(object2));
// Expected output: "bar"
```

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Der Schlüssel des Eintrags, der zum `WeakMap` Objekt hinzugefügt werden soll.
- `value`
  - : Jeder Wert, der den Wert des Eintrags darstellt, der zum `WeakMap` Objekt hinzugefügt werden soll.

### Rückgabewert

Das `WeakMap` Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der set() Methode

```js
const wm = new WeakMap();
const obj = {};

// Add new elements to the WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Update an element in the WeakMap
wm.set(obj, "baz");

// Using a non-registered symbol as key
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
