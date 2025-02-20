---
title: Map.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/Map/delete
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`delete()`**-Methode von {{jsxref("Map")}}-Instanzen entfernt das angegebene Element aus dieser Map anhand des Schlüssels.

{{InteractiveExample("JavaScript Demo: Map.prototype.delete()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map1.has("bar"));
// Expected result: false
```

## Syntax

```js-nolint
mapInstance.delete(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt entfernt werden soll.

### Rückgabewert

`true`, wenn ein Element im `Map`-Objekt existierte und entfernt wurde, oder
`false`, wenn das Element nicht existiert.

## Beispiele

### Verwendung von delete()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Returns true. Successfully removed.
console.log(myMap.has("bar")); // Returns false. The "bar" element is no longer present.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
