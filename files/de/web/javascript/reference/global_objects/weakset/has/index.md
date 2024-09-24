---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`has()`** Methode von {{jsxref("WeakSet")}} Instanzen gibt ein boolean zurück, welches anzeigt, ob ein Objekt in diesem `WeakSet` existiert oder nicht.

{{EmbedInteractiveExample("pages/js/weakset-prototype-has.html")}}

## Syntax

```js-nolint
has(value)
```

### Parameter

- `value`
  - : Der Wert, dessen Vorhandensein im `WeakSet` getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Wert im `WeakSet`-Objekt existiert; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der `has()` Methode

```js
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // gibt true zurück
ws.has(obj); // gibt false zurück

// Speichern eines nicht registrierten Symbols
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
