---
title: Set[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Zugriffseigenschaft **`Set[Symbol.species]`** ist eine unbenutzte Zugriffseigenschaft, die spezifiziert, wie `Set`-Objekte kopiert werden.

## Syntax

```js-nolint
Set[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Set`-Instanzen zu erzeugen.

## Beschreibung

Die `[Symbol.species]` Zugriffseigenschaft gibt den Standardkonstruktor für `Set`-Objekte zurück. Unterklassenkonstruktoren können diese überschreiben, um die Konstruktorzuweisung zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von allen `Set`-Methoden nicht verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die für `Set` der `Set`-Konstruktor ist.

```js
Set[Symbol.species]; // function Set()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Set`-Unterklasse, wie `MySet`, ist die `MySet`-Spezies der `MySet`-Konstruktor. Es kann jedoch vorkommen, dass Sie dies überschreiben möchten, um übergeordnete `Set`-Objekte in Ihren abgeleiteten Klassenmethoden zurückzugeben:

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
