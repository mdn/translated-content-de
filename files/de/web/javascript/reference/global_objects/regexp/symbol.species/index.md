---
title: RegExp[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`RegExp[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um kopierte reguläre Ausdrücke in bestimmten `RegExp`-Methoden zu konstruieren.

> [!WARNING]
> Die Existenz von `[Symbol.species]` erlaubt die Ausführung beliebigen Codes und kann Sicherheitslücken schaffen. Sie erschwert auch bestimmte Optimierungen erheblich. Entwickler der Engines sind [dabei, zu untersuchen, ob dieses Feature entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie, sich darauf zu verlassen, wenn möglich.

{{EmbedInteractiveExample("pages/js/regexp-getregexp-@@species.html")}}

## Syntax

```js-nolint
RegExp[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `RegExp`-Instanzen zu konstruieren.

## Beschreibung

Die `[Symbol.species]` Accessor-Eigenschaft gibt den Standardkonstruktor für `RegExp`-Objekte zurück. Subklassenkonstruktoren können diese überschreiben, um die Zuweisung des Konstruktors zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetical underlying implementation for illustration
class RegExp {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Subklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubRegExp extends SubRegExp {}
SubRegExp[Symbol.species] === SubRegExp; // true
```

Einige `RegExp`-Methoden erstellen eine Kopie der aktuellen Regex-Instanz, bevor sie {{jsxref("RegExp/exec", "exec()")}} ausführen, damit Seiteneffekte, wie Änderungen an {{jsxref("RegExp/lastIndex", "lastIndex")}}, nicht beibehalten werden. Die `[Symbol.species]`-Eigenschaft wird verwendet, um den Konstruktor der neuen Instanz zu bestimmen. Die Methoden, die die aktuelle Regex-Instanz kopieren, sind:

- [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `RegExp`-Konstruktor für `RegExp`-Objekte ist:

```js
RegExp[Symbol.species]; // function RegExp()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `RegExp`-Subklasse, wie `MyRegExp`, ist die `MyRegExp`-Species der `MyRegExp`-Konstruktor. Sie möchten dies jedoch möglicherweise überschreiben, um in Ihren abgeleiteten Klassenmethoden übergeordnete `RegExp`-Objekte zurückzugeben:

```js
class MyRegExp extends RegExp {
  // Overwrite MyRegExp species to the parent RegExp constructor
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

Oder Sie können dies nutzen, um den Kopiervorgang zu beobachten:

```js
class MyRegExp extends RegExp {
  constructor(...args) {
    console.log("Creating a new MyRegExp instance with args:", args);
    super(...args);
  }
  static get [Symbol.species]() {
    console.log("Copying MyRegExp");
    return this;
  }
  exec(value) {
    console.log("Executing with lastIndex:", this.lastIndex);
    return super.exec(value);
  }
}

Array.from("aabbccdd".matchAll(new MyRegExp("[ac]", "g")));
// Creating a new MyRegExp instance with args: [ '[ac]', 'g' ]
// Copying MyRegExp
// Creating a new MyRegExp instance with args: [ MyRegExp /[ac]/g, 'g' ]
// Executing with lastIndex: 0
// Executing with lastIndex: 1
// Executing with lastIndex: 2
// Executing with lastIndex: 5
// Executing with lastIndex: 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
