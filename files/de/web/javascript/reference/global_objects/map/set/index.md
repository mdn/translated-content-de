---
title: Map.prototype.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

Die Methode **`set()`** von {{jsxref("Map")}}-Instanzen fügt diesem `Map` einen neuen Eintrag mit einem angegebenen Schlüssel und Wert hinzu oder aktualisiert einen vorhandenen Eintrag, falls der Schlüssel bereits existiert.

{{InteractiveExample("JavaScript Demo: Map.prototype.set()")}}

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
set(key, value)
```

### Parameter

- `key`
  - : Der Schlüssel des Eintrags, der im `Map`-Objekt hinzugefügt oder geändert werden soll. Kann ein beliebiger Wert sein. Objektschlüssel werden nach {{Glossary("Object_reference", "Referenz")}} verglichen, nicht nach Wert.
- `value`
  - : Der Wert des Eintrags, der im `Map`-Objekt hinzugefügt oder geändert werden soll. Kann ein beliebiger Wert sein.

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

Da die Methode `set()` dasselbe `Map`-Objekt zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

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
- {{jsxref("Map.prototype.delete()")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.has()")}}
