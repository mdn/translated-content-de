---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: f845422a4b52c149e87846242d26b3cdf2705376
---

{{jsSidebar("Operators")}}

Der **Gruppierungsoperator `( )`** steuert die Auswertungsreihenfolge in Ausdrücken. Er fungiert auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, bei denen sonst Mehrdeutigkeiten oder Syntaxfehler auftreten würden.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntax

```js-nolint
(expression)
```

### Parameter

- `expression`
  - : Jeder [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich durch [Komma verbundener](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Klammerpaar um einen Ausdruck, das den Inhalt gruppiert. Der Operator übersteuert die normale [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), sodass Operatoren mit niedrigerer Priorität (so niedrig wie der [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)) vor einem Operator mit höherer Priorität ausgewertet werden können.

## Beispiele

### Verwendung des Gruppierungsoperators

Addition und Subtraktion vor Multiplikation und Division auswerten.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge, in der die _Operatoren_ ausgewertet werden, geändert hat, aber die Reihenfolge, in der die _Operanden_ ausgewertet werden, nicht. Zum Beispiel werden in diesem Code die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts (die normale Auswertungsreihenfolge) vor der Berücksichtigung der Operatorreihenfolge ausgewertet.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die ihrerseits vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operatorengangfolge finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Parser-Mehrdeutigkeiten

Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser sie als Anfang einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) sieht. Das bedeutet, dass die folgende [IIFE](/de/docs/Glossary/IIFE)-Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da der Parser beim Sehen der linken Klammer weiß, dass das Folgende ein Ausdruck anstelle einer Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions)-Operator verwenden, um Mehrdeutigkeiten zu beseitigen.

In einem Ausdruckskörper einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (einer, der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt) kann der Gruppierungsoperator verwendet werden, um einen Objektliteral-Ausdruck zurückzugeben, da andernfalls die linke geschweifte Klammer als Anfang des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn eine Eigenschaft an einem Zahlenliteral zugegriffen wird, kann der [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können Ganzzahlliterale in Klammern setzen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann [Automatische Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) Fallstricke mindern. Zum Beispiel können das `return`-Schlüsselwort und der zurückgegebene Ausdruck keinen Zeilenumbruch dazwischen haben:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, da ein Semikolon direkt nach dem `return`-Schlüsselwort eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Wenn der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass dem `return`-Schlüsselwort ein Ausdruck folgt, und die Semikoloneinfügung verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Gruppierung kann jedoch auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser kein Semikolon vor dem Zeilenumbruch einfügen, da dies die Mitte eines Funktionsaufrufs sein könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde wie folgt geparst:

```js
const a = 1(1).toString();
```

Dies wirft einen "TypeError: 1 is not a function". Wenn Ihr Codierungsstil keine Semikolons verwendet, denken Sie daran, eine Zeile, die mit einer linken Klammer beginnt, _mit_ einem Semikolon zu versehen. Diese Praxis wird von mehreren Formatierern und/oder Stilrichtlinien empfohlen, einschließlich [Prettier](https://prettier.io/docs/en/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Für weitere Ratschläge zur Arbeit mit ASI siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
