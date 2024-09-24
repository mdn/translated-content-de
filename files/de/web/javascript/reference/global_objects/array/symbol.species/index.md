---
title: Array[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Array[Symbol.species]`** statische Accessor-Eigenschaft gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Array-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Außerdem macht es bestimmte Optimierungen viel schwieriger. Implementierungsingenieure untersuchen, [ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie, sich darauf zu verlassen, wenn möglich. Moderne Array-Methoden, wie z.B. {{jsxref("Array/toReversed", "toReversed()")}}, verwenden `[Symbol.species]` nicht und geben immer eine neue Instanz der `Array`-Basisklasse zurück.

## Syntax

```js-nolint
Array[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf den `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Array-Methoden zu konstruieren, die neue Arrays erzeugen.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `Array`-Objekte zurück. Unterklassenkonstruktoren können ihn überschreiben, um die Zuweisung des Konstruktors zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetische zugrunde liegende Implementierung zur Veranschaulichung
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

Beim Aufrufen von Array-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), wird auf den `constructor[Symbol.species]` des Arrays zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Methode zu konstruieren. Dies macht es technisch möglich, dass Array-Methoden Objekte zurückgeben, die mit Arrays nicht verwandt sind.

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

Die `[Symbol.species]`-Eigenschaft gibt die Standard-Konstruktorfunktion zurück, die für `Array` der `Array`-Konstruktor ist.

```js
Array[Symbol.species]; // [Function: Array]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Array`-Unterklasse, wie `MyArray`, ist die `MyArray`-Species der `MyArray`-Konstruktor. Es könnte jedoch gewünscht sein, diesen zu überschreiben, um in den Methoden Ihrer abgeleiteten Klasse Elternelement-`Array`-Objekte zurückzugeben:

```js
class MyArray extends Array {
  // Überschreibt die MyArray-Species auf den Elternelement-Array-Konstruktor
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
- Leitfaden zu [Indexierten Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
