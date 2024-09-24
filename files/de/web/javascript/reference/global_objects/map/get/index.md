---
title: Map.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/Map/get
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

Die **`get()`** Methode von {{jsxref("Map")}} Instanzen gibt ein spezifiziertes Element aus dieser Map zurück. Wenn der Wert, der dem angegebenen Schlüssel zugeordnet ist, ein Objekt ist, erhalten Sie eine Referenz auf dieses Objekt. Jede Änderung an diesem Objekt wird es innerhalb des `Map` Objekts effektiv modifizieren.

{{EmbedInteractiveExample("pages/js/map-prototype-get.html")}}

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das aus dem `Map` Objekt zurückgegeben werden soll.

### Rückgabewert

Das Element, das mit dem angegebenen Schlüssel assoziiert ist, oder
{{jsxref("undefined")}}, wenn der Schlüssel im `Map` Objekt nicht gefunden werden kann.

## Beispiele

### Verwendung von get()

```js
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.get("bar")); // Gibt "foo" zurück
console.log(myMap.get("baz")); // Gibt undefined zurück
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

Beachten Sie, dass die Map, die eine Referenz auf das ursprüngliche Objekt hält, effektiv bedeutet, dass das Objekt nicht garbage-gesammelt werden kann, was zu unerwarteten Speicherproblemen führen kann. Wenn Sie möchten, dass das im Map gespeicherte Objekt die gleiche Lebensdauer wie das ursprüngliche hat, sollten Sie die Verwendung eines {{jsxref("WeakMap")}} in Betracht ziehen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
