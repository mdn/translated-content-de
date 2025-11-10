---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "missing ) after condition" tritt auf, wenn ein Fehler bei der Schreibweise einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Bedingung vorliegt. Die Bedingung muss in Klammern nach dem `if`-Schlüsselwort erscheinen.

## Nachricht

```plain
SyntaxError: missing ) after condition (Firefox)
SyntaxError: Unexpected token '{'. Expected ')' to end an 'if' condition. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es liegt ein Fehler bei der Schreibweise einer [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Bedingung vor. In jeder Programmiersprache muss der Code Entscheidungen treffen und dementsprechend Aktionen ausführen, abhängig von verschiedenen Eingaben. Die if-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung wahrheitsgemäß ist. In JavaScript muss diese Bedingung in Klammern nach dem `if`-Schlüsselwort erscheinen, so:

```js
if (condition) {
  // do something if the condition is true
}
```

## Beispiele

### Fehlende Klammer

Es könnte einfach ein Versehen sein, überprüfen Sie sorgfältig alle Ihre Klammern im Code.

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

Wenn Sie aus einer anderen Programmiersprache kommen, ist es auch leicht, Schlüsselwörter hinzuzufügen, die in JavaScript nicht dasselbe bedeuten oder überhaupt keine Bedeutung haben.

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
- [Lernen: Entscheidungen in Ihrem Code treffen — Bedingungsausdrücke](/de/docs/Learn_web_development/Core/Scripting/Conditionals)
