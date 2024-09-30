---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "missing } after property list" tritt auf, wenn ein Fehler in der Syntax des [Objektinitialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) vorliegt. Es könnte sich tatsächlich um eine fehlende geschweifte Klammer handeln, aber auch ein fehlendes Komma ist möglich.

## Nachricht

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es liegt ein Fehler in der Syntax des [Objektinitialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) vor. Es könnte sich tatsächlich um eine fehlende geschweifte Klammer handeln, aber auch ein fehlendes Komma, beispielsweise. Prüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind. Eine bessere Einrückung oder Formatierung des Codes kann ebenfalls helfen, den Fehler zu erkennen.

## Beispiele

### Vergessenes Komma

Häufig fehlt ein Komma in Ihrem Objektinitialisierungscode:

```js-nolint example-bad
const obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

Korrekt wäre:

```js example-good
const obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
