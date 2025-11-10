---
title: Map.prototype.has()
short-title: has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 0574ac1985889d2ccce1b61e42db98d74ac1bbcb
---

Die **`has()`**-Methode von {{jsxref("Map")}}-Instanzen gibt einen booleschen Wert zurück, der angibt, ob ein Eintrag mit dem angegebenen Schlüssel in dieser `Map` existiert oder nicht.

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
  - : Der Schlüssel des Eintrags, dessen Vorhandensein im `Map`-Objekt überprüft werden soll. Objekt-Schlüssel werden anhand der {{Glossary("Object_reference", "Referenz")}} und nicht anhand des Werts verglichen.

### Rückgabewert

Gibt `true` zurück, wenn ein Eintrag mit dem angegebenen Schlüssel im `Map`-Objekt existiert; andernfalls `false`.

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
