---
title: "SyntaxError: ungültiger Bereich in Zeichensatz"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_range_in_character_class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "ungültiger Bereich in Zeichensatz" tritt auf, wenn eine [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in einem regulären Ausdruck einen Bereich verwendet, bei dem der Anfang des Bereichs größer ist als das Ende.

## Meldung

```plain
SyntaxError: Invalid regular expression: /[2-1]/: Range out of order in character class (V8-based)
SyntaxError: invalid range in character class (Firefox)
SyntaxError: Invalid regular expression: range out of order in character class (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

In Zeichenklassen können Sie zwei Zeichen mit einem Bindestrich `-` verbinden, um ein inklusives Intervall von Zeichen basierend auf ihren Unicode-Codepunkten darzustellen. Zum Beispiel, `[a-z]` entspricht jedem Kleinbuchstaben. Wenn jedoch das Ende des Bereichs kleiner als der Anfang ist, kann der Bereich nichts übereinstimmen und ist wahrscheinlich ein Fehler.

## Beispiele

### Ungültige Fälle

```js example-bad
/[9-1]/; // The range is out of order
/[_-=]/; // _ has value 95, = has value 61
```

### Gültige Fälle

```js example-good
/[1-9]/; // Swap the range
/[_\-=]/; // Escape the hyphen so it matches the literal character
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
