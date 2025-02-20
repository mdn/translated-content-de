---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`get()`**-Methode von {{jsxref("Map")}}-Instanzen gibt ein bestimmtes Element aus dieser Map zurück. Wenn der Wert, der dem angegebenen Schlüssel zugeordnet ist, ein Objekt ist, erhalten Sie eine Referenz auf dieses Objekt, und jede Änderung, die an diesem Objekt vorgenommen wird, wird effektiv innerhalb des `Map`-Objekts übernommen.

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
  - : Der Schlüssel des Elements, das aus dem `Map`-Objekt zurückgegeben werden soll.

### Rückgabewert

Das Element, das dem angegebenen Schlüssel zugeordnet ist, oder {{jsxref("undefined")}}, wenn der Schlüssel im `Map`-Objekt nicht gefunden werden kann.

## Beispiele

### Verwendung von get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined
```

### Verwendung von get(), um eine Referenz auf ein Objekt abzurufen

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

Beachten Sie, dass das Halten einer Referenz auf das ursprüngliche Objekt in der Map effektiv bedeutet, dass das Objekt nicht vom Garbage Collector entfernt werden kann, was zu unerwarteten Speicherproblemen führen kann. Wenn Sie möchten, dass das im Map gespeicherte Objekt die gleiche Lebensdauer wie das ursprüngliche Objekt hat, ziehen Sie die Verwendung einer {{jsxref("WeakMap")}} in Betracht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
