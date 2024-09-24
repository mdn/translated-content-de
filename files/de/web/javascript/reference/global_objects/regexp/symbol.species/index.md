---
title: RegExp[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Accessor-Eigenschaft **`RegExp[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um in bestimmten `RegExp`-Methoden kopierte reguläre Ausdrücke zu konstruieren.

> [!WARNING]
> Das Vorhandensein von `[Symbol.species]` ermöglicht die Ausführung von beliebigem Code und kann Sicherheitslücken schaffen. Es erschwert auch bestimmte Optimierungen erheblich. Die Entwickler von Engines [untersuchen, ob dieses Feature entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie es nach Möglichkeit, sich darauf zu verlassen.

{{EmbedInteractiveExample("pages/js/regexp-getregexp-@@species.html")}}

## Syntax

```js-nolint
RegExp[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `RegExp`-Instanzen zu konstruieren.

## Beschreibung

Die Accessor-Eigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `RegExp`-Objekte zurück. Unterklassen-Konstruktoren können ihn überschreiben, um die Konstruktorzuweisung zu ändern. Die Standardimplementierung ist im Wesentlichen:

```js
// Hypothetische zugrunde liegende Implementierung zur Veranschaulichung
class RegExp {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen standardmäßig auch den Konstruktor selbst zurückgeben.

```js
class SubRegExp extends SubRegExp {}
SubRegExp[Symbol.species] === SubRegExp; // true
```

Einige `RegExp`-Methoden erstellen eine Kopie der aktuellen Regex-Instanz, bevor {{jsxref("RegExp/exec", "exec()")}} ausgeführt wird, damit Nebeneffekte wie Änderungen an {{jsxref("RegExp/lastIndex", "lastIndex")}} nicht beibehalten werden. Die `[Symbol.species]`-Eigenschaft wird verwendet, um den Konstruktor der neuen Instanz zu bestimmen. Die Methoden, die die aktuelle Regex-Instanz kopieren, sind:

- [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)

## Beispiele

### Species in normalen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standardkonstruktorfunktion zurück, die der `RegExp`-Konstruktor für `RegExp`-Objekte ist:

```js
RegExp[Symbol.species]; // function RegExp()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `RegExp`-Unterklasse, wie `MyRegExp`, ist die `MyRegExp`-Species der `MyRegExp`-Konstruktor. Sie könnten dies jedoch überschreiben wollen, um in Ihren abgeleiteten Klassenmethoden übergeordnete `RegExp`-Objekte zurückzugeben:

```js
class MyRegExp extends RegExp {
  // Überschreiben der MyRegExp-Species zum übergeordneten RegExp-Konstruktor
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

Oder Sie können dies verwenden, um den Kopiervorgang zu beobachten:

```js
class MyRegExp extends RegExp {
  constructor(...args) {
    console.log("Erstellung einer neuen MyRegExp-Instanz mit Argumenten:", args);
    super(...args);
  }
  static get [Symbol.species]() {
    console.log("Kopieren von MyRegExp");
    return this;
  }
  exec(value) {
    console.log("Ausführung mit lastIndex:", this.lastIndex);
    return super.exec(value);
  }
}

Array.from("aabbccdd".matchAll(new MyRegExp("[ac]", "g")));
// Erstellung einer neuen MyRegExp-Instanz mit Argumenten: [ '[ac]', 'g' ]
// Kopieren von MyRegExp
// Erstellung einer neuen MyRegExp-Instanz mit Argumenten: [ MyRegExp /[ac]/g, 'g' ]
// Ausführung mit lastIndex: 0
// Ausführung mit lastIndex: 1
// Ausführung mit lastIndex: 2
// Ausführung mit lastIndex: 5
// Ausführung mit lastIndex: 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
