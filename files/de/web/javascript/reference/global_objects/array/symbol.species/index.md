---
title: Array[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Accessor-Eigenschaft **`Array[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um die Rückgabewerte von Array-Methoden zu erzeugen.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung beliebigen Codes und kann Sicherheitslücken verursachen. Sie erschwert außerdem bestimmte Optimierungen erheblich. Entwickler von JavaScript-Engines [untersuchen, ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie nach Möglichkeit, sich darauf zu verlassen. Moderne Array-Methoden wie {{jsxref("Array/toReversed", "toReversed()")}} verwenden `[Symbol.species]` nicht und geben immer eine neue Instanz der Basisklasse `Array` zurück.

## Syntax

```js-nolint
Array[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), für den `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um die Rückgabewerte von Array-Methoden zu erzeugen, die neue Arrays erstellen.

## Beschreibung

Die Accessor-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `Array`-Objekte zurück. Konstruktoren von Unterklassen können sie überschreiben, um festzulegen, welcher Konstruktor verwendet wird. Die Standardimplementierung entspricht im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung gibt `[Symbol.species]` auch für abgeleitete Unterklassen standardmäßig deren eigenen Konstruktor zurück.

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

Beim Aufruf von Array-Methoden, die das bestehende Array nicht verändern, sondern eine neue Array-Instanz zurückgeben (beispielsweise [`filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) und [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), wird auf `constructor[Symbol.species]` des Arrays zugegriffen. Der zurückgegebene Konstruktor wird verwendet, um den Rückgabewert der Array-Methode zu erzeugen. Dadurch ist es technisch möglich, dass Array-Methoden Objekte zurückgeben, die keine Arrays sind.

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

### Species bei gewöhnlichen Objekten

Die Eigenschaft `[Symbol.species]` gibt die Standard-Konstruktorfunktion zurück. Für `Array` ist dies der `Array`-Konstruktor.

```js
Array[Symbol.species]; // [Function: Array]
```

### Species bei abgeleiteten Objekten

Bei einer Instanz einer benutzerdefinierten `Array`-Unterklasse wie `MyArray` ist die Species von `MyArray` der Konstruktor `MyArray`. Sie können dies jedoch überschreiben, damit Methoden Ihrer abgeleiteten Klasse stattdessen Objekte der übergeordneten Klasse `Array` zurückgeben:

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

- [Polyfill für `Array[Symbol.species]` und Unterstützung von `[Symbol.species]` in allen betroffenen `Array`-Methoden in `core-js`](https://core-js.io/docs/features/ecmascript/array)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) – Leitfaden
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
