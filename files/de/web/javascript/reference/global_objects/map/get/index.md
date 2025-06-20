---
title: Map.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`get()`** Methode von {{jsxref("Map")}} Instanzen gibt ein bestimmtes Element aus dieser Map zurück. Wenn der Wert, der dem bereitgestellten Schlüssel zugeordnet ist, ein Objekt ist, erhalten Sie eine Referenz zu diesem Objekt, und jede Änderung an diesem Objekt verändert es effektiv innerhalb des `Map` Objekts.

{{InteractiveExample("JavaScript Demo: Map.prototype.get()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.get("bar"));
// Expected output: "foo"

console.log(map1.get("baz"));
// Expected output: undefined
```

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `Map` Objekt zurückgegeben werden soll.

### Rückgabewert

Das Element, das mit dem angegebenen Schlüssel verknüpft ist, oder
{{jsxref("undefined")}}, wenn der Schlüssel im `Map` Objekt nicht gefunden werden kann.

## Beispiele

### Verwendung von get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined
```

### Verwendung von get(), um eine Referenz zu einem Objekt abzurufen

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

Beachten Sie, dass die Map, die eine Referenz zum Originalobjekt hält, effektiv bedeutet, dass das Objekt nicht vom Speicherbereinigungsmechanismus (Garbage Collector) entfernt werden kann, was zu unerwarteten Speicherproblemen führen kann. Wenn Sie möchten, dass das im Map gespeicherte Objekt die gleiche Lebensdauer wie das Originalobjekt hat, sollten Sie die Verwendung von {{jsxref("WeakMap")}} in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
