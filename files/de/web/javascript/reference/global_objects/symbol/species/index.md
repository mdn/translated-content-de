---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.species`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methoden, die Kopien eines Objekts erstellen, können dieses Symbol auf dem Objekt nachschlagen, um die zu verwendende Konstruktorfunktion beim Erstellen der Kopie zu bestimmen.

> [!WARNING]
> Die Existenz von `[Symbol.species]` erlaubt die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Sie erschwert auch bestimmte Optimierungen erheblich. Entwickler von Engines untersuchen, [ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die Zugriffsoroperty `[Symbol.species]` ermöglicht es Unterklassen, den Standardkonstruktor für Objekte zu überschreiben. Dies spezifiziert ein Protokoll darüber, wie Instanzen kopiert werden sollten. Zum Beispiel, wenn Sie Kopiermethoden von Arrays verwenden, wie {{jsxref("Array/map", "map()")}}. Die `map()`-Methode verwendet `instance.constructor[Symbol.species]`, um den Konstruktor für das neue Array zu erhalten. Weitere Informationen finden Sie unter [Unterklassen von Built-ins](/de/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins).

Alle eingebauten Implementierungen von `[Symbol.species]` geben den `this`-Wert zurück, welcher der Konstruktor der aktuellen Instanz ist. Dies erlaubt es Kopiermethoden, Instanzen von abgeleiteten Klassen statt der Basisklasse zu erstellen – zum Beispiel wird `map()` ein Array desselben Typs wie das ursprüngliche Array zurückgeben.

## Beispiele

### Verwendung von species

Möglicherweise möchten Sie, dass in Ihrer abgeleiteten Array-Klasse `MyArray` {{jsxref("Array")}}-Objekte zurückgegeben werden. Zum Beispiel, wenn Sie Methoden wie {{jsxref("Array/map", "map()")}} verwenden, die den Standardkonstruktor zurückgeben, möchten Sie, dass diese Methoden ein Eltern-`Array`-Objekt anstelle des `MyArray`-Objekts zurückgeben. Das `species`-Symbol ermöglicht Ihnen dies:

```js
class MyArray extends Array {
  // Überschreiben von species auf den Eltern-Array-Konstruktor
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
