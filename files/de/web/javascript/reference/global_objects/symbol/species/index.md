---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.species`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methoden, die Kopien eines Objekts erstellen, können dieses Symbol im Objekt nachschlagen, um die Konstruktorfunktion zu verwenden, die bei der Erstellung der Kopie verwendet werden soll.

> [!WARNING]
> Die Existenz von `[Symbol.species]` erlaubt die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Außerdem erschwert sie bestimmte Optimierungen erheblich. Implementierer von Engines [untersuchen, ob dieses Feature entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

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

Das bekannte Symbol `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft erlaubt Unterklassen, den Standardkonstruktor für Objekte zu überschreiben. Dies legt ein Protokoll fest, wie Instanzen kopiert werden sollen. Zum Beispiel verwendet die Methode {{jsxref("Array/map", "map()")}} bei Arrays, die Kopiermethoden nutzen, `instance.constructor[Symbol.species]`, um den Konstruktor zum Erstellen des neuen Arrays zu erhalten. Weitere Informationen finden Sie unter [Built-ins erweitern](/de/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins).

Alle eingebauten Implementierungen von `[Symbol.species]` geben den Wert `this` zurück, welcher der Konstruktor der aktuellen Instanz ist. Dies ermöglicht es Kopiermethoden, Instanzen von abgeleiteten Klassen anstelle der Basisklasse zu erstellen — zum Beispiel wird `map()` ein Array des gleichen Typs wie das Originalarray zurückgeben.

## Beispiele

### Verwendung von species

Es kann sein, dass Sie in Ihrer abgeleiteten Array-Klasse `MyArray` {{jsxref("Array")}}-Objekte zurückgeben möchten. Zum Beispiel möchten Sie bei der Verwendung von Methoden wie {{jsxref("Array/map", "map()")}}, die den Standardkonstruktor zurückgeben, dass diese Methoden ein übergeordnetes `Array`-Objekt anstelle eines `MyArray`-Objekts zurückgeben. Das `species`-Symbol ermöglicht dies:

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
