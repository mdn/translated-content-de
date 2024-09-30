---
title: "SyntaxError: Negierte Zeichenklasse mit Strings im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_negated_char_class_with_strings
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "negated character class with strings in regular expression" tritt auf, wenn eine [`v`-Modus-Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) negiert wird und möglicherweise in der Lage ist, einen String (mehr als ein Zeichen) zu matchen.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[^\p{RGI_Emoji_Flag_Sequence}]/v: Negated character class may contain strings (V8-based)
SyntaxError: negated character class with strings in regular expression (Firefox)
SyntaxError: Invalid regular expression: negated class set may contain strings (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im `v`-Modus können Zeichenklassen mehr als ein Zeichen matchen. Zum Beispiel würde `/[\q{abc}]/v` die Sequenz `"abc"` matchen, und `/[\p{RGI_Emoji_Flag_Sequence}]/v` würde jede Zeichenfolge matchen, die eine Emoji-Flagge darstellt. Allerdings dürfen negierte Zeichenklassen `[^...]` keine Strings matchen, daher ist `/[^\p{RGI_Emoji_Flag_Sequence}]/v` ungültig, weil unklar ist, wie viele Zeichen sie matchen sollten. Weitere Informationen finden Sie im [`v`-Modus-Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) Referenz.

## Beispiele

### Ungültige Fälle

```js example-bad
/[^\p{RGI_Emoji_Flag_Sequence}]/v;
```

### Gültige Fälle

```js example-good
// Matches two characters that are not an emoji flag sequence
/(?!\p{RGI_Emoji_Flag_Sequence})../v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
