---
title: "SyntaxError: ungültiges Zeichen in Klasse in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_char_in_class
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "ungültiges Zeichen in Klasse in regulärem Ausdruck" tritt auf, wenn ein Zeichen in einer [`v`-Modus-Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) erscheint, das nicht wörtlich auftreten darf.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /[|]/v: Invalid character in character class (V8-based)
SyntaxError: invalid character in class in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid class set character (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Normalerweise können Zeichenklassen fast alle Zeichen wörtlich enthalten. Der `v`-Modus hat jedoch die Syntax der Zeichenklasse verfeinert, und um Raum für zukünftige Syntaxerweiterungen zu lassen, sind einige Syntaxzeichen verboten, wörtlich in einer Zeichenklasse aufzutreten. Dazu gehören: `(`, `)`, `[`, `]`, `{`, `}`, `/`, `-`, `|`. Wenn Sie diese Zeichen wörtlich abgleichen möchten, müssen Sie sie escapen, zum Beispiel: `/[\|]/v`.

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
