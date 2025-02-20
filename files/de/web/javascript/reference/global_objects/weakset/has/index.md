---
title: WeakSet.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/has
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`has()`**-Methode von {{jsxref("WeakSet")}}-Instanzen gibt einen Boolean-Wert zurück, der angibt, ob ein Objekt in diesem `WeakSet` existiert oder nicht.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.has()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};
const object2 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

console.log(weakset1.has(object2));
// Expected output: false
```

## Syntax

```js-nolint
has(value)
```

### Parameter

- `value`
  - : Der Wert, dessen Vorhandensein im `WeakSet` überprüft werden soll.

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
