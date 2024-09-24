---
title: "SyntaxError: Unerwartetes '#' außerhalb des Klassenkörpers verwendet"
slug: Web/JavaScript/Reference/Errors/Hash_outside_class
l10n:
  sourceCommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Unerwartetes '#' außerhalb des Klassenkörpers verwendet" tritt auf, wenn ein Hash
("#") in einem unerwarteten Kontext auftritt, insbesondere
[außerhalb einer Klassendeklaration](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
Hashes sind am Anfang einer Datei als [Hashbang-Kommentar](/de/docs/Web/JavaScript/Reference/Lexical_grammar) gültig,
oder innerhalb einer Klasse als Teil eines privaten Felds. Sie könnten auf diesen Fehler stoßen, wenn Sie
die Anführungszeichen vergessen, wenn Sie versuchen, auf einen DOM-Bezeichner zuzugreifen.

## Nachricht

```plain
SyntaxError: Unexpected '#' used outside of class body.
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Wir sind irgendwo auf ein `#` gestoßen, wo es nicht erwartet wurde. Dies kann darauf zurückzuführen sein, dass Code verschoben wurde und nicht mehr Teil einer Klasse ist, ein Hashbang-Kommentar, der sich in einer anderen Zeile als der ersten Zeile einer Datei befindet, oder das versehentliche Vergessen der Anführungszeichen um einen DOM-Bezeichner.

## Beispiele

### Fehlende Anführungszeichen

Für jeden Fall könnte etwas leicht falsch sein. Zum Beispiel:

```js-nolint example-bad
document.querySelector(#some-element)
```

Dies kann korrigiert werden durch

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

Dies kann korrigiert werden, indem das private Feld zurück in die Klasse verschoben wird

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
