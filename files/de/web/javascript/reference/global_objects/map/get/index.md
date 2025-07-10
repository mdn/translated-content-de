---
title: Map.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`get()`** Methode von {{jsxref("Map")}} Instanzen gibt ein angegebenes Element aus dieser Map zurück. Wenn der Wert, der dem bereitgestellten Schlüssel zugeordnet ist, ein Objekt ist, erhalten Sie eine Referenz auf dieses Objekt, und jede Änderung, die an diesem Objekt vorgenommen wird, wird effektiv innerhalb des `Map` Objekts modifiziert.

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

Das Element, das dem angegebenen Schlüssel zugeordnet ist, oder
{{jsxref("undefined")}}, wenn der Schlüssel im `Map` Objekt nicht gefunden werden kann.

## Beispiele

### Verwendung von get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined
```

### Verwendung von get() um eine Referenz auf ein Objekt abzurufen

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

Beachten Sie, dass die Map, die eine Referenz auf das ursprüngliche Objekt hält, effektiv bedeutet, dass das Objekt nicht vom Garbage Collector entfernt werden kann, was zu unerwarteten Speicherproblemen führen kann. Wenn Sie möchten, dass das in der Map gespeicherte Objekt die gleiche Lebensdauer wie das ursprüngliche hat, sollten Sie in Betracht ziehen, einen {{jsxref("WeakMap")}} zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
