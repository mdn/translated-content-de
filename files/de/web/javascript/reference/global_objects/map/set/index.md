---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`set()`**-Methode von {{jsxref("Map")}}-Instanzen fügt einen Eintrag mit einem angegebenen Schlüssel und einem Wert zu dieser Map hinzu oder aktualisiert ihn.

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
  - : Der Schlüssel des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Schlüssel kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Data_structures) haben (jeder [primitiver Wert](/de/docs/Web/JavaScript/Data_structures#primitive_values) oder jede Art von [JavaScript-Objekt](/de/docs/Web/JavaScript/Data_structures#objects)).
- `value`
  - : Der Wert des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Wert kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Data_structures) haben (jeder [primitiver Wert](/de/docs/Web/JavaScript/Data_structures#primitive_values) oder jede Art von [JavaScript-Objekt](/de/docs/Web/JavaScript/Data_structures#objects)).

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

### Verwendung von set() mit Verkettung

Da die `set()`-Methode das gleiche `Map`-Objekt zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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
