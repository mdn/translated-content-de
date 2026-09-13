---
title: "SyntaxError: character class escape cannot be used in class range in regular expression"
slug: Web/JavaScript/Reference/Errors/Regex_character_class_escape_in_class_range
l10n:
  sourceCommit: a055fad7a07ef41ec3c8f90a3f1d2ad65f22826c
---

Der JavaScript-Ausnahmefehler "character class escape cannot be used in class range in regular expression" tritt auf, wenn ein ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regulärer Ausdruck ein [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) enthält, bei dem eine Grenze eines Zeichenbereichs eine andere Zeichenklasse ist, wie etwa ein [character class escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape).

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[\s-1]/u: Invalid character class (V8-based)
SyntaxError: character class escape cannot be used in class range in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid range in character class for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Eine Zeichenklasse kann einen Bereich von Zeichen durch die Verwendung eines Bindestrichs (`-`) zwischen zwei Zeichen angeben. Zum Beispiel, `[a-z]` entspricht jedem Kleinbuchstaben von `a` bis `z`. Die beiden Grenzen des Bereichs müssen einzelne Zeichen darstellen, damit der Bereich sinnvoll ist. Wenn eine der Grenzen tatsächlich mehrere Zeichen repräsentiert, wird ein Fehler erzeugt. In [Nicht-`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#non-v-mode_character_class) sind nur character class escapes innerhalb von Zeichenklassen erlaubt; in [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kann dies auch vorkommen, wenn eine der Grenzen eine andere `[...]` Zeichenklasse ist.

Im Unicode-unbewussten Modus führt diese Syntax dazu, dass das `-` zu einem literalen Zeichen wird, anstatt einen Fehler zu erzeugen, aber dies ist eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

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
/[[A-z]--_]/v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
