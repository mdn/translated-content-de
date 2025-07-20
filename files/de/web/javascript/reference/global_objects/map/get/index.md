---
title: Map.prototype.get()
short-title: get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`get()`**-Methode von {{jsxref("Map")}}-Instanzen gibt ein spezifisches Element aus dieser Map zurück. Wenn der Wert, der dem angegebenen Schlüssel zugeordnet ist, ein Objekt ist, erhalten Sie eine Referenz zu diesem Objekt und jede Änderung an diesem Objekt ändert dieses auch im `Map`-Objekt.

{{InteractiveExample("JavaScript Demo: Map.prototype.get()")}}

```js interactive-example
const map = new Map();
map.set("bar", "foo");

console.log(map.get("bar"));
// Expected output: "foo"

console.log(map.get("baz"));
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

Das Element, das dem angegebenen Schlüssel zugeordnet ist, oder
{{jsxref("undefined")}}, wenn der Schlüssel im `Map`-Objekt nicht gefunden werden kann.

## Beispiele

### Verwendung von get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Returns "foo"
console.log(myMap.get("baz")); // Returns undefined
```

### Verwendung von get() zum Abrufen einer Referenz auf ein Objekt

```js
const arr = [];
const myMap = new Map();
myMap.set("bar", arr);

myMap.get("bar").push("foo");

console.log(arr); // ["foo"]
console.log(myMap.get("bar")); // ["foo"]
```

Beachten Sie, dass die Map, die eine Referenz auf das ursprüngliche Objekt hält, effektiv bedeutet, dass das Objekt nicht durch den Garbage Collector entfernt werden kann, was zu unerwarteten Speicherproblemen führen kann. Wenn Sie möchten, dass das im Map gespeicherte Objekt die gleiche Lebensdauer wie das ursprüngliche hat, sollten Sie die Verwendung eines {{jsxref("WeakMap")}} in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
