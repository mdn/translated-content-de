---
title: WeakMap.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert
l10n:
  sourceCommit: d1860e2fa9f48a5e6393282f9bb08e6895220db2
---

Die **`getOrInsert()`**-Methode von {{jsxref("WeakMap")}}-Instanzen gibt den Wert zurück, der dem angegebenen Schlüssel in diesem `WeakMap` entspricht. Wenn der Schlüssel nicht vorhanden ist, fügt sie einen neuen Eintrag mit dem Schlüssel und einem gegebenen Standardwert hinzu und gibt den eingefügten Wert zurück.

Wenn die Berechnung des Standardwerts aufwendig ist, sollten Sie stattdessen {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} verwenden, die einen Rückruf nimmt, um den Standardwert nur dann zu berechnen, wenn er tatsächlich benötigt wird.

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
  - : Der Schlüssel des Wertes, der aus dem `WeakMap`-Objekt zurückgegeben wird. Muss entweder ein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sein. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} und nicht nach Wert verglichen.
- `defaultValue`
  - : Der Wert, der eingefügt und zurückgegeben wird, wenn der Schlüssel im `WeakMap`-Objekt noch nicht vorhanden ist.

### Rückgabewert

Der mit dem angegebenen Schlüssel im `WeakMap`-Objekt verknüpfte Wert. Wenn der Schlüssel nicht gefunden werden kann, wird `defaultValue` eingefügt und zurückgegeben.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `key` weder ein Objekt noch ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

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
- [es-shims polyfill von `WeakMap.prototype.getOrInsert`](https://www.npmjs.com/package/weakmap.prototype.getorinsert)
- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.prototype.get()")}}
- {{jsxref("WeakMap.prototype.set()")}}
- {{jsxref("WeakMap.prototype.has()")}}
- {{jsxref("WeakMap.prototype.getOrInsertComputed()")}}
