---
title: "SyntaxError: raw bracket is not allowed in regular expression with unicode flag"
slug: Web/JavaScript/Reference/Errors/Regex_raw_bracket
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "raw bracket is not allowed in regular expression with unicode flag" tritt auf, wenn ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) reguläres Ausdrucksmuster eine rohe Klammer (`{`, `}`, `]`) enthält, die nicht Teil eines [Quantors](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) oder einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) ist.

## Meldung

```plain
SyntaxError: Invalid regular expression: /{/u: Lone quantifier brackets (V8-based)
SyntaxError: raw bracket is not allowed in regular expression with unicode flag (Firefox)
SyntaxError: Invalid regular expression: incomplete {} quantifier for Unicode pattern (Safari)
SyntaxError: Invalid regular expression: unmatched ] or } bracket for Unicode pattern (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Im Unicode-unbewussten Modus werden `{`, `}` und `]`, die nicht Teil eines Quantors oder einer Zeichenklasse sind, als literale Zeichen behandelt. Dies kann Fehler in Ihrem Code verbergen und ist daher im Unicode-bewussten Modus veraltet und nicht erlaubt. Sie sollten entweder prüfen, ob Sie ungültige Syntax haben oder die Zeichen [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), um sie wörtlich zu behandeln.

Erscheint `{` in einem Kontext, der einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) akzeptiert, wird es als Beginn eines Quantors behandelt. Wenn das, was darauf folgt, kein gültiger Quantor ist, wird ein weiterer Syntaxfehler, [unvollständiger Quantor](/de/docs/Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier), ausgelöst.

## Beispiele

### Ungültige Fälle

```js example-bad
/\{{MDN_Macro}}/u;
/\[sic]/u;
```

### Gültige Fälle

<!-- Hinweis: die {} müssen doppelt escaped werden, einmal für Yari -->

```js example-good
// All { and } need to be escaped
/\\{\\{MDN_Macro\\}\\}/u;
// The ] needs to be escaped
/\[sic\]/u;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Quantor: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
