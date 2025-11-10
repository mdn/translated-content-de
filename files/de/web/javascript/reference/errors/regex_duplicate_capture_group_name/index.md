---
title: "SyntaxError: doppelter Name einer Erfassungsgruppe im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_duplicate_capture_group_name
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "duplicate capture group name in regular expression" tritt auf, wenn ein regulärer Ausdruck zwei oder mehr [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) mit dem gleichen Namen enthält und diese Erfassungsgruppen gleichzeitig übereinstimmen könnten.

## Meldung

```plain
SyntaxError: Invalid regular expression: /(?<a>)(?<a>)/: Duplicate capture group name (V8-based)
SyntaxError: duplicate capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: duplicate group specifier name (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Alle [benannten Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in einem Muster für einen regulären Ausdruck müssen eindeutige Namen haben. Eine neuere Funktion erlaubt es, dass benannte Erfassungsgruppen Namen teilen, solange sie verschiedenen [Disjunktionsalternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) angehören und nicht gleichzeitig übereinstimmen können (siehe [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) dazu). Es ist jedoch weiterhin ein Fehler, wenn die benannten Erfassungsgruppen mit dem gleichen Namen gleichzeitig übereinstimmen könnten, da dies andere Funktionen wie [benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) zweideutig machen würde.

## Beispiele

### Ungültige Fälle

```js example-bad
/(?<name>\w+) (?<name>\w+)/;
```

### Gültige Fälle

```js example-good
/(?<firstName>\w+) (?<lastName>\w+)/;
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
