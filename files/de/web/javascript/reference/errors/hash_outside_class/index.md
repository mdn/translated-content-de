---
title: "SyntaxError: Unerwartetes '#' außerhalb des Klassenkörpers"
slug: Web/JavaScript/Reference/Errors/Hash_outside_class
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Unerwartetes '#' außerhalb des Klassenkörpers verwendet" tritt auf, wenn ein Hash
("#") in einem unerwarteten Kontext, insbesondere
[außerhalb einer Klassendeklaration](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), gefunden wird.
Hashes sind am Anfang einer Datei als [Hashbang-Kommentar](/de/docs/Web/JavaScript/Reference/Lexical_grammar) gültig
oder innerhalb einer Klasse als Teil eines privaten Feldes. Sie können auf diesen Fehler stoßen, wenn Sie vergessen,
die Anführungszeichen beim Zugriff auf eine DOM-Kennung zu setzen.

## Meldung

```plain
SyntaxError: Unexpected '#' used outside of class body.
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ging schief?

Wir sind irgendwo auf ein unerwartetes `#` gestoßen. Dies kann daran liegen, dass Code verschoben wurde und nicht mehr Teil einer Klasse ist, ein Hashbang-Kommentar auf einer anderen Zeile als der ersten Zeile einer Datei gefunden wurde oder versehentlich die Anführungszeichen um eine DOM-Kennung vergessen wurden.

## Beispiele

### Fehlende Anführungszeichen

In jedem Fall könnte etwas leicht falsch sein. Zum Beispiel

```js-nolint example-bad
document.querySelector(#some-element)
```

Dies kann folgendermaßen behoben werden

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
