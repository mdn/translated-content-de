---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: f845422a4b52c149e87846242d26b3cdf2705376
---

{{jsSidebar("Operators")}}

Der **Gruppierungsoperator `( )`** steuert die Priorität der Auswertung in Ausdrücken. Er fungiert auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, bei denen ansonsten Mehrdeutigkeit oder Syntaxfehler auftreten würden.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntax

```js-nolint
(expression)
```

### Parameter

- `expression`
  - : Beliebiger [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich [Komma-verknüpfter](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar Klammern um einen Ausdruck, der den Inhalt gruppiert. Der Operator überschreibt die normale [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), sodass Operatoren mit niedrigerer Priorität (so niedrig wie der [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Operator) vor einem Operator mit höherer Priorität ausgewertet werden können.

## Beispiele

### Verwendung des Gruppierungsoperators

Auswerten von Addition und Subtraktion vor Multiplikation und Division.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// Standardmäßig Priorität
a + b * c; // 7
// standardmäßig so ausgewertet
a + (b * c); // 7

// nun die Priorität überschreiben
// Addition vor Multiplikation
(a + b) * c; // 9

// was gleichwertig ist mit
a * c + b * c; // 9
```

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge der _Operatoren_ geändert hat, nicht jedoch die Reihenfolge der _Operanden_. Zum Beispiel werden in diesem Code die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts ausgewertet (die normale Auswertungsreihenfolge), bevor die Operatorreihenfolge berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, und diese wiederum vor der Funktion `c`. Weitere Informationen zur Operatorpriorität finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Parsing-Mehrdeutigkeiten

Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser sie als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) ansehen würde. Dies bedeutet, dass die folgende [IIFE](/de/docs/Glossary/IIFE) Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da der Parser beim Erkennen der linken Klammer weiß, dass das Folgende ein Ausdruck und keine Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) Operator verwenden, um Mehrdeutigkeiten zu beseitigen.

Im Rumpf eines [Pfeilfunktions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Ausdrucks (einer, der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt), kann der Gruppierungsoperator verwendet werden, um einen Objekt-Literal-Ausdruck zurückzugeben, da sonst die linke geschweifte Klammer als Beginn des Funktionsrumpfs interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn auf eine numerische Literalzahl eine Eigenschaft zugegriffen wird, kann der [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können ganzzahlige Literale in Klammern setzen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- In Zukunft können wir hier einen Abschnitt zu Dekoratoren hinzufügen -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann [automatische Semikolon-Einfügungs](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) Stolperfallen mildern. Zum Beispiel können das `return` Schlüsselwort und der zurückgegebene Ausdruck keinen Zeilenumbruch dazwischen haben:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, da direkt nach dem `return` Schlüsselwort ein Semikolon eingefügt wird, wodurch die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Falls der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass dem `return` Schlüsselwort ein Ausdruck folgt, und die Semikolon-Einfügung verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Jedoch kann die Gruppierung auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser kein Semikolon vor dem Zeilenumbruch einfügen, da es die Mitte eines Funktionsaufrufs sein könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde wie folgt geparst:

```js
const a = 1(1).toString();
```

Was den Fehler "TypeError: 1 is not a function" auslöst. Wenn Sie einen Code-Stil verwenden, der keine Semikolons verwendet, denken Sie daran, dass Sie, wenn eine Zeile mit einer linken Klammer beginnt, diese _vor_ einer Zeile mit einem Semikolon präfixieren. Diese Praxis wird von mehreren Formatierern und/oder Styleguides empfohlen, einschließlich [Prettier](https://prettier.io/docs/en/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Weitere Ratschläge zum Umgang mit ASI finden Sie in dessen [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
