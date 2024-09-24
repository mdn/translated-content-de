---
title: Map.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/Map/set
l10n:
  sourceCommit: 3cfd663738e9963157d90f359789d675a6662ec2
---

{{JSRef}}

Die Methode **`set()`** von {{jsxref("Map")}} Instanzen fügt einen Eintrag mit einem angegebenen Schlüssel und Wert zu dieser Map hinzu oder aktualisiert ihn.

{{EmbedInteractiveExample("pages/js/map-prototype-set.html")}}

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Der Schlüssel des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Schlüssel kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Data_structures) annehmen (jeder [primitive Wert](/de/docs/Web/JavaScript/Data_structures#primitive_values) oder jede Art von [JavaScript-Objekt](/de/docs/Web/JavaScript/Data_structures#objects)).
- `value`
  - : Der Wert des Elements, das dem `Map`-Objekt hinzugefügt werden soll. Der Wert kann jeden [JavaScript-Typ](/de/docs/Web/JavaScript/Data_structures) annehmen (jeder [primitive Wert](/de/docs/Web/JavaScript/Data_structures#primitive_values) oder jede Art von [JavaScript-Objekt](/de/docs/Web/JavaScript/Data_structures#objects)).

### Rückgabewert

Das `Map`-Objekt.

## Beispiele

### Verwendung von set()

```js
const myMap = new Map();

// Neue Elemente zur Map hinzufügen
myMap.set("bar", "foo");
myMap.set(1, "foobar");

// Ein Element in der Map aktualisieren
myMap.set("bar", "baz");
```

### Verwendung von set() mit Verkettung

Da die `set()`-Methode dasselbe `Map`-Objekt zurückgibt, können Sie den Methodenaufruf wie unten gezeigt verketten:

```js
// Neue Elemente mit Verkettung zur Map hinzufügen.
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
