---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 86976a4d11b508763609fca37994406dbd27bca5
---

Der **Gruppierungsoperator `( )`** steuert die Reihenfolge der Auswertung in Ausdrücken. Er dient auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, in denen es sonst zu Mehrdeutigkeiten oder Syntaxfehlern kommen könnte.

{{InteractiveExample("JavaScript Demo: Grouping operator")}}

```js-nolint interactive-example
console.log(1 + 2 * 3); // 1 + 6
// Expected output: 7

console.log(1 + (2 * 3)); // 1 + 6
// Expected output: 7

console.log((1 + 2) * 3); // 3 * 3
// Expected output: 9

console.log(1 * 3 + 2 * 3); // 3 + 6
// Expected output: 9
```

## Syntax

```js-nolint
(expression)
```

### Parameter

- `expression`
  - : Jeder [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich [durch Kommas verbundener](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar von Klammern um einen Ausdruck, der die Inhalte gruppiert. Der Operator überschreibt die normale [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), sodass Operatoren mit niedriger Priorität (so niedrig wie der [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Operator) vor einem Operator mit höherer Priorität ausgewertet werden können.

## Beispiele

### Verwendung des Gruppierungsoperators

Auswerten von Addition und Subtraktion vor Multiplikation und Division.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// default precedence
a + b * c; // 7
// evaluated by default like this
a + (b * c); // 7

// now overriding precedence
// addition before multiplication
(a + b) * c; // 9

// which is equivalent to
a * c + b * c; // 9
```

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge der \_Operatoren-\_Auswertung geändert hat, nicht jedoch die Reihenfolge der \_Operanden-\_Auswertung. Zum Beispiel werden in diesem Code die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts ausgewertet (die normale Auswertungsreihenfolge), bevor die Operatorreihenfolge berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operatorpriorität finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Analysemehrdeutigkeiten

Ein [Ausdrucksstattement](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser es sonst als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) ansehen würde. Das bedeutet, dass die folgende {{Glossary("IIFE", "IIFE")}}-Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da der Parser, wenn er die linke Klammer sieht, weiß, dass das Folgende ein Ausdruck und keine Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) Operator verwenden, um Mehrdeutigkeiten zu beseitigen.

In einem [Pfeilfunktions-](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Ausdrückskörper (einer, der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt) kann der Gruppierungsoperator verwendet werden, um einen Objektliteral-Ausdruck zurückzugeben, da ansonsten die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert werden würde.

```js
const f = () => ({ a: 1 });
```

Wenn eine Eigenschaft auf einem Zahlenliteral zugegriffen wird, könnte der [Eigenschafts-Zugriffsoperator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können Ganzzahlliterale in Klammern setzen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- TODO in der Zukunft können wir einen Abschnitt über Dekoratoren hinzufügen -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann [automatische Semikolon-Einfügungs-](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) Fallstricke abmildern. Zum Beispiel dürfen zwischen dem `return` Schlüsselwort und dem zurückgegebenen Ausdruck kein Zeilenumbruch stehen:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, da direkt nach dem `return` Schlüsselwort ein Semikolon eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Falls der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass dem `return` Schlüsselwort ein Ausdruck folgt und die Semikolon-Einfügung zu verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Allerdings kann das Gruppieren auch _ASI-\_Gefahren \_einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser kein Semikolon vor dem Zeilenumbruch einfügen, da es sich in der Mitte eines Funktionsaufrufs befinden könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde wie folgt interpretiert werden:

```js
const a = 1(1).toString();
```

Was "TypeError: 1 is not a function" auslöst. Wenn Ihr Codierungsstil keine Semikolons verwendet, denken Sie daran, dass, wenn eine Zeile mit einer linken Klammer beginnt, _diese mit einem Semikolon vorzupenden_. Diese Praxis wird von mehreren Formatierern und/oder Stilrichtlinien empfohlen, darunter [Prettier](https://prettier.io/docs/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Für weitere Ratschläge zur Arbeit mit ASI sehen Sie im [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) nach.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
