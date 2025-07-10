---
title: ArrayBuffer[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Zugriffseigenschaft **`ArrayBuffer[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Array-Buffer-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Implementierer von Engines [untersuchen, ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
ArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Array-Buffer-Methoden zu konstruieren, die neue Array-Buffer erstellen.

## Beschreibung

Die `[Symbol.species]` Zugriffseigenschaft gibt den Standardkonstruktor für `ArrayBuffer`-Objekte zurück. Unterklasse-Konstruktoren können diese überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

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

Beim Aufrufen von Array-Buffer-Methoden, die das bestehende Objekt nicht verändern, sondern eine neue Array-Buffer-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)), wird der `constructor[Symbol.species]` des Objekts aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Buffer-Methode zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, welche der `ArrayBuffer`-Konstruktor für `ArrayBuffer` ist.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `ArrayBuffer`-Unterklasse, wie `MyArrayBuffer`, ist die `MyArrayBuffer`-Species der `MyArrayBuffer`-Konstruktor. Es kann jedoch sinnvoll sein, dies zu überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `ArrayBuffer`-Objekte zurückzugeben:

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
