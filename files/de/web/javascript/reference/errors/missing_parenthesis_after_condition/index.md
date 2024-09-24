---
title: "SyntaxError: fehlende ) nach Bedingung"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "fehlende ) nach Bedingung" tritt auf, wenn ein Fehler in der Syntax einer
[`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
Bedingung vorliegt. Die Bedingung muss in runden Klammern nach dem `if`-Schlüsselwort erscheinen.

## Meldung

```plain
SyntaxError: missing ) after condition (Firefox)
SyntaxError: Unexpected token '{'. Expected ')' to end an 'if' condition. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Es gibt einen Fehler in der Syntax einer
[`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
Bedingung. In jeder Programmiersprache muss der Code Entscheidungen treffen und
je nach Eingabe entsprechend reagieren. Die `if`-Anweisung führt eine Anweisung aus, wenn eine bestimmte Bedingung wahrheitsgemäß ist. In JavaScript muss diese Bedingung in runden Klammern nach dem `if`-Schlüsselwort erscheinen, wie hier:

```js
if (condition) {
  // etwas tun, wenn die Bedingung wahr ist
}
```

## Beispiele

### Fehlende Klammern

Es könnte einfach ein Versehen sein, überprüfen Sie sorgfältig alle Klammern in Ihrem Code.

```js-nolint example-bad
if (Math.PI < 3 {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
```

Um diesen Code zu beheben, müssen Sie eine schließende Klammer hinzufügen, um die Bedingung zu schließen.

```js example-good
if (Math.PI < 3) {
  console.log("wait what?");
}
```

### Fehlgebrauch des Schlüsselworts

Wenn Sie von einer anderen Programmiersprache kommen, ist es auch leicht, Schlüsselwörter hinzuzufügen, die in JavaScript nicht dieselbe Bedeutung haben oder überhaupt keine Bedeutung haben.

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
- [Entscheidungen im Code treffen — Konditionale](/de/docs/Learn/JavaScript/Building_blocks/conditionals)
