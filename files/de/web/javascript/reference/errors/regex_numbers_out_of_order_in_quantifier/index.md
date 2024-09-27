---
title: "SyntaxError: numbers out of order in {} quantifier."
slug: Web/JavaScript/Reference/Errors/Regex_numbers_out_of_order_in_quantifier
l10n:
  sourceCommit: 6aaba8ce85edc3a92fd5e804002cc609c31ce73f
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme „numbers out of order in {} quantifier“ tritt auf, wenn ein [Quantifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) in einem regulären Ausdruck die `{n,m}`-Syntax verwendet, aber `m` kleiner als `n` ist.

## Meldung

```plain
SyntaxError: Invalid regular expression: /1{2,1}/: numbers out of order in {} quantifier (V8-based)
SyntaxError: numbers out of order in {} quantifier. (Firefox)
SyntaxError: Invalid regular expression: numbers out of order in {} quantifier (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Die `{n,m}`-Syntax in einem regulären Ausdruck wird verwendet, um anzugeben, dass das vorhergehende Element mindestens `n`-mal, aber nicht mehr als `m`-mal gematcht werden soll. Wenn `m` kleiner als `n` ist, ist der Quantifizierer unsinnig, weil z.B. ein Zeichen nicht mindestens 2-mal, aber nicht mehr als 1-mal vorkommen kann. Daher wird ein Fehler ausgelöst.

## Beispiele

### Ungültige Beispiele

```js example-bad
/1{2,1}/;
```

### Gültige Beispiele

```js example-good
/1{1,2}/;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
