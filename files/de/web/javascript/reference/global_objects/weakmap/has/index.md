---
title: WeakMap.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/has
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`has()`** Methode von {{jsxref("WeakMap")}} Instanzen gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Schlüssel in diesem `WeakMap` existiert oder nicht.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.has()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, "foo");

console.log(weakmap1.has(object1));
// Expected output: true

console.log(weakmap1.has(object2));
// Expected output: false
```

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, dessen Vorhandensein im `WeakMap`-Objekt getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn ein Element mit dem angegebenen Schlüssel im `WeakMap`-Objekt existiert; andernfalls `false`. Gibt immer `false` zurück, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der has Methode

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.get()")}}
