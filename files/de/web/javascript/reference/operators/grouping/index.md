---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: f845422a4b52c149e87846242d26b3cdf2705376
---

{{jsSidebar("Operators")}}

Der **Gruppierungsoperator `( )`** steuert die Vorrangigkeit der Auswertung in Ausdrücken. Er fungiert auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, in denen sonst Mehrdeutigkeiten oder Syntaxfehler auftreten würden.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Syntax

```js-nolint
(expression)
```

### Parameter

- `expression`
  - : Jeder beliebige [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich [komma-getrennter](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar von Klammern um einen Ausdruck, der den Inhalt gruppiert. Der Operator setzt die normale [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) außer Kraft, sodass Operatoren mit niedriger Priorität (so niedrig wie der [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)) vor einem Operator mit höherer Priorität ausgewertet werden können.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge, in der die _Operatoren_ ausgewertet werden, geändert hat, nicht jedoch die Reihenfolge, in der die _Operanden_ ausgewertet werden. Zum Beispiel in diesem Code werden die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts (die normale Auswertungsreihenfolge) ausgewertet, bevor die Reihenfolge der Operatoren in Betracht gezogen wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operator-Priorität finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwendung des Gruppierungsoperators zur Beseitigung von Parser-Mehrdeutigkeiten

Ein [Ausdrucksstatement](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser es als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) interpretieren würde. Dies bedeutet, dass die folgende {{Glossary("IIFE", "IIFE")}}-Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Mehrdeutigkeit zu beseitigen, da, wenn der Parser die linke Klammer sieht, er weiß, dass das Folgende ein Ausdruck und keine Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions)-Operator verwenden, um Mehrdeutigkeiten zu beseitigen.

In einem Ausdruckskörper einer [Arrowfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (einer, der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt) kann der Gruppierungsoperator verwendet werden, um einen Objektliteral-Ausdruck zurückzugeben, da ansonsten die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn eine Eigenschaft auf einem Zahlenliteral zugegriffen wird, kann der [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors)-Punkt `.` mit einem Dezimalpunkt mehrdeutig sein, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können ganzzahlige Literale in Klammern setzen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- TODO in der Zukunft können wir einen Abschnitt zu Dekoratoren hinzufügen -->

### Gruppierungsoperator und automatische Semiklon-Einfügung

Der Gruppierungsoperator kann Fallstricke der [automatischen Semikolon-Einfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) mindern. Zum Beispiel dürfen das Schlüsselwort `return` und der zurückgegebene Ausdruck keinen Zeilenumbruch dazwischen haben:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, da direkt nach dem `return`-Schlüsselwort ein Semikolon eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Falls der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzugeben, dass dem `return`-Schlüsselwort ein Ausdruck folgt, und Semikolon-Einfügung verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Gruppierung kann jedoch auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, wird der Parser keinen Semikolon vor dem Zeilenumbruch einfügen, da dies die Mitte eines Funktionsaufrufs sein könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde so geparst werden:

```js
const a = 1(1).toString();
```

Was "TypeError: 1 is not a function" auslöst. Wenn Ihr Codierstil keine Semikolons verwendet, denken Sie daran, dass, wenn eine Zeile mit einer linken Klammer beginnt, _präfixen_ Sie diese mit einem Semikolon. Diese Praxis wird von mehreren Formatierern und/oder Stilrichtlinien empfohlen, einschließlich [Prettier](https://prettier.io/docs/en/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Für weitere Ratschläge zur ASI, siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
