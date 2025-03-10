---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{jsSidebar("Operators")}}

Der **Gruppierungsoperator `( )`** steuert die Vorrangigkeit der Auswertung in Ausdrücken. Er dient auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, wo ansonsten Mehrdeutigkeiten oder Syntaxfehler auftreten würden.

{{InteractiveExample("JavaScript Demo: Expressions - Grouping operator")}}

```js interactive-example
console.log(1 + 2 * 3); // 1 + 6
// Expected output: 7

console.log(1 + 2 * 3); // 1 + 6
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
  - : Beliebiger [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators) zur Auswertung, einschließlich [kommaverbundener](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar von Klammern um einen Ausdruck, der den Inhalt gruppiert. Der Operator überschreibt die normale [Operatorvorrangigkeit](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), sodass Operatoren mit niedrigerem Vorrang (so niedrig wie der [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Operator) vor einem Operator mit höherem Vorrang ausgewertet werden können.

## Beispiele

### Verwendung des Gruppierungsoperators

Auswertung von Addition und Subtraktion vor Multiplikation und Division.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge, in der die _Operatoren_ ausgewertet werden, geändert hat, nicht jedoch die Reihenfolge, in der die _Operanden_ ausgewertet werden. In diesem Code werden beispielsweise die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts (die normale Auswertungsreihenfolge) durchgeführt, bevor die Operatorreihenfolge berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die wiederum vor der Funktion `c` aufgerufen wird. Mehr zur Operatorvorrangigkeit finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Mehrdeutigkeiten beim Parsen

Ein [Ausdrucksstaatement](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser dies als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) ansehen würde. Dies bedeutet, dass die folgende {{Glossary("IIFE", "IIFE")}}-Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da der Parser beim Ansehen der linken Klammer weiß, dass das Folgende ein Ausdruck und keine Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) Operator verwenden, um Mehrdeutigkeiten zu beseitigen.

In einem [Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) Ausdruckskörper (einem, der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt), kann der Gruppierungsoperator verwendet werden, um einen Objektliteral-Ausdruck zurückzugeben, da ansonsten die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wird bei einem Zahlenliteral eine Eigenschaft abgerufen, kann der [Eigenschaftenzugriffsoperator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können Ganzzahlliterale in Klammern setzen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- TODO in the future we can add a decorator section -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann helfen, [automatische Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI)-Fallstricke zu vermeiden. Zum Beispiel dürfen zwischen dem Schlüsselwort `return` und dem zurückgegebenen Ausdruck keine Zeilenumbrüche stehen:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, da ein Semikolon direkt nach dem Schlüsselwort `return` eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Falls der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass auf das Schlüsselwort `return` ein Ausdruck folgt, und so die Semikolon-Einfügung verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Allerdings kann das Gruppieren auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser kein Semikolon vor dem Zeilenumbruch einfügen, da es sich um die Mitte eines Funktionsaufrufs handeln könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde folgendermaßen geparst werden:

```js
const a = 1(1).toString();
```

Was zu einem "TypeError: 1 is not a function" führt. Wenn Ihr Codestil keine Semikolons verwendet, denken Sie daran, eine Zeile, die mit einer linken Klammer beginnt, _mit einem Semikolon_ zu versehen. Diese Praxis wird von mehreren Formatierern und/oder Stilrichtlinien empfohlen, einschließlich [Prettier](https://prettier.io/docs/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Weitere Ratschläge zur Arbeit mit ASI finden Sie im [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorvorrangigkeit](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
