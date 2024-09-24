---
title: "SyntaxError: ungültiger Name der erfassten Gruppe im regulären Ausdruck"
slug: Web/JavaScript/Reference/Errors/Regex_invalid_capture_group_name
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "ungültiger Name der erfassten Gruppe im regulären Ausdruck" tritt auf, wenn eine [benannte erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) oder ein [benannter Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) einen ungültigen [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) enthält.

## Meldung

```plain
SyntaxError: Invalid regular expression: /(?<1>)/: Invalid capture group name (V8-based)
SyntaxError: invalid capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid group specifier name (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Jede benannte erfassende Gruppe muss einen Namen haben, der ein gültiger Bezeichner ist. Sie können keine beliebigen Zeichenfolgen als Gruppenbezeichner verwenden.

## Beispiele

### Ungültige Fälle

```js example-bad
/(?<1>\d+) (?<2>\d+)/;
```

Oder Sie erstellen den regulären Ausdruck dynamisch:

```js example-bad
const tokenTypes = {
  "number literal": /\d+/,
  "string literal": /".+?"/,
  identifier: /[a-zA-Z_]\w*/,
};

const tokenPattern = new RegExp(
  Object.entries(tokenTypes)
    .map(([name, pattern]) => `(?<${name}>${pattern.source})`)
    .join("|"),
);
```

### Gültige Fälle

```js example-good
/(?<group1>\d+) (?<group2>\d+)/;
```

Wenn der reguläre Ausdruck dynamisch erstellt wird, stellen Sie sicher, dass alle Namen gültige Bezeichner sind. Zum Beispiel:

```js example-good
const tokenTypes = {
  numberLiteral: /\d+/,
  stringLiteral: /".+?"/,
  identifier: /[a-zA-Z_]\w*/,
};

const tokenPattern = new RegExp(
  Object.entries(tokenTypes)
    .map(([name, pattern]) => `(?<${name}>${pattern.source})`)
    .join("|"),
);
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
