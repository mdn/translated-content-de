---
title: WeakMap.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`getOrInsert()`** von {{jsxref("WeakMap")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in dieser `WeakMap` zugeordnet ist. Ist der Schlüssel nicht vorhanden, fügt sie einen neuen Eintrag mit dem Schlüssel und einem angegebenen Standardwert ein und gibt den eingefügten Wert zurück.

Wenn die Berechnung des Standardwerts aufwendig ist, sollten Sie stattdessen {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} verwenden. Diese Methode erhält einen Callback, der den Standardwert nur dann berechnet, wenn er tatsächlich benötigt wird.

{{InteractiveExample("JavaScript Demo: WeakMap.prototype.getOrInsert()")}}

```js interactive-example
const map = new WeakMap([[window, "foo"]]);
console.log(map.getOrInsert(window, "default"));
// Expected output: "foo"

console.log(map.getOrInsert({}, "default"));
// Expected output: "default"
```

## Syntax

```js-nolint
getOrInsert(key, defaultValue)
```

### Parameter

- `key`
  - : Der Schlüssel des Werts, der aus dem `WeakMap`-Objekt zurückgegeben werden soll. Er muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Objektschlüssel werden anhand ihrer {{Glossary("Object_reference", "Referenz")}} verglichen, nicht anhand ihres Werts.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `WeakMap`-Objekt noch nicht vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `WeakMap`-Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden wird, wird `defaultValue` eingefügt und zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `key` weder ein Objekt noch ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### getOrInsert() verwenden

```js
const wm = new WeakMap();
const obj = {};

console.log(wm.get(obj)); // undefined
console.log(wm.getOrInsert(obj, "default")); // "default"
console.log(wm.get(obj)); // "default"
console.log(wm.getOrInsert(obj, "another default")); // "default"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `WeakMap.prototype.getOrInsert` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-weakmap)
- [es-shims-Polyfill für `WeakMap.prototype.getOrInsert`](https://www.npmjs.com/package/weakmap.prototype.getorinsert)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
