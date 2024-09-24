---
title: "SyntaxError: Zeichenklassen-Escape kann nicht in einem Klassenbereich in einem regulären Ausdruck verwendet werden"
slug: Web/JavaScript/Reference/Errors/Regex_character_class_escape_in_class_range
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "character class escape cannot be used in class range in regular expression" tritt auf, wenn ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) reguläres Ausdrucksmuster eine [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) enthält, bei der eine Grenze eines Zeichenbereichs eine andere Zeichenklasse ist, wie zum Beispiel ein [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape).

## Meldung

```plain
SyntaxError: Invalid regular expression: /[\s-1]/u: Invalid character class (V8-based)
SyntaxError: character class escape cannot be used in class range in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid range in character class for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgegangen?

Eine Zeichenklasse kann einen Bereich von Zeichen angeben, indem ein Bindestrich (`-`) zwischen zwei Zeichen verwendet wird. Beispielsweise matcht `[a-z]` jedes Kleinbuchstaben von `a` bis `z`. Die beiden Grenzen des Bereichs müssen einzelne Zeichen darstellen, damit der Bereich sinnvoll ist. Wenn eine der Grenzen tatsächlich mehrere Zeichen darstellt, wird ein Fehler generiert. In [nicht-`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#non-v-mode_character_class) sind nur Zeichenklassen-Escapes innerhalb von Zeichenklassen erlaubt; in [`v`-Modus-Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) kann dies auch passieren, wenn eine der Grenzen eine andere `[...]`-Zeichenklasse ist.

Im Unicode-unbewussten Modus führt diese Syntax dazu, dass der `-` zu einem literalen Zeichen wird, anstatt einen Fehler zu erzeugen. Dies ist jedoch eine [veraltete Syntax](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

## Beispiele

### Ungültige Fälle

```js example-bad
/[\s-_]/u; // \s ist ein Zeichenklassen-Escape für Leerzeichen
/[A-\D]/u; // \D ist ein Zeichenklassen-Escape für Nicht-Ziffern
/[\p{L}-\p{N}]/u; // \p{L} ist ein Zeichenklassen-Escape für Unicode-Buchstaben
/[[A-z]-_]/v; // Im unicodeSets-Modus können Zeichenklassen verschachtelt werden
```

### Gültige Fälle

```js example-good
// Setzen Sie den Bindestrich an den Anfang der Zeichenklasse,
// damit er das literale Zeichen matcht
/[-\s_]/u;
// Entkommas Zeichen- des Bindestrichs, damit er auch das literale Zeichen matcht
/[\s\-_]/u;
// Entfernen Sie den Rückwärtsstrich, damit die Grenze ein literales Zeichen ist
/[A-D]/u;
// Entfernen Sie den Bindestrich, damit die beiden Grenzen zwei Alternativen darstellen
/[\p{L}\p{N}]/u;
// Verwenden Sie -- im unicodeSets-Modus, um eine Mengensubtraktion darzustellen
/[[A-z]--_]]/v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
