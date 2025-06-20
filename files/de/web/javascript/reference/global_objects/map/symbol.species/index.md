---
title: Map[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Zugriffs-Eigenschaft **`Map[Symbol.species]`** ist eine ungenutzte Zugriffs-Eigenschaft, die angibt, wie `Map`-Objekte kopiert werden sollen.

## Syntax

```js-nolint
Map[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Map`-Instanzen zu erstellen.

## Beschreibung

Die Zugriffs-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Map`-Objekte zurück. Unterklassen-Konstruktoren können dies überschreiben, um die Zuweisung des Konstruktors zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von allen `Map`-Methoden nicht verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die Eigenschaft `[Symbol.species]` gibt die Standardkonstruktorfunktion zurück, die der `Map`-Konstruktor für `Map` ist.

```js
Map[Symbol.species]; // function Map()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Map`-Unterklasse, wie `MyMap`, ist die `MyMap`-Spezies der `MyMap`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um Eltern-`Map`-Objekte in Ihren abgeleiteten Klassenmethoden zurückzugeben:

```js
class MyMap extends Map {
  // Overwrite MyMap species to the parent Map constructor
  static get [Symbol.species]() {
    return Map;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
