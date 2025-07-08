---
title: "SyntaxError: Ungültiger Eigenschaftenname im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_property_name
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "ungültiger Eigenschaftenname im regulären Ausdruck" oder "ungültiger Klassenname im regulären Ausdruck" tritt auf, wenn die `\p` und `\P` [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) nicht von einem gültigen Unicode-Eigenschaftsnamen und/oder -wert gefolgt werden.

## Meldung

```plain
SyntaxError: Invalid regular expression: /\p{x}/u: Invalid property name (V8-based)
SyntaxError: Invalid regular expression: /[\p{x}]/u: Invalid property name in character class (V8-based)
SyntaxError: invalid property name in regular expression (Firefox)
SyntaxError: invalid class property name in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid property expression (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden die `\p` und `\P` [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) verwendet, um Zeichen oder Zeichensequenzen basierend auf ihren Unicode-Eigenschaften zu matchen. Die `\p` Escape-Sequenz matched Zeichen mit der angegebenen Unicode-Eigenschaft, während die `\P` Escape-Sequenz Zeichen ohne die angegebene Unicode-Eigenschaft matched. Die Syntax ist:

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

Wenn diese nicht von `{`, dann einem erkennbaren Eigenschaftsnamen/-wert, dann `}` gefolgt wird, wird dieser Syntaxfehler ausgelöst. Weitere Informationen darüber, welche alleinstehenden Eigenschaften und Eigenschaftsnamen erlaubt sind, finden Sie im Referenzdokument zu [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

## Beispiele

### Ungültige Fälle

```js example-bad
/\p{x}/u; // "x" is not a valid Unicode property name
/\p{Script=x}/u; // "x" is not a valid value for Script
/\property/u; // "\p" is not followed by the right syntax
/\p{RGI_Emoji_Flag_Sequence}/u;
// "RGI_Emoji_Flag_Sequence" is a property of strings, so the "v" flag must be used
/\P{RGI_Emoji_Flag_Sequence}/v; // \P cannot match properties of strings
```

### Gültige Fälle

```js example-good
/\p{Script=Latin}/u; // "Script=Latin" is a valid Unicode property
/\p{Letter}/u; // "Letter" is valid value for General_Category
/\p{RGI_Emoji_Flag_Sequence}/v; // Property of strings can only be used in "v" mode
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
