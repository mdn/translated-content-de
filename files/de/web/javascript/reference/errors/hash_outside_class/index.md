---
title: "SyntaxError: Unerwartetes '#' außerhalb des Klassenkörpers verwendet"
slug: Web/JavaScript/Reference/Errors/Hash_outside_class
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "Unerwartetes '#' außerhalb des Klassenkörpers verwendet" tritt auf, wenn ein Hashzeichen ("#") in einem unerwarteten Kontext gefunden wird, insbesondere [außerhalb einer Klassendeklaration](/de/docs/Web/JavaScript/Reference/Classes/Private_properties). Hashzeichen sind am Anfang einer Datei als [Hashbang-Kommentar](/de/docs/Web/JavaScript/Reference/Lexical_grammar) oder innerhalb einer Klasse als Teil eines privaten Feldes gültig. Dieser Fehler kann auftreten, wenn Sie die Anführungszeichen vergessen, während Sie versuchen, auf eine DOM-Kennung zuzugreifen.

## Meldung

```plain
SyntaxError: Unexpected '#' used outside of class body.
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Wir haben ein `#` an einem unerwarteten Ort gefunden. Dies kann darauf zurückzuführen sein, dass Code verschoben wurde und nicht mehr Teil einer Klasse ist, ein Hashbang-Kommentar, der sich nicht in der ersten Zeile einer Datei befindet, oder dass die Anführungszeichen um eine DOM-Kennung versehentlich vergessen wurden.

## Beispiele

### Fehlende Anführungszeichen

In jedem Fall könnte etwas leicht falsch sein. Zum Beispiel

```js-nolint example-bad
document.querySelector(#some-element)
```

Dies kann behoben werden durch

```js example-good
document.querySelector("#some-element");
```

### Außerhalb einer Klasse

```js-nolint example-bad
class ClassWithPrivateField {
  #privateField;

  constructor() {}
}

this.#privateField = 42;
```

Dies kann behoben werden, indem das private Feld zurück in die Klasse verschoben wird

```js example-good
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}
```

## Siehe auch

- {{jsxref("SyntaxError")}}
