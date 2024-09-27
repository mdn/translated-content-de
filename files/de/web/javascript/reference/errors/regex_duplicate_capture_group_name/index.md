---
title: "SyntaxError: Doppelter Capture-Gruppenname in regulärem Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_duplicate_capture_group_name
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "duplicate capture group name in regular expression" tritt auf, wenn ein regulärer Ausdruck zwei oder mehr [benannte Capture-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) mit demselben Namen enthält und diese Capture-Gruppen gleichzeitig übereinstimmen könnten.

## Nachricht

```plain
SyntaxError: Invalid regular expression: /(?<a>)(?<a>)/: Duplicate capture group name (V8-based)
SyntaxError: duplicate capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: duplicate group specifier name (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Alle [benannten Capture-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in einem regulären Ausdrucksmuster müssen eindeutige Namen haben. Eine neuere Funktion erlaubt es, dass benannte Capture-Gruppen Namen teilen, solange sie zu verschiedenen [Alternativen einer Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehören und nicht gleichzeitig übereinstimmen können (siehe [Browser-Kompatibilität](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility) dafür). Es ist jedoch immer noch ein Fehler, wenn benannte Capture-Gruppen mit demselben Namen gleichzeitig übereinstimmen könnten, da dies andere Funktionen, wie [benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference), mehrdeutig machen würde.

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
- [Benannte Capture-Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
