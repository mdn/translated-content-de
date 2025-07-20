---
title: WeakSet.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`has()`**-Methode von {{jsxref("WeakSet")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob ein Objekt in diesem `WeakSet` existiert oder nicht.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.has()")}}

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
  - : Der Wert, dessen Vorhandensein im `WeakSet` geprüft wird.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Wert im `WeakSet`-Objekt existiert; ansonsten `false`. Gibt immer `false` zurück, wenn `value` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

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
