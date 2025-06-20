---
title: SharedArrayBuffer[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`SharedArrayBuffer[Symbol.species]`** statische Zugriffs-Eigenschaft gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus `SharedArrayBuffer`-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` erlaubt die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie erschwert auch bestimmte Optimierungen erheblich. Die Entwickler von Engines erwägen, [diese Funktion zu entfernen](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Array-Buffer-Methoden zu konstruieren, die einen neuen Array-Buffer erstellen.

## Beschreibung

Die `[Symbol.species]` Zugriffs-Eigenschaft gibt den Standardkonstruktor für `SharedArrayBuffer`-Objekte zurück. Unterklassige Konstruktoren können ihn überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung sieht im Wesentlichen so aus:

```js
// Hypothetical underlying implementation for illustration
class SharedArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` in abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubArrayBuffer extends SharedArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

Beim Aufrufen von Array-Buffer-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Buffer-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)), wird der `constructor[Symbol.species]` des Arrays aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Buffer-Methode zu erzeugen.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]` Eigenschaft gibt die Standard-Konstruktorfunktion zurück, die der `SharedArrayBuffer`-Konstruktor für `SharedArrayBuffer` ist.

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `SharedArrayBuffer`-Unterklasse, wie `MySharedArrayBuffer`, ist die `MySharedArrayBuffer`-Species der `MySharedArrayBuffer`-Konstruktor. Sie könnten jedoch dies überschreiben wollen, um in Ihren abgeleiteten Klassenmethoden übergeordnete `SharedArrayBuffer`-Objekte zurückzugeben:

```js
class MySharedArrayBuffer extends SharedArrayBuffer {
  // Overwrite MySharedArrayBuffer species to the parent SharedArrayBuffer constructor
  static get [Symbol.species]() {
    return SharedArrayBuffer;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Symbol.species")}}
