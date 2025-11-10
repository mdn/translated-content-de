---
title: WeakSet.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`has()`**-Methode von {{jsxref("WeakSet")}}-Instanzen gibt einen Boolean zurück, der anzeigt, ob der angegebene Wert in diesem `WeakSet` existiert oder nicht.

{{InteractiveExample("JavaScript Demo: WeakSet.prototype.has()")}}

```js interactive-example
const weakset = new WeakSet();
const object1 = {};
const object2 = {};

weakset.add(object1);

console.log(weakset.has(object1));
// Expected output: true

console.log(weakset.has(object2));
// Expected output: false
```

## Syntax

```js-nolint
has(value)
```

### Parameter

- `value`
  - : Der Wert, dessen Vorhandensein im `WeakSet`-Objekt getestet werden soll. Objekte werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Wert im `WeakSet`-Objekt existiert; andernfalls `false`. Gibt immer `false` zurück, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von has()

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
