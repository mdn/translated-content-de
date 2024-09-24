---
title: "SyntaxError: ungültiger Bereich in Zeichenklasse"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_range_in_character_class
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiger Bereich in Zeichenklasse" tritt auf, wenn eine [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in einem regulären Ausdruck einen Bereich verwendet, bei dem der Start des Bereichs größer als das Ende ist.

## Meldung

```plain
SyntaxError: Invalid regular expression: /[2-1]/: Range out of order in character class (V8-based)
SyntaxError: invalid range in character class (Firefox)
SyntaxError: Invalid regular expression: range out of order in character class (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

In Zeichenklassen können Sie zwei Zeichen mit einem Bindestrich `-` verbinden, um ein inklusives Intervall von Zeichen basierend auf ihren Unicode-Codepunkten darzustellen. Zum Beispiel entspricht `[a-z]` jedem Kleinbuchstaben. Wenn jedoch das Ende des Bereichs kleiner ist als der Start, kann der Bereich nichts abgleichen und ist wahrscheinlich ein Fehler.

## Beispiele

### Ungültige Fälle

```js example-bad
/[2-1]/; // Der Bereich ist nicht in der richtigen Reihenfolge
/[_-=]/; // _ hat den Wert 95, = hat den Wert 61
```

### Gültige Fälle

```js example-good
/[1-2]/; // Bereich umkehren
/[_\-=]/; // Den Bindestrich maskieren, damit er das wörtliche Zeichen abgleicht
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
