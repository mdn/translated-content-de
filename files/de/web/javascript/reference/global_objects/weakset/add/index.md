---
title: WeakSet.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
l10n:
  sourceCommit: 5e878acadb7afcf0443b619b1d2f70a4dfafd679
---

{{JSRef}}

Die **`add()`**-Methode von {{jsxref("WeakSet")}} Instanzen fügt ein neues Objekt am Ende dieses `WeakSet` hinzu.

{{EmbedInteractiveExample("pages/js/weakset-prototype-add.html", "taller")}}

## Syntax

```js-nolint
add(value)
```

### Parameter

- `value`
  - : Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Der Wert, der zur `WeakSet`-Sammlung hinzugefügt werden soll.

### Rückgabewert

Das `WeakSet`-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von add

```js
const ws = new WeakSet();

ws.add(window); // fügt das window-Objekt zum WeakSet hinzu

ws.has(window); // true

// WeakSet akzeptiert nur Objekte als Argumente
ws.add(1);
// führt zu "TypeError: Invalid value used in weak set" in Chrome
// und "TypeError: 1 is not a non-null object" in Firefox
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
