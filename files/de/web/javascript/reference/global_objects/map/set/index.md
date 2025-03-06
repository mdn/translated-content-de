---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`set()`** Methode von {{jsxref("Map")}}-Instanzen fügt einen Eintrag in diese Map mit einem angegebenen Schlüssel und einem Wert hinzu oder aktualisiert diesen.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

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
set(key, value)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Schlüssel kann jeder [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) sein (jeder [primitiver Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) oder jeder Typ eines [JavaScript-Objekts](/de/docs/Web/JavaScript/Guide/Data_structures#objects)).
- `value`
  - : Der Wert des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Wert kann jeder [JavaScript-Typ](/de/docs/Web/JavaScript/Guide/Data_structures) sein (jeder [primitiver Wert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_values) oder jeder Typ eines [JavaScript-Objekts](/de/docs/Web/JavaScript/Guide/Data_structures#objects)).

### Rückgabewert

Das `Map`-Objekt.

## Beispiele

### Verwendung von set()

```js
const myMap = new Map();

// Add new elements to the map
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Update an element in the map
myMap.set("bar", "baz");
```

### Verwenden von set() mit Verkettung

Da die `set()`-Methode dasselbe `Map`-Objekt zurückgibt, können Sie den Methodenaufruf wie unten dargestellt verketten:

```js
// Add new elements to the map with chaining.
myMap.set("bar", "foo").set(1, "foobar").set(2, "baz");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
