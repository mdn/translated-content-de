---
title: Map.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 7b63b90d24ad8945977bb9dc2735d75f72829bc1
---

Die **`has()`** Methode von {{jsxref("WeakMap")}} Instanzen gibt einen Boolean zurück, der anzeigt, ob ein Eintrag mit dem angegebenen Schlüssel in diesem `WeakMap` existiert oder nicht.

{{InteractiveExample("JavaScript Demo: Map.prototype.has()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.has("bar"));
// Expected output: true

console.log(map.has("baz"));
// Expected output: false
```

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Eintrags, dessen Vorhandensein im `Map` Objekt getestet werden soll. Objekt-Schlüssel werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.

### Rückgabewert

Gibt `true` zurück, wenn ein Eintrag mit dem angegebenen Schlüssel im `Map` Objekt existiert; andernfalls `false`.

## Beispiele

### Verwendung von has()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
