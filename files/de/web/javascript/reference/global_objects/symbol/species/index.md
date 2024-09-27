---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.species`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methoden, die Kopien eines Objekts erstellen, können dieses Symbol im Objekt nachschlagen, um die Konstruktorfunktion für die Erstellung der Kopie zu verwenden.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Die Entwickler der Engines [untersuchen, ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Wert

Das bekannte Symbol `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die ` [Symbol.species]`-Accessor-Eigenschaft erlaubt Unterklassen, den Standardkonstruktor für Objekte zu überschreiben. Dies legt ein Protokoll darüber fest, wie Instanzen kopiert werden sollten. Zum Beispiel, wenn Sie Kopiermethoden von Arrays verwenden, wie {{jsxref("Array/map", "map()")}}. die `map()`-Methode verwendet `instance.constructor[Symbol.species]`, um den Konstruktor für die Erstellung des neuen Arrays zu bekommen. Für weitere Informationen siehe das [Unterklassen von eingebaute Funktionen](/de/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins).

Alle eingebauten Implementierungen von `[Symbol.species]` geben den `this`-Wert zurück, der der Konstruktor der aktuellen Instanz ist. Dies ermöglicht es Kopiermethoden, Instanzen abgeleiteter Klassen anstelle der Basisklasse zu erstellen — zum Beispiel, `map()` wird ein Array des gleichen Typs wie das ursprüngliche Array zurückgeben.

## Beispiele

### Verwendung von species

Sie möchten möglicherweise {{jsxref("Array")}}-Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben. Beispielsweise, wenn Sie Methoden wie {{jsxref("Array/map", "map()")}} verwenden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein übergeordnetes `Array`-Objekt zurückgeben, anstatt des `MyArray`-Objekts. Das `species`-Symbol ermöglicht Ihnen dies:

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
