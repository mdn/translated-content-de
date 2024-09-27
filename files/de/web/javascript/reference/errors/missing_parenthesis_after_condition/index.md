---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "missing ) after condition" tritt auf, wenn es einen Fehler bei der Schreibweise einer
[`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
Bedingung gibt. Diese muss in Klammern nach dem `if`-Schlüsselwort erscheinen.

## Meldung

```plain
SyntaxError: missing ) after condition (Firefox)
SyntaxError: Unexpected token '{'. Expected ')' to end an 'if' condition. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Fehler bei der Schreibweise einer
[`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
Bedingung. In jeder Programmiersprache muss der Code Entscheidungen treffen und je nach verschiedenen Eingaben entsprechende Aktionen ausführen. Die if-Anweisung führt eine Anweisung aus, wenn eine angegebene Bedingung wahrheitsgemäß ist. In JavaScript muss diese Bedingung in Klammern nach dem `if`-Schlüsselwort erscheinen, wie hier:

```js
if (condition) {
  // do something if the condition is true
}
```

## Beispiele

### Fehlende Klammer

Es könnte einfach ein Versehen sein, überprüfen Sie sorgfältig alle Klammern in Ihrem Code.

```js-nolint example-bad
if (Math.PI < 3 {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

Um diesen Code zu korrigieren, müssen Sie eine schließende Klammer der Bedingung hinzufügen.

```js example-good
if (Math.PI < 3) {
  console.log("wait what?");
}
```

### Fehlverwendetes Schlüsselwort

Wenn Sie aus einer anderen Programmiersprache kommen, ist es leicht, Schlüsselwörter hinzuzufügen, die nicht dasselbe bedeuten oder in JavaScript überhaupt keine Bedeutung haben.

```js-nolint example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

Stattdessen müssen Sie einen korrekten [Vergleichsoperator](/de/docs/Web/JavaScript/Reference/Operators) verwenden.
Zum Beispiel:

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
- [Entscheidungen in Ihrem Code treffen — Konditionale](/de/docs/Learn/JavaScript/Building_blocks/conditionals)
