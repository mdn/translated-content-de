---
title: "SyntaxError: ungültiges Zeichen in einer Klasse in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_char_in_class
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "ungültiges Zeichen in einer Klasse in regulärem Ausdruck" tritt auf, wenn ein Zeichen in einer [`v`-Modus-Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) erscheint, das nicht wörtlich auftreten darf.

## Meldung

```plain
SyntaxError: Invalid regular expression: /[|]/v: Invalid character in character class (V8-based)
SyntaxError: invalid character in class in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid class set character (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Normalerweise können Zeichenklassen fast alle Zeichen wörtlich enthalten. Der `v`-Modus hat jedoch die Syntax der Zeichenklassen erweitert, und um Platz für zukünftige Syntaxerweiterungen zu lassen, ist es verboten, bestimmte Syntaxzeichen wörtlich in einer Zeichenklasse erscheinen zu lassen. Dazu gehören: `(`, `)`, `[`, `]`, `{`, `}`, `/`, `-`, `|`. Wenn Sie diese Zeichen wörtlich abgleichen möchten, müssen Sie sie escapen; zum Beispiel: `/[\|]/v`.

## Beispiele

### Ungültige Fälle

```js example-bad
/[(){}]/v;
```

### Gültige Fälle

<!-- Hinweis: die {} müssen doppelt escaped werden, einmal für Yari -->

```js example-good
/[\(\)\\{\\}]/v;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
