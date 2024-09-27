---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

Die **`delete()`** Methode von {{jsxref("WeakSet")}} Instanzen entfernt das angegebene Element aus diesem `WeakSet`.

{{EmbedInteractiveExample("pages/js/weakset-prototype-delete.html")}}

## Syntax

```js-nolint
weakSetInstance.delete(value)
```

### Parameter

- `value`
  - : Der Wert, der aus dem `WeakSet`-Objekt entfernt werden soll.

### Rückgabewert

`true` wenn ein Element im `WeakSet`-Objekt erfolgreich entfernt wurde. `false` wenn der `value` nicht im `WeakSet` gefunden wird. Gibt immer `false` zurück, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwenden der delete() Methode

```js
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj); // Returns false. No obj found to be deleted.
ws.delete(window); // Returns true. Successfully removed.

ws.has(window); // Returns false. The window is no longer present in the WeakSet.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.has()")}}
