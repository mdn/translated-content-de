---
title: SharedArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffsproperty **`SharedArrayBuffer[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus `SharedArrayBuffer`-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Engine-Implementierer [untersuchen, ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich nach Möglichkeit darauf zu verlassen.

## Syntax

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte aus Arraypuffer-Methoden zu konstruieren, die neue Arraypuffer erstellen.

## Beschreibung

Die `[Symbol.species]` Accessor-Property gibt den Standardkonstruktor für `SharedArrayBuffer`-Objekte zurück. Unterklassenkonstruktoren können ihn überschreiben, um die Zuweisung des Konstruktors zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetische zugrundeliegende Implementierung zur Veranschaulichung
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

Beim Aufrufen von Arraypuffer-Methoden, die das bestehende Array nicht verändern, sondern eine neue Arraypuffer-Instanz zurückgeben (zum Beispiel [`slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice)), wird auf den `constructor[Symbol.species]` des Arrays zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Arraypuffer-Methode zu konstruieren.

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Property gibt die Standardkonstruktorfunktion zurück, welche der `SharedArrayBuffer`-Konstruktor für `SharedArrayBuffer` ist.

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `SharedArrayBuffer`-Unterklasse, wie `MySharedArrayBuffer`, ist die `MySharedArrayBuffer`-Spezies der `MySharedArrayBuffer`-Konstruktor. Möglicherweise möchten Sie dies jedoch überschreiben, um in den Methoden Ihrer abgeleiteten Klasse Elternelemente `SharedArrayBuffer` zurückzugeben:

```js
class MySharedArrayBuffer extends SharedArrayBuffer {
  // Überschreiben Sie die MySharedArrayBuffer-Spezies zum Elternekonstruktor SharedArrayBuffer
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
