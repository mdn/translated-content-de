---
title: Symbol.species
short-title: species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Das statische Dateneigenschaft **`Symbol.species`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methoden, die Kopien eines Objekts erstellen, können auf dieses Symbol auf dem Objekt zugreifen, um die zu verwendende Konstruktorfunktion beim Erstellen der Kopie zu ermitteln.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie macht auch bestimmte Optimierungen deutlich schwieriger. Implementierer von Engines [untersuchen, ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

{{InteractiveExample("JavaScript Demo: Symbol.species")}}

```js interactive-example
class Array1 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new Array1(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof Array1);
// Expected output: false

console.log(mapped instanceof Array);
// Expected output: true
```

## Wert

Das wohlbekannte Symbol `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft erlaubt es Unterklassen, den Standardkonstruktor für Objekte zu überschreiben. Dies spezifiziert ein Protokoll darüber, wie Instanzen kopiert werden sollen. Wenn Sie beispielsweise Kopiermethoden von Arrays wie {{jsxref("Array/map", "map()")}} verwenden, nutzt die `map()`-Methode `instance.constructor[Symbol.species]`, um den Konstruktor für das Erstellen des neuen Arrays zu erhalten. Für weitere Informationen siehe [Unterklassen von Built-ins](/de/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins).

Alle eingebauten Implementierungen von `[Symbol.species]` geben den `this`-Wert zurück, welcher der Konstruktor der aktuellen Instanz ist. Dies ermöglicht es Kopiermethoden, Instanzen von abgeleiteten Klassen statt der Basisklasse zu erstellen — zum Beispiel wird `map()` ein Array desselben Typs wie das ursprüngliche Array zurückgeben.

## Beispiele

### Verwendung von Species

Möglicherweise möchten Sie in Ihrer abgeleiteten Array-Klasse `MyArray` {{jsxref("Array")}}-Objekte zurückgeben. Beispielsweise bei der Verwendung von Methoden wie {{jsxref("Array/map", "map()")}}, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein Eltern-`Array`-Objekt statt eines `MyArray`-Objekts zurückgeben. Das `species`-Symbol ermöglicht Ihnen dies:

```js
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`ArrayBuffer[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
- [`Map[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
- [`Promise[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
- [`RegExp[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
- [`Set[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
- [`TypedArray[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
