---
title: "SyntaxError: Unerwartetes '#' außerhalb des Klassenkörpers verwendet"
slug: Web/JavaScript/Reference/Errors/Hash_outside_class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "Unerwartetes '#' außerhalb des Klassenkörpers verwendet" tritt auf, wenn ein Hash-Zeichen ("#") in einem unerwarteten Kontext, insbesondere [außerhalb einer Klassendeklaration](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), auftritt. Hash-Zeichen sind am Anfang einer Datei als [Hashbang-Kommentar](/de/docs/Web/JavaScript/Reference/Lexical_grammar) zulässig oder innerhalb einer Klasse als Teil eines privaten Feldes. Dieser Fehler kann auch auftreten, wenn die Anführungszeichen beim Zugriff auf einen DOM-Identifier vergessen werden.

## Nachricht

```plain
SyntaxError: Unexpected '#' used outside of class body.
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Wir haben irgendwo ein unerwartetes `#` entdeckt. Dies kann darauf zurückzuführen sein, dass Code verschoben wurde und nicht mehr Teil einer Klasse ist, ein Hashbang-Kommentar auf einer anderen als der ersten Zeile einer Datei gefunden wurde oder die Anführungszeichen um einen DOM-Identifier versehentlich vergessen wurden.

## Beispiele

### Fehlende Anführungszeichen

In jedem Fall könnte es einen kleinen Fehler geben. Zum Beispiel

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
