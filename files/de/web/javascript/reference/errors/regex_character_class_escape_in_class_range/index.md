---
title: "SyntaxError: Zeichenklassenescape kann in einem Bereich innerhalb der regulären Ausdrucksklasse nicht verwendet werden"
slug: Web/JavaScript/Reference/Errors/Regex_character_class_escape_in_class_range
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "character class escape cannot be used in class range in regular expression" tritt auf, wenn ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) reguläres Ausdrucksmuster eine [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) enthält, bei der eine Begrenzung eines Zeichenbereichs eine andere Zeichenklasse ist, wie etwa ein [Zeichenklassenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape).

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[\s-1]/u: Invalid character class (V8-based)
SyntaxError: character class escape cannot be used in class range in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid range in character class for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Eine Zeichenklasse kann einen Bereich von Zeichen angeben, indem ein Bindestrich (`-`) zwischen zwei Zeichen verwendet wird. Zum Beispiel entspricht `[a-z]` jedem Kleinbuchstaben von `a` bis `z`. Die beiden Grenzen des Bereichs müssen einzelne Zeichen darstellen, damit der Bereich sinnvoll ist. Wenn eine der Grenzen tatsächlich mehrere Zeichen darstellt, wird ein Fehler erzeugt. In [Nicht-`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#non-v-mode_character_class) sind nur Zeichenklassenescapes innerhalb von Zeichenklassen erlaubt; in [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kann dies auch vorkommen, wenn eine der Grenzen eine andere `[...]`-Zeichenklasse ist.

Im Unicode-unbewussten Modus führt diese Syntax dazu, dass der `-` zu einem literal Zeichen wird, anstatt einen Fehler zu erzeugen, aber dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht darauf vertraut werden.

## Beispiele

### Ungültige Fälle

```js example-bad
/[\s-_]/u; // \s is a character class escape for whitespace
/[A-\D]/u; // \D is a character class escape for non-digits
/[\p{L}-\p{N}]/u; // \p{L} is a character class escape for Unicode letters
/[[A-z]-_]/v; // In unicodeSets mode, character classes can be nested
```

### Gültige Fälle

```js example-good
// Put the hyphen at the start of the character class,
// so it matches the literal character
/[-\s_]/u;
// Escape the hyphen so it also matches the literal character
/[\s\-_]/u;
// Remove the backslash so the bound is a literal character
/[A-D]/u;
// Remove the hyphen so the two bounds represent two alternatives
/[\p{L}\p{N}]/u;
// Use -- in unicodeSets mode, which represents set subtraction
/[[A-z]--_]]/v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
