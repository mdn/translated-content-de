---
title: SharedArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffs-Eigenschaft **`SharedArrayBuffer[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus `SharedArrayBuffer`-Methoden zu erstellen.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Entwickler untersuchen derzeit [ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Wenn möglich, sollten Sie sich nicht darauf verlassen.

## Syntax

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus Array-Buffer-Methoden zu erstellen, die einen neuen Array-Buffer erzeugen.

## Beschreibung

Die Zugriffs-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `SharedArrayBuffer`-Objekte zurück. Unterklassige Konstruktoren können sie überschreiben, um die Zuweisung des Konstruktors zu ändern. Die Standardimplementierung ist im Grunde:

```js
// Hypothetical underlying implementation for illustration
class SharedArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig ebenfalls den Konstruktor selbst zurückgeben.

```js
class SubArrayBuffer extends SharedArrayBuffer {}
SubArrayBuffer[Symbol.species] === SharedArrayBuffer; // true
```

Beim Aufrufen von Array-Buffer-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Buffer-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)), wird auf den Konstruktor `constructor[Symbol.species]` des Arrays zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Buffer-Methode zu erstellen.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die für `SharedArrayBuffer` der `SharedArrayBuffer`-Konstruktor ist.

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `SharedArrayBuffer`-Unterklasse, wie `MySharedArrayBuffer`, ist die Species von `MySharedArrayBuffer` der `MySharedArrayBuffer`-Konstruktor. Allerdings möchten Sie diesen möglicherweise überschreiben, um in Ihren abgeleiteten Klassenmethoden Eltern-`SharedArrayBuffer`-Objekte zurückzugeben:

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
