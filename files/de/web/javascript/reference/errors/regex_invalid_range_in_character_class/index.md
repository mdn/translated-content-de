---
title: "SyntaxError: invalid range in character class"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_range_in_character_class
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "invalid range in character class" tritt auf, wenn eine [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in einem regulären Ausdruck einen Bereich verwendet, bei dem der Beginn des Bereichs größer ist als das Ende.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[2-1]/: Range out of order in character class (V8-based)
SyntaxError: invalid range in character class (Firefox)
SyntaxError: Invalid regular expression: range out of order in character class (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

In Zeichenklassen können zwei Zeichen mit einem Bindestrich `-` verbunden werden, um ein inklusive Intervall von Zeichen basierend auf ihren Unicode-Codepunkten darzustellen. Zum Beispiel entspricht `[a-z]` jedem Kleinbuchstaben. Wenn jedoch das Ende des Bereichs kleiner als der Beginn ist, kann der Bereich nichts matchen und ist höchstwahrscheinlich ein Fehler.

## Beispiele

### Ungültige Fälle

```js example-bad
/[2-1]/; // The range is out of order
/[_-=]/; // _ has value 95, = has value 61
```

### Gültige Fälle

```js example-good
/[1-2]/; // Swap the range
/[_\-=]/; // Escape the hyphen so it matches the literal character
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
