---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **Gruppierungsoperator `( )`** steuert die Vorrangreihenfolge der Auswertung in Ausdrücken. Er fungiert außerdem als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, bei denen ansonsten Mehrdeutigkeit oder Syntaxfehler auftreten würden.

{{InteractiveExample("JavaScript Demo: Grouping operator")}}

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
  - : Jeder beliebige [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich durch [Komma verbundene](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar von Klammern um einen Ausdruck, die den Inhalt gruppieren. Der Operator überschreibt die normale [Operator-Vorrangreihenfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), sodass Operatoren mit niedrigerer Priorität (so niedrig wie der [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Operator) ausgewertet werden können, bevor ein Operator mit höherer Priorität ausgewertet wird.

## Beispiele

### Verwendung des Gruppierungsoperators

Addition und Subtraktion werden vor Multiplikation und Division ausgewertet.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge, in der die _Operatoren_ ausgewertet werden, geändert hat, nicht jedoch die Reihenfolge, in der die _Operanden_ ausgewertet werden. Zum Beispiel werden in diesem Code die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts ausgewertet (die normale Auswertungsreihenfolge), bevor die Operatorenreihenfolge berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die wiederum vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operator-Vorrangreihenfolge finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Parser-Mehrdeutigkeiten

Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser dies als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) betrachten würde. Dies bedeutet, dass die folgende {{Glossary("IIFE", "IIFE")}} Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da der Parser bei einer öffnenden Klammer erkennt, dass das Folgende ein Ausdruck statt einer Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) Operator verwenden, um Mehrdeutigkeit zu vermeiden.

Im Ausdruckskörper einer [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (einer, die ohne das Schlüsselwort `return` direkt einen Ausdruck zurückgibt), kann der Gruppierungsoperator verwendet werden, um ein Objektliteral zurückzugeben, da sonst die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn eine Eigenschaft auf einem Zahlenliteral zugegriffen wird, kann der [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können Ganzzahlliterale in Klammern setzen, um diese Mehrdeutigkeit zu vermeiden.

```js
(1).toString(); // "1"
```

<!-- TODO in the future we can add a decorator section -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann Fallstricke bei der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) mindern. Zum Beispiel dürfen zwischen dem `return`-Schlüsselwort und dem zurückgegebenen Ausdruck keine Zeilenumbrüche stehen:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, weil direkt nach dem `return`-Schlüsselwort ein Semikolon eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Falls der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass auf das `return`-Schlüsselwort ein Ausdruck folgt und die Semikolon-Einfügung zu verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Das Gruppieren kann jedoch auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer öffnenden Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser vor dem Zeilenumbruch kein Semikolon einfügen, weil es mitten in einem Funktionsaufruf sein könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde folgendermaßen geparst werden:

```js
const a = 1(1).toString();
```

Was einen "TypeError: 1 is not a function" auslöst. Wenn Ihr Programmierstil keine Semikolons verwendet, denken Sie daran, wenn eine Zeile mit einer öffnenden Klammer beginnt, _setzen_ Sie ein Semikolon davor. Diese Praxis wird von mehreren Formatierungswerkzeugen und/oder Styleguides empfohlen, einschließlich [Prettier](https://prettier.io/docs/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

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

- [Operator-Vorrangreihenfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
