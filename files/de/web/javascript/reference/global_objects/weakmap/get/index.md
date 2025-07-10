---
title: WeakMap.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`get()`**-Methode von {{jsxref("WeakMap")}}-Instanzen gibt ein bestimmtes Element aus diesem `WeakMap` zurück.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.get()")}}

```js interactive-example
const weakmap1 = new WeakMap();
const object1 = {};
const object2 = {};

weakmap1.set(object1, 42);

console.log(weakmap1.get(object1));
// Expected output: 42

console.log(weakmap1.get(object2));
// Expected output: undefined
```

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `WeakMap`-Objekt zurückgegeben werden soll.

### Rückgabewert

Das mit dem angegebenen Schlüssel im `WeakMap`-Objekt verknüpfte Element. Wenn der Schlüssel nicht gefunden werden kann, wird {{jsxref("undefined")}} zurückgegeben. Es wird immer `undefined` zurückgegeben, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung der get()-Methode

```js
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Returns "foo".
wm.get("baz"); // Returns undefined.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
