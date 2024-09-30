---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.species`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methoden, die Kopien eines Objekts erstellen, könnten dieses Symbol im Objekt nachschlagen, um die zu verwendende Konstruktorfunktion beim Erstellen der Kopie zu finden.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken erzeugen. Sie erschwert auch bestimmte Optimierungen erheblich. Engine-Entwickler [untersuchen, ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich nach Möglichkeit darauf zu verlassen.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft ermöglicht es Unterklassen, den Standardkonstruktor für Objekte zu überschreiben. Dies spezifiziert ein Protokoll darüber, wie Instanzen kopiert werden sollen. Zum Beispiel, wenn Sie Kopiermethoden von Arrays verwenden, wie {{jsxref("Array/map", "map()")}}. Die `map()`-Methode verwendet `instance.constructor[Symbol.species]`, um den Konstruktor für das Erstellen des neuen Arrays zu erhalten. Für weitere Informationen sehen Sie sich bitte das Thema [subclassing built-ins](/de/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins) an.

Alle eingebauten Implementierungen von `[Symbol.species]` geben den `this`-Wert zurück, welcher der Konstruktor der aktuellen Instanz ist. Dies ermöglicht es Kopiermethoden, Instanzen von abgeleiteten Klassen anstelle der Basisklasse zu erstellen — zum Beispiel wird `map()` ein Array desselben Typs wie das ursprüngliche Array zurückgeben.

## Beispiele

### Verwendung von species

Sie möchten vielleicht {{jsxref("Array")}}-Objekte in Ihrer abgeleiteten Array-Klasse `MyArray` zurückgeben. Zum Beispiel, wenn Sie Methoden wie {{jsxref("Array/map", "map()")}} verwenden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein Eltern-`Array`-Objekt zurückgeben, anstelle des `MyArray`-Objekts. Das `species`-Symbol ermöglicht Ihnen dies:

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
