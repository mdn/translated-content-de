---
title: RegExp[Symbol.species]
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Zugriffseigenschaft **`RegExp[Symbol.species]`** gibt den Konstruktor zurück, der verwendet wird, um kopierte reguläre Ausdrücke in bestimmten `RegExp`-Methoden zu erstellen.

> [!WARNING]
> Die Existenz von `[Symbol.species]` erlaubt die Ausführung von willkürlichem Code und kann Sicherheitslücken erzeugen. Es macht auch bestimmte Optimierungen deutlich schwieriger. Entwickler von Engines untersuchen [ob diese Funktion entfernt werden sollte](https://github.com/tc39/proposal-rm-builtin-subclassing). Vermeiden Sie, sich darauf zu verlassen, wenn möglich.

## Syntax

```js-nolint
RegExp[Symbol.species]
```

### Rückgabewert

Der Wert des Konstruktors (`this`), auf dem `get [Symbol.species]` aufgerufen wurde. Der Rückgabewert wird verwendet, um kopierte `RegExp`-Instanzen zu erstellen.

## Beschreibung

Die Zugriffseigenschaft `[Symbol.species]` gibt den Standardkonstruktor für `RegExp`-Objekte zurück. Unterklassen-Konstruktoren können diese überschreiben, um die Konstruktorzuordnung zu ändern. Die Standardimplementierung sieht im Wesentlichen so aus:

```js
// Hypothetical underlying implementation for illustration
class RegExp {
  static get [Symbol.species]() {
    return this;
  }
}
```

Aufgrund dieser polymorphen Implementierung würde `[Symbol.species]` von abgeleiteten Unterklassen auch standardmäßig den Konstruktor selbst zurückgeben.

```js
class SubRegExp extends SubRegExp {}
SubRegExp[Symbol.species] === SubRegExp; // true
```

Einige `RegExp`-Methoden erstellen eine Kopie der aktuellen Regex-Instanz, bevor sie {{jsxref("RegExp/exec", "exec()")}} ausführen, um zu verhindern, dass Seiteneffekte wie Änderungen an {{jsxref("RegExp/lastIndex", "lastIndex")}} erhalten bleiben. Die Eigenschaft `[Symbol.species]` wird verwendet, um den Konstruktor der neuen Instanz zu bestimmen. Die Methoden, die die aktuelle Regex-Instanz kopieren, sind:

- [`[Symbol.matchAll]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
- [`[Symbol.split]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)

## Beispiele

### Species in gewöhnlichen Objekten

Die `[Symbol.species]`-Eigenschaft gibt die Standard-Konstruktorfunktion zurück, bei `RegExp`-Objekten ist dies der `RegExp`-Konstruktor:

```js
RegExp[Symbol.species]; // function RegExp()
```

### Species in abgeleiteten Objekten

In einer Instanz einer benutzerdefinierten `RegExp`-Unterklasse, wie `MyRegExp`, ist das Species von `MyRegExp` der `MyRegExp`-Konstruktor. Vielleicht möchten Sie dies jedoch überschreiben, um in Ihren abgeleiteten Klassenmethoden Eltern-`RegExp`-Objekte zurückzugeben:

```js
class MyRegExp extends RegExp {
  // Overwrite MyRegExp species to the parent RegExp constructor
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

Oder Sie können dies verwenden, um den Kopiervorgang zu beobachten:

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
