---
title: WeakSet.prototype.delete()
short-title: delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`delete()`** Methode von {{jsxref("WeakSet")}} Instanzen entfernt den angegebenen Wert aus diesem Set, falls er im Set vorhanden ist.

{{InteractiveExample("JavaScript Demo: WeakSet.prototype.delete()")}}

```js interactive-example
const weakset = new WeakSet();
const object = {};

weakset.add(object);

console.log(weakset.has(object));
// Expected output: true

weakset.delete(object);

console.log(weakset.has(object));
// Expected output: false
```

## Syntax

```js-nolint
weakSetInstance.delete(value)
```

### Parameter

- `value`
  - : Der Wert, der aus dem `WeakSet` Objekt entfernt werden soll. Objekte werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.

### Rückgabewert

`true`, wenn ein Wert im `WeakSet` Objekt erfolgreich entfernt wurde. `false`, wenn der Wert im `WeakSet` nicht gefunden wird. Gibt immer `false` zurück, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von delete()

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
