---
title: Array[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Zugriffseigenschaft **`Array[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte aus Array-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von willkürlichem Code und kann Sicherheitslücken schaffen. Es macht auch bestimmte Optimierungen erheblich schwieriger. Entwickler der Engines [untersuchen, ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie, sich darauf zu verlassen, wenn möglich. Moderne Array-Methoden, wie zum Beispiel {{jsxref("Array/toReversed", "toReversed()")}}, verwenden `[Symbol.species]` nicht und geben immer eine neue Instanz der `Array`-Basisklasse zurück.

## Syntax

```js-nolint
Array[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Array-Methoden zu konstruieren, die neue Arrays erstellen.

## Beschreibung

Die `[Symbol.species]` Zugriffseigenschaft gibt den Standardkonstruktor für `Array`-Objekte zurück. Konstruktoren von Unterklassen können sie überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig ebenfalls den Konstruktor selbst zurückgeben.

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

Beim Aufrufen von Array-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel, [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), wird das `constructor[Symbol.species]` des Arrays abgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Methode zu konstruieren. Dadurch ist es technisch möglich, dass Array-Methoden Objekte zurückgeben, die nicht mit Arrays verwandt sind.

```js
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
arr.map((i) => i); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
arr.concat([1, 2]); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }
```

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die für `Array` der `Array`-Konstruktor ist.

```js
Array[Symbol.species]; // [Function: Array]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Array`-Unterklasse, wie `MyArray`, ist die `MyArray`-Species der `MyArray`-Konstruktor. Sie könnten dies jedoch überschreiben wollen, um in Ihren abgeleiteten Klassenmethoden Eltern-`Array`-Objekte zurückzugeben:

```js
class MyArray extends Array {
  // Overwrite MyArray species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Array[Symbol.species]` und Unterstützung von `[Symbol.species]` in allen betroffenen `Array`-Methoden in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
