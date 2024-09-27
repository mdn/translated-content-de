---
title: ArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`ArrayBuffer[Symbol.species]`** statische Accessor-Eigenschaft gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus ArrayBuffer-Methoden zu konstruieren.

> [!WARNING]
> Das Vorhandensein von `[Symbol.species]` erlaubt die Ausführung beliebigen Codes und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Engine-Implementierer [untersuchen, ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
ArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus ArrayBuffer-Methoden zu konstruieren, die neue ArrayBuffer erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `ArrayBuffer`-Objekte zurück. Unterklassenkonstruktoren können ihn überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig ebenfalls den Konstruktor selbst zurückgeben.

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

Wenn ArrayBuffer-Methoden aufgerufen werden, die das bestehende Objekt nicht verändern, sondern eine neue `ArrayBuffer`-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)), wird auf den `constructor[Symbol.species]` des Objekts zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der ArrayBuffer-Methode zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `ArrayBuffer`-Konstruktor für `ArrayBuffer` ist.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `ArrayBuffer`-Unterklasse, wie `MyArrayBuffer`, ist die `MyArrayBuffer` Species der `MyArrayBuffer`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um in Ihren abgeleiteten Klassenmethoden Eltern-`ArrayBuffer`-Objekte zurückzugeben:

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
