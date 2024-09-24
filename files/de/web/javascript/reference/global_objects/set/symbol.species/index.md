---
title: Set[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Set[Symbol.species]`** statische Accessor-Eigenschaft ist eine ungenutzte Accessor-Eigenschaft, die festlegt, wie `Set`-Objekte kopiert werden.

## Syntax

```js-nolint
Set[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `Set`-Instanzen zu konstruieren.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `Set`-Objekte zurück. Konstruktoren von Unterklassen können ihn überschreiben, um die Zuweisung des Konstruktors zu ändern.

> [!NOTE]
> Diese Eigenschaft wird derzeit von keiner `Set`-Methode verwendet.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktionsfunktion zurück, die für `Set` der `Set`-Konstruktor ist.

```js
Set[Symbol.species]; // function Set()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Set`-Unterklasse, wie `MySet`, ist der `MySet` species der `MySet`-Konstruktor. Allerdings möchten Sie dies möglicherweise überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `Set`-Objekte zurückzugeben:

```js
class MySet extends Set {
  // Überschreibt MySet species auf den übergeordneten Set-Konstruktor
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
