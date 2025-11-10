---
title: Symbol.species
short-title: species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Symbol.species`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.species`. Methoden, die Kopien eines Objekts erstellen, können dieses Symbol im Objekt nachschlagen, um die zu verwendende Konstruktorfunktion bei der Erstellung der Kopie zu bestimmen.

> [!WARNING]
> Die Existenz von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Außerdem erschwert sie bestimmte Optimierungen erheblich. Entwickler von Engines untersuchen [derzeit, ob diese Funktion entfernt werden soll](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es, sich darauf zu verlassen, wenn möglich.

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

Die Zugriffsoroeigenschaft `[Symbol.species]` erlaubt es Unterklassen, den Standardkonstruktor für Objekte zu überschreiben. Dies spezifiziert ein Protokoll darüber, wie Instanzen kopiert werden sollten. Wenn Sie beispielsweise Kopiermethoden von Arrays verwenden, wie {{jsxref("Array/map", "map()")}}, verwendet die Methode `map()` `instance.constructor[Symbol.species]`, um den Konstruktor für die Erstellung des neuen Arrays zu erhalten. Weitere Informationen finden Sie unter [Vererbung eingebauter Objekte](/de/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins).

Alle eingebauten Implementierungen von `[Symbol.species]` geben den `this`-Wert zurück, der der Konstruktor der aktuellen Instanz ist. Dadurch können Kopiermethoden Instanzen von abgeleiteten Klassen anstelle der Basisklasse erstellen - zum Beispiel wird `map()` ein Array des gleichen Typs wie das ursprüngliche Array zurückgeben.

## Beispiele

### Verwendung von species

Möglicherweise möchten Sie in Ihrer abgeleiteten Array-Klasse `MyArray` {{jsxref("Array")}}-Objekte zurückgeben. Beispielsweise möchten Sie, wenn Sie Methoden wie {{jsxref("Array/map", "map()")}} verwenden, die den Standardkonstruktor zurückgeben, dass diese Methoden ein übergeordnetes `Array`-Objekt zurückgeben, anstatt eines `MyArray`-Objekts. Das `species`-Symbol ermöglicht es Ihnen, dies zu tun:

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
