---
title: SharedArrayBuffer[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Zugriffs-Eigenschaft **`SharedArrayBuffer[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von `SharedArrayBuffer`-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie erschwert auch bestimmte Optimierungen erheblich. Entwickler von Engines [untersuchen, ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Array-Buffer-Methoden zu konstruieren, die einen neuen Array-Buffer erzeugen.

## Beschreibung

Die Zugriffs-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `SharedArrayBuffer`-Objekte zurück. Unterklasse-Konstruktoren können sie überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class SharedArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubArrayBuffer extends SharedArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

Beim Aufrufen von Array-Buffer-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Buffer-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)), wird auf den `constructor[Symbol.species]` des Arrays zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Buffer-Methode zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standard-Konstruktorfunktion zurück, die der `SharedArrayBuffer`-Konstruktor für `SharedArrayBuffer` ist.

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `SharedArrayBuffer`-Unterklasse, wie `MySharedArrayBuffer`, ist die `MySharedArrayBuffer`-Species der `MySharedArrayBuffer`-Konstruktor. Sie könnten jedoch dies überschreiben wollen, um in Ihren Methoden abgeleiteter Klassen Eltern-`SharedArrayBuffer`-Objekte zurückzugeben:

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
