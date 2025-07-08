---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **Gruppierungsoperator `( )`** steuert die Priorität der Auswertung in Ausdrücken. Er dient auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstruktionen, um Mehrdeutigkeiten oder Syntaxfehler zu vermeiden.

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
  - : Jeder beliebige [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich mit [Komma verbundenen](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücken.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar Klammern um einen Ausdruck, die den Inhalt gruppieren. Der Operator überschreibt die normale [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence), sodass Operatoren mit niedrigerer Priorität (so niedrig wie der [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Operator) vor einem Operator mit höherer Priorität ausgewertet werden können.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge, in der die _Operatoren_ ausgewertet werden, geändert hat, jedoch nicht die Reihenfolge, in der die _Operanden_ ausgewertet werden. In diesem Codebeispiel werden die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts ausgewertet (die normale Auswertungsreihenfolge), bevor die Operatorreihenfolge berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die wiederum vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operator-Priorität finden Sie auf der entsprechenden [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Parsing-Mehrdeutigkeiten

Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser sie als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) interpretieren würde. Dies bedeutet, dass die folgende {{Glossary("IIFE", "IIFE")}} Syntax ungültig ist:

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

In einem Ausdruckskörper einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (bei dem ein Ausdruck direkt ohne das Schlüsselwort `return` zurückgegeben wird) kann der Gruppierungsoperator verwendet werden, um ein Objektliteral zurückzugeben, da ansonsten die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn auf eine Eigenschaft eines Zahlenliterals zugegriffen wird, könnte der [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können ganze Zahlenliterale in Klammern einschließen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- TODO in the future we can add a decorator section -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann [automatische Semikolon-Einfügungs](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) Fallstricke reduzieren. Zum Beispiel dürfen das `return` Schlüsselwort und der zurückgegebene Ausdruck keinen Zeilenumbruch dazwischen haben:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code gibt `undefined` zurück, da ein Semikolon direkt nach dem `return` Schlüsselwort eingefügt wird, was dazu führt, dass die Funktion sofort ohne Auswertung von `a + b` zurückkehrt. Wenn der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten wollen, können Sie den Gruppierungsoperator verwenden, um anzugeben, dass das `return` Schlüsselwort von einem Ausdruck gefolgt wird und die Semikolon-Einfügung verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Jedoch kann die Gruppierung auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser vor dem Zeilenumbruch kein Semikolon einfügen, da es sich in der Mitte eines Funktionsaufrufs befinden könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde wie folgt ausgewertet werden:

```js
const a = 1(1).toString();
```

Was "TypeError: 1 is not a function" auslöst. Wenn Ihr Coding-Stil keine Semikolons verwendet, denken Sie daran, eine Zeile, die mit einer linken Klammer beginnt, mit einem Semikolon _zu präfixen_. Diese Praxis wird von mehreren Formatierern und/oder Stilrichtlinien empfohlen, einschließlich [Prettier](https://prettier.io/docs/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Für weitere Ratschläge zur Arbeit mit ASI sehen Sie sich den entsprechenden [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
