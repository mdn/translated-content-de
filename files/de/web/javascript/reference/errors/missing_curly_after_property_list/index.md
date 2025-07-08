---
title: "SyntaxError: fehlende } nach Eigenschaftsliste"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "fehlende } nach Eigenschaftsliste" tritt auf, wenn ein Fehler in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax vorliegt.
Es könnte sich tatsächlich um eine fehlende geschweifte Klammer handeln, dies könnte aber auch ein fehlendes Komma sein.

## Nachricht

```plain
SyntaxError: missing } after property list (Firefox)
SyntaxError: Unexpected identifier 'c'. Expected '}' to end an object literal. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Fehler in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax. Es könnte tatsächlich eine fehlende geschweifte Klammer sein, aber es könnte auch ein fehlendes Komma sein, zum Beispiel. Überprüfen Sie auch, ob alle schließenden geschweiften Klammern oder Klammern in der richtigen Reihenfolge sind. Das Einrücken oder schöner Formatieren des Codes kann Ihnen ebenfalls helfen, den Überblick zu behalten.

## Beispiele

### Vergessenes Komma

Oft fehlt ein Komma in Ihrem Objektinitialisierer-Code:

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
