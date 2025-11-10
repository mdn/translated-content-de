---
title: WeakMap.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert
l10n:
  sourceCommit: a1f1a8348bdf6dd80af9e1ac7b5b748ef74df12d
---

{{SeeCompatTable}}

Die **`getOrInsert()`** Methode von {{jsxref("WeakMap")}} Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in diesem `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem angegebenen Standardwert ein und gibt den eingefügten Wert zurück.

Wenn die Berechnung des Standardwerts aufwändig ist, sollten Sie stattdessen {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} verwenden, das einen Rückruf zur Berechnung des Standardwerts nur dann benötigt, wenn es tatsächlich erforderlich ist.

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
  - : Der Schlüssel des Werts, der aus dem `WeakMap` Objekt zurückgegeben werden soll. Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel nicht bereits im `WeakMap` Objekt vorhanden ist.

### Rückgabewert

Der Wert, der dem angegebenen Schlüssel im `WeakMap` Objekt zugeordnet ist. Wenn der Schlüssel nicht gefunden werden kann, wird {{jsxref("undefined")}} zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `key` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beispiele

### Verwendung von getOrInsert()

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

- [Polyfill von `WeakMap.prototype.getOrInsert` in `core-js`](https://github.com/zloirock/core-js#map-upsert)
- [es-shims Polyfill von `WeakMap.prototype.getOrInsert`](https://www.npmjs.com/package/weakmap.prototype.getorinsert)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
