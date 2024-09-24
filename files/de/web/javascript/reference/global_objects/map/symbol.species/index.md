---
title: Map[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffs-Eigenschaft **`Map[Symbol.species]`** ist eine ungenutzte Eigenschaft, die bestimmt, wie `Map`-Objekte kopiert werden.

## Syntax

```js-nolint
Map[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), bei dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Map`-Instanzen zu konstruieren.

## Beschreibung

Die Zugriffs-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Map`-Objekte zurück. Konstruktoren von Unterklassen können diese überschreiben, um die Zuweisung des Konstruktors zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von allen `Map`-Methoden nicht genutzt.

## Beispiele

### Species in regulären Objekten

Die Eigenschaft `[Symbol.species]` gibt die Standard-Konstruktorfunktion zurück, welche der `Map` Konstruktor für `Map` ist.

```js
Map[Symbol.species]; // function Map()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Map`-Unterklasse, wie `MyMap`, ist der `MyMap`-Species der `MyMap`-Konstruktor. Möglicherweise möchten Sie dies jedoch überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Map`-Objekte zurückzugeben:

```js
class MyMap extends Map {
  // Überschreibt MyMap Species zum übergeordneten Map-Konstruktor
  static get [Symbol.species]() {
    return Map;
  }
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{jsxref("Map")}}
- {{jsxref("Symbol.species")}}
