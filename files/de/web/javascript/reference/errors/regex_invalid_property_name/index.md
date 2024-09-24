---
title: "SyntaxError: Ungültiger Eigenschaftsname im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_property_name
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiger Eigenschaftsname im regulären Ausdruck" oder "ungültiger Klasseneigenschaftsname im regulären Ausdruck" tritt auf, wenn die `\p` und `\P` [Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) nicht von einem gültigen Unicode-Eigenschaftsnamen und/oder -wert gefolgt werden.

## Nachricht

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

Im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden die `\p` und `\P` [Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) verwendet, um Zeichen oder Zeichensequenzen basierend auf ihren Unicode-Eigenschaften zu finden. Die `\p` Escape-Sequenz findet Zeichen mit der angegebenen Unicode-Eigenschaft, während die `\P` Escape-Sequenz Zeichen ohne die angegebene Unicode-Eigenschaft findet. Die Syntax lautet:

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

Wenn sie nicht von `{`, dann einem erkennbaren Eigenschaftsnamen/-wert, gefolgt von `}` begleitet wird, wird dieser Syntaxfehler ausgelöst. Weitere Informationen darüber, welche einzelnen Eigenschaften und Eigenschaftsnamen erlaubt sind, finden Sie in der Referenz zur [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

## Beispiele

### Ungültige Fälle

```js example-bad
/\p{x}/u; // "x" ist kein gültiger Unicode-Eigenschaftsname
/\p{Script=x}/u; // "x" ist kein gültiger Wert für Script
/\property/u; // "\p" wird nicht von der richtigen Syntax gefolgt
/\p{RGI_Emoji_Flag_Sequence}/u;
// "RGI_Emoji_Flag_Sequence" ist eine Eigenschaft von Strings, daher muss das "v"-Flag verwendet werden
/\P{RGI_Emoji_Flag_Sequence}/v; // \P kann keine Eigenschaften von Strings abgleichen
```

### Gültige Fälle

```js example-good
/\p{Script=Latin}/u; // "Script=Latin" ist eine gültige Unicode-Eigenschaft
/\p{Letter}/u; // "Letter" ist ein gültiger Wert für General_Category
/\p{RGI_Emoji_Flag_Sequence}/v; // Eigenschaft von Strings kann nur im "v"-Modus verwendet werden
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
