---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **Gruppierungsoperator `( )`** kontrolliert die Vorrangregeln der Auswertung in Ausdrücken. Außerdem fungiert er in bestimmten syntaktischen Konstrukten als Container für beliebige Ausdrücke, wo sonst Mehrdeutigkeiten oder Syntaxfehler auftreten würden.

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
  - : Jeder beliebige [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich [durch Komma verbundener](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar von Klammern, die einen Ausdruck umschließen und dessen Inhalt gruppieren. Er setzt die normale [Operator-Vorrangregel](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) außer Kraft, sodass Operatoren mit niedriger Priorität (so niedrig wie der [Komma-Operator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)) vor einem Operator mit höherer Priorität ausgewertet werden können.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge der _Operatoren_, aber nicht die Reihenfolge der _Operanden_ geändert hat. Zum Beispiel werden in diesem Code die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts ausgewertet (die normale Auswertungsreihenfolge), bevor die Reihenfolge der Operatoren berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, und diese wiederum vor der Funktion `c`. Weitere Informationen zur Operator-Präzedenz finden Sie auf der entsprechenden [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Parser-Mehrdeutigkeit

Ein [Ausdrucksstatement](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser dies als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) ansehen würde. Dies macht die folgende {{Glossary("IIFE", "IIFE")}}-Syntax ungültig:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da der Parser, sobald er die linke Klammer sieht, weiß, dass das Folgende ein Ausdruck und keine Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions)-Operator verwenden, um Mehrdeutigkeiten zu vermeiden.

Im Ausdrucksteil einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt) kann der Gruppierungsoperator verwendet werden, um ein Objektliteral zurückzugeben, da andernfalls die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn auf ein numerisches Literal eine Eigenschaft zugegriffen wird, könnte der [Eigenschaftszugriffsoperator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl enthält bereits einen Dezimalpunkt. Sie können integer Literale in Klammern einschließen, um diese Mehrdeutigkeit zu eliminieren.

```js
(1).toString(); // "1"
```

<!-- TODO: In der Zukunft könnten wir einen Abschnitt zu Dekoratoren hinzufügen -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann Fallstricke der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) abmildern. Zum Beispiel darf das Schlüsselwort `return` und der zurückgegebene Ausdruck nicht durch einen Zeilenumbruch getrennt sein:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code gibt `undefined` zurück, da direkt nach dem Schlüsselwort `return` ein Semikolon eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Falls der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass das Schlüsselwort `return` von einem Ausdruck gefolgt wird, und so die Semikoloneinfügung verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Allerdings kann die Gruppierung auch ASI-Probleme verursachen. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, fügt der Parser kein Semikolon vor dem Zeilenumbruch ein, da es sich um die Mitte eines Funktionsaufrufs handeln könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code wird so geparst:

```js
const a = 1(1).toString();
```

Was "TypeError: 1 is not a function" auslöst. Wenn Ihr Programmierstil keine Semikolons verwendet, denken Sie daran, dass Sie, wenn eine Zeile mit einer linken Klammer beginnt, diese _mit einem Semikolon_ einleiten. Diese Praxis wird von mehreren Formatierern und/oder Styleguides wie [Prettier](https://prettier.io/docs/en/rationale.html#semicolons) und [Standard](https://standardjs.com/rules.html#semicolons) empfohlen:

```js-nolint example-good
const a = 1
;(1).toString()
```

Weitere Ratschläge zum Umgang mit ASI finden Sie in der entsprechenden [Referenzsektion](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorvorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
