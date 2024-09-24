---
title: "SyntaxError: Rohklammer ist in regulärem Ausdruck mit Unicode-Flag nicht erlaubt"
slug: Web/JavaScript/Reference/Errors/Regex_raw_bracket
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "raw bracket is not allowed in regular expression with unicode flag" tritt auf, wenn ein [Unicode-bewusstes](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) regulärer Ausdruck ein Rohklammerzeichen (`{`, `}`, `]`) enthält, das nicht Teil eines [Quantors](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) oder einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) ist.

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

Im nicht Unicode-bewussten Modus werden `{`, `}` und `]`, die nicht Teil eines Quantors oder einer Zeichenklasse sind, als literale Zeichen behandelt. Dies kann Fehler in Ihrem Code verbergen und ist im Unicode-bewussten Modus daher veraltet und unzulässig. Sie sollten entweder überprüfen, ob Sie ungültige Syntax haben, oder Sie sollten die Zeichen [escapen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), um sie wörtlich zu behandeln.

Wenn `{` in einem Kontext erscheint, der einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) akzeptiert, wird es als Beginn eines Quantors behandelt. Wenn das Folgende kein gültiger Quantor ist, wird ein weiterer Syntaxfehler, [unvollständiger Quantor](/de/docs/Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier), ausgelöst.

## Beispiele

### Ungültige Fälle

```js example-bad
/\{{MDN_Macro}}/u;
/\[sic]/u;
```

### Gültige Fälle

<!-- Note: the {} need to be double-escaped, once for Yari -->

```js example-good
// Alle { und } müssen geescaped werden
/\\{\\{MDN_Macro\\}\\}/u;
// Das ] muss geescaped werden
/\[sic\]/u;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenescape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Quantor: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
