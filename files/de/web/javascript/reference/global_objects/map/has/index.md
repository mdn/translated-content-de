---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

Die **`has()`**-Methode von {{jsxref("Map")}}-Instanzen gibt einen Boolean zurück, der angibt, ob ein Element mit dem angegebenen Schlüssel in dieser Map existiert oder nicht.

{{EmbedInteractiveExample("pages/js/map-prototype-has.html")}}

## Syntax

```js-nolint
has(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, dessen Vorhandensein im `Map`-Objekt getestet werden soll.

### Rückgabewert

`true`, wenn ein Element mit dem angegebenen Schlüssel im `Map`-Objekt existiert; andernfalls `false`.

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
