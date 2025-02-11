---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`has()`**-Methode von {{jsxref("Map")}}-Instanzen gibt einen Boolean zurück, der angibt, ob ein Element mit dem angegebenen Schlüssel in dieser Map vorhanden ist oder nicht.

{{InteractiveExample("JavaScript Demo: Map.prototype.has()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// Expected output: true

console.log(map1.has("baz"));
// Expected output: false
```

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, dessen Vorhandensein im `Map`-Objekt überprüft werden soll.

### Rückgabewert

`true`, wenn ein Element mit dem angegebenen Schlüssel im `Map`-Objekt vorhanden ist; andernfalls `false`.

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
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
