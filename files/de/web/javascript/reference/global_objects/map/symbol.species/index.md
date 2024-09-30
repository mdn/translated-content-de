---
title: Map[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffseigenschaft **`Map[Symbol.species]`** ist eine ungenutzte Zugriffseigenschaft, die angibt, wie `Map`-Objekte kopiert werden.

## Syntax

```js-nolint
Map[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Map`-Instanzen zu konstruieren.

## Beschreibung

Die Zugriffseigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Map`-Objekte zurück. Unterklassen-Konstruktoren können diese überschreiben, um die Konstruktorzuweisung zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von keiner Methode von `Map` verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die Eigenschaft `[Symbol.species]` gibt die Standardkonstruktorfunktion zurück, die der `Map`-Konstruktor für `Map` ist.

```js
Map[Symbol.species]; // function Map()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Map`-Unterklasse, wie `MyMap`, ist die `MyMap` Species der `MyMap`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um Eltern-`Map`-Objekte in Ihren abgeleiteten Klassenmethoden zurückzugeben:

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
