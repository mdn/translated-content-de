---
title: Map[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`Map[Symbol.species]`** ist eine unbenutzte Accessor-Eigenschaft, die festlegt, wie `Map`-Objekte kopiert werden.

## Syntax

```js-nolint
Map[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Map`-Instanzen zu erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `Map`-Objekte zurück. Unterklassenkonstruktoren können sie überschreiben, um die Zuweisung des Konstruktors zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von allen `Map`-Methoden nicht verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `Map`-Konstruktor für `Map` ist.

```js
Map[Symbol.species]; // function Map()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Map`-Unterklasse, wie z.B. `MyMap`, ist die `MyMap`-Spezies der `MyMap`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um Eltern-`Map`-Objekte in Ihren abgeleiteten Klassenmethoden zurückzugeben:

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
