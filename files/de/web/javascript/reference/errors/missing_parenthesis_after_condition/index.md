---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "missing ) after condition" tritt auf, wenn ein Fehler in der Schreibweise einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Bedingung vorliegt. Diese muss nach dem `if`-Schlüsselwort in Klammern erscheinen.

## Meldung

```plain
SyntaxError: missing ) after condition (Firefox)
SyntaxError: Unexpected token '{'. Expected ')' to end an 'if' condition. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Fehler in der Schreibweise einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Bedingung. In jeder Programmiersprache muss der Code Entscheidungen treffen und je nach verschiedenen Eingaben entsprechende Aktionen ausführen. Die If-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung wahr ist. In JavaScript muss diese Bedingung nach dem `if`-Schlüsselwort in Klammern erscheinen, wie folgt:

```js
if (condition) {
  // do something if the condition is true
}
```

## Beispiele

### Fehlende Klammer

Es könnte nur ein Versehen sein, überprüfen Sie sorgfältig alle Klammern in Ihrem Code.

```js-nolint example-bad
if (Math.PI < 3 {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

Um diesen Code zu beheben, müssen Sie eine Klammer hinzufügen, die die Bedingung schließt.

```js example-good
if (Math.PI < 3) {
  console.log("wait what?");
}
```

### Falsch verwendetes Schlüsselwort

Wenn Sie aus einer anderen Programmiersprache kommen, ist es leicht, Schlüsselwörter hinzuzufügen, die in JavaScript nicht dasselbe bedeuten oder überhaupt keine Bedeutung haben.

```js-nolint example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

Stattdessen müssen Sie einen korrekten [Vergleichsoperator](/de/docs/Web/JavaScript/Reference/Operators) verwenden. Zum Beispiel:

```js
if (done === true) {
  console.log("we are done!");
}
```

Oder noch besser:

```js example-good
if (done) {
  console.log("we are done!");
}
```

## Siehe auch

- [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Relationale Operatoren](/de/docs/Web/JavaScript/Reference/Operators#relational_operators)
- [Lernen: Entscheidungen in Ihrem Code treffen — Konditionale](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
