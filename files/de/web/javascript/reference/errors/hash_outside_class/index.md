---
title: "SyntaxError: Unerwartetes '#' außerhalb des Klassenkörpers verwendet"
slug: Web/JavaScript/Reference/Errors/Hash_outside_class
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "Unerwartetes '#' außerhalb des Klassenkörpers verwendet" tritt auf, wenn ein Hash
("#") in einem unerwarteten Kontext erscheint, insbesondere
[außerhalb einer Klassendeklaration](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).
Hashes sind am Anfang einer Datei als [Hashbang-Kommentar](/de/docs/Web/JavaScript/Reference/Lexical_grammar) erlaubt oder innerhalb einer Klasse als Teil eines privaten Feldes. Dieser Fehler kann auftreten, wenn Sie die Anführungszeichen vergessen, wenn Sie versuchen, auf einen DOM-Bezeichner zuzugreifen.

## Meldung

```plain
SyntaxError: Unexpected '#' used outside of class body.
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Wir haben ein `#` an einer unerwarteten Stelle gefunden. Dies kann daran liegen, dass der Code bewegt wurde und nicht mehr Teil einer Klasse ist, ein Hashbang-Kommentar, der sich nicht in der ersten Zeile einer Datei befindet, oder dass die Anführungszeichen um einen DOM-Bezeichner versehentlich weggelassen wurden.

## Beispiele

### Fehlende Anführungszeichen

Für jeden Fall könnte etwas leicht falsch sein. Zum Beispiel

```js-nolint example-bad
document.querySelector(#some-element)
```

Dies kann durch Folgendes behoben werden

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
