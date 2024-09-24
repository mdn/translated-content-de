---
title: ArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`ArrayBuffer[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Arraybuffer-Methoden zu erzeugen.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Außerdem erschwert es bestimmte Optimierungen erheblich. Engines-Implementierer [untersuchen, ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
ArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Arraybuffer-Methoden zu erzeugen, die neue Arraybuffer erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `ArrayBuffer`-Objekte zurück. Konstruktoren von Unterklassen können sie überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetische zugrundeliegende Implementierung zur Veranschaulichung
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

Beim Aufrufen von Arraybuffer-Methoden, die das bestehende Objekt nicht verändern, sondern eine neue Arraybuffer-Instanz zurückgeben (z.B. [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)), wird der Konstruktor des Objekts`constructor[Symbol.species]` aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Arraybuffer-Methode zu erzeugen.

## Beispiele

### Species in gewöhnlichen Objekten

Die Eigenschaft `[Symbol.species]` gibt die Standard-Konstruktorfunktion zurück, die der `ArrayBuffer`-Konstruktor für `ArrayBuffer` ist.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `ArrayBuffer`-Unterklasse, wie `MyArrayBuffer`, ist die `MyArrayBuffer`-Species der `MyArrayBuffer`-Konstruktor. Man könnte jedoch dies überschreiben, um in den Methoden Ihrer abgeleiteten Klasse übergeordnete `ArrayBuffer`-Objekte zurückzugeben:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Überschreibt die MyArrayBuffer-Species mit dem übergeordneten ArrayBuffer-Konstruktor
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
