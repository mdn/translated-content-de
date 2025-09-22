---
title: WeakMap.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`get()`**-Methode von {{jsxref("WeakMap")}}-Instanzen gibt den Wert zurück, der dem Schlüssel in diesem `WeakMap` entspricht, oder `undefined`, wenn keiner vorhanden ist. Objektwerte werden als dieselbe Referenz zurückgegeben, die ursprünglich gespeichert wurde, nicht als Kopie, daher werden Änderungen am zurückgegebenen Objekt überall dort widergespiegelt, wo diese Referenz gehalten wird, einschließlich im `WeakMap`.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.get()")}}

```js interactive-example
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, 42);

console.log(weakmap.get(object1));
// Expected output: 42

console.log(weakmap.get(object2));
// Expected output: undefined
```

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Wertes, der vom `WeakMap`-Objekt zurückgegeben werden soll. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.

### Rückgabewert

Der Wert, der mit dem angegebenen Schlüssel im `WeakMap`-Objekt verknüpft ist. Wenn der Schlüssel nicht gefunden werden kann, wird {{jsxref("undefined")}} zurückgegeben. Es wird immer `undefined` zurückgegeben, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von get()

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
- {{jsxref("WeakMap.prototype.delete()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
