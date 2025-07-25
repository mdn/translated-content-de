---
title: WeakSet.prototype.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/add
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`add()`** Methode von {{jsxref("WeakSet")}} Instanzen fügt ein neues Objekt am Ende dieses `WeakSet` hinzu.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.add()", "taller")}}

```js interactive-example
const weakset = new WeakSet();
const object = {};

weakset.add(object);
console.log(weakset.has(object));
// Expected output: true

try {
  weakset.add(1);
} catch (error) {
  console.log(error);
  // Expected output (Chrome): TypeError: Invalid value used in weak set
  // Expected output (Firefox): TypeError: WeakSet value must be an object, got 1
  // Expected output (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## Syntax

```js-nolint
add(value)
```

### Parameter

- `value`
  - : Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Der Wert, der zur `WeakSet` Sammlung hinzugefügt werden soll.

### Rückgabewert

Das `WeakSet` Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `value` weder ein Objekt noch ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von add

```js
const ws = new WeakSet();

ws.add(window); // add the window object to the WeakSet

ws.has(window); // true

// WeakSet only takes objects as arguments
ws.add(1);
// results in "TypeError: Invalid value used in weak set" in Chrome
// and "TypeError: 1 is not a non-null object" in Firefox
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.delete()")}}
- {{jsxref("WeakSet.prototype.has()")}}
