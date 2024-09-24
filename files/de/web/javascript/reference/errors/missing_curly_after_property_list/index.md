---
title: "SyntaxError: fehlende } nach Eigenschaftsliste"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlende } nach Eigenschaftsliste" tritt auf, wenn ein Fehler in der Syntax des [Objektinitialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) vorliegt. Möglicherweise fehlt eine geschweifte Klammer, es könnte aber auch ein Komma fehlen.

## Nachricht

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schief gelaufen?

Es gibt einen Fehler in der Syntax des [Objektinitialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Möglicherweise fehlt tatsächlich eine geschweifte Klammer, es könnte aber auch, zum Beispiel, ein Komma fehlen. Überprüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind. Eine etwas schönere Einrückung oder Formatierung des Codes könnte Ihnen auch helfen, den Überblick zu behalten.

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
