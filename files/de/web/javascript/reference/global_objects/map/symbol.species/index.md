---
title: Map[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Accessor-Eigenschaft **`Map[Symbol.species]`** ist eine ungenutzte Accessor-Eigenschaft, die angibt, wie `Map`-Objekte kopiert werden.

## Syntax

```js-nolint
Map[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Map`-Instanzen zu konstruieren.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `Map`-Objekte zurück. Konstruktoren von Unterklassen können diese überschreiben, um die Konstruktorzuweisung zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von keinem `Map`-Methoden verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `Map`-Konstruktor für `Map` ist.

```js
Map[Symbol.species]; // function Map()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Map`-Unterklasse, wie `MyMap`, ist die `MyMap`-Species der `MyMap`-Konstruktor. Es kann jedoch gewünscht sein, dies zu überschreiben, um in Ihren Methoden der abgeleiteten Klasse Eltern-`Map`-Objekte zurückzugeben:

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
