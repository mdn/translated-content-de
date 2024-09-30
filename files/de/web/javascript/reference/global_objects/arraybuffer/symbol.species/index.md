---
title: ArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`ArrayBuffer[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Array-Puffer-Methoden zu erstellen.

> [!WARNING]
> Das Vorhandensein von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Implementatoren von Engines [untersuchen, ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

## Syntax

```js-nolint
ArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus Array-Puffer-Methoden zu konstruieren, die neue Array-Puffer erstellen.

## Beschreibung

Die Accessor-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `ArrayBuffer`-Objekte zurück. Unterklassen-Konstruktoren können diese überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

Beim Aufrufen von Array-Puffer-Methoden, die das vorhandene Objekt nicht ändern, sondern eine neue Array-Puffer-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)), wird der `constructor[Symbol.species]` des Objekts aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Puffer-Methode zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `ArrayBuffer`-Konstruktor für `ArrayBuffer` ist.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `ArrayBuffer`-Unterklasse, wie `MyArrayBuffer`, ist die `MyArrayBuffer`-Species der `MyArrayBuffer`-Konstruktor. Sie möchten jedoch möglicherweise dies überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `ArrayBuffer`-Objekte zurückzugeben:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
