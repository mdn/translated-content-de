---
title: Array[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Zugriffseigenschaft **`Array[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um Rückgabewerte von Array-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie macht auch bestimmte Optimierungen deutlich schwieriger. Entwickler von Engines [untersuchen, ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, darauf zu vertrauen. Moderne Array-Methoden, wie etwa {{jsxref("Array/toReversed", "toReversed()")}}, verwenden `[Symbol.species]` nicht und geben immer eine neue `Array`-Basisklasseninstanz zurück.

## Syntax

```js-nolint
Array[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um Rückgabewerte von Array-Methoden zu konstruieren, die neue Arrays erstellen.

## Beschreibung

Die Zugriffseigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Array`-Objekte zurück. Unterklassen-Konstruktoren können sie überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
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

Beim Aufrufen von Array-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (zum Beispiel [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), wird der `constructor[Symbol.species]` des Arrays aufgerufen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Methode zu konstruieren. Dies macht es technisch möglich, dass Array-Methoden Objekte zurückgeben, die nicht mit Arrays in Verbindung stehen.

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

Die Eigenschaft `[Symbol.species]` gibt die Standardkonstruktorfunktion zurück, die der `Array`-Konstruktor für `Array` ist.

```js
Array[Symbol.species]; // [Function: Array]
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `Array`-Unterklasse, wie `MyArray`, ist die `MyArray`-Species der `MyArray`-Konstruktor. Es könnte jedoch gewünscht sein, dies zu überschreiben, um Eltern-`Array`-Objekte in Ihren abgeleiteten Klassenmethoden zurückzugeben:

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
