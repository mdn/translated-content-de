---
title: Set[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`Set[Symbol.species]`** ist eine ungenutzte Accessor-Eigenschaft, die angibt, wie `Set`-Objekte kopiert werden.

## Syntax

```js-nolint
Set[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Set`-Instanzen zu konstruieren.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `Set`-Objekte zurück. Unterklassenkonstruktoren können ihn überschreiben, um die Konstruktorzurodnung zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von allen `Set`-Methoden nicht verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]` Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `Set`-Konstruktor für `Set` ist.

```js
Set[Symbol.species]; // function Set()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Set`-Unterklasse, wie etwa `MySet`, ist die `MySet`-Species der `MySet` Konstruktor. Es kann jedoch sinnvoll sein, diesen zu überschreiben, um übergeordnete `Set`-Objekte in den Methoden Ihrer abgeleiteten Klasse zurückzugeben:

```js
class MySet extends Set {
  // Overwrite MySet species to the parent Set constructor
  static get [Symbol.species]() {
    return Set;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Set")}}
- {{jsxref("Symbol.species")}}
