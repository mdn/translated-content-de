---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "missing } after property list" tritt auf, wenn ein Fehler in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax vorliegt. Es könnte tatsächlich eine fehlende geschweifte Klammer sein, aber auch ein fehlendes Komma.

## Meldung

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es liegt ein Fehler in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax vor. Es könnte tatsächlich eine fehlende geschweifte Klammer sein, aber auch ein fehlendes Komma, zum Beispiel. Prüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind. Eine sauberere Einrückung oder Formatierung des Codes kann Ihnen ebenfalls helfen, den Überblick zu behalten.

## Beispiele

### Vergessenes Komma

Oftmals fehlt ein Komma in Ihrem Objektinitialisierer-Code:

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
