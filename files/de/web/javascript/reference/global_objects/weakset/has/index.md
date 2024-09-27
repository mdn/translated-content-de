---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`has()`**-Methode von {{jsxref("WeakSet")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob ein Objekt in diesem `WeakSet` vorhanden ist oder nicht.

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## Syntax

```js-nolint
has(value)
```

### Parameter

- `value`
  - : Der zu testende Wert auf Vorhandensein im `WeakSet`.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Wert im `WeakSet`-Objekt vorhanden ist; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der `has()`-Methode

```js
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // returns true
ws.has(obj); // returns false

// Storing a non-registered symbol
const sym = Symbol("foo");
ws.add(sym);
ws.add(Symbol.iterator);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.delete()")}}
