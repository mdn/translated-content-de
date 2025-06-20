---
title: Set[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`Set[Symbol.species]`** ist eine ungenutzte Accessor-Eigenschaft, die spezifiziert, wie `Set`-Objekte kopiert werden.

## Syntax

```js-nolint
Set[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Set`-Instanzen zu erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `Set`-Objekte zurück. Unterklassenkonstruktoren können diese überschreiben, um die Konstruktorzuweisung zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von allen `Set`-Methoden nicht genutzt.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktionsfunktion zurück, die der `Set`-Konstruktor für `Set` ist.

```js
Set[Symbol.species]; // function Set()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Set`-Unterklasse, wie `MySet`, ist die `MySet`-Spezies der `MySet`-Konstruktor. Möglicherweise möchten Sie dies jedoch überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Set`-Objekte zurückzugeben:

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
