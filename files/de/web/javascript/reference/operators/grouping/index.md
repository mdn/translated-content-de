---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Der **Gruppierungsoperator `( )`** steuert die Auswertungsreihenfolge in Ausdrücken. Er fungiert auch als Container für beliebige Ausdrücke in bestimmten syntaktischen Konstrukten, wo ansonsten Ambiguität oder Syntaxfehler auftreten würden.

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
  - : Jeder [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators), der ausgewertet werden soll, einschließlich [komma-getrennter](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Paar Klammern um einen Ausdruck, das die Inhalte gruppiert. Der Operator setzt die normale [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) außer Kraft, sodass Operatoren mit niedrigerer Präzedenz (so niedrig wie der [Komma](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator)-Operator) vor einem Operator mit höherer Präzedenz ausgewertet werden können.

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

Beachten Sie in diesen Beispielen, dass sich die Reihenfolge, in der die _Operatoren_ ausgewertet werden, geändert hat, nicht jedoch die Reihenfolge, in der die _Operanden_ ausgewertet werden. Zum Beispiel werden in diesem Code die Funktionsaufrufe `a()`, `b()`, und `c()` von links nach rechts (die normale Auswertungsreihenfolge) ausgewertet, bevor die Operatorreihenfolge berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die wiederum vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operatorpräzedenz finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Verwenden des Gruppierungsoperators zur Beseitigung von Parsing-Mehrdeutigkeiten

Ein [Ausdrucksstaatssatz](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser dies als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) ansehen würde. Dies bedeutet, dass die folgende {{Glossary("IIFE", "IIFE")}}-Syntax ungültig ist:

```js-nolint example-bad
function () {
  // code
}();
```

Der Gruppierungsoperator kann verwendet werden, um diese Ambiguität zu beseitigen, da der Parser bei Anblick der linken Klammer weiß, dass das Folgende ein Ausdruck und keine Deklaration sein muss.

```js
(function () {
  // code
})();
```

Sie können auch den [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) Operator verwenden, um Ambiguitäten zu beseitigen.

In einem [Arrow-Funktions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)-Ausdruckskörper (einer, der direkt einen Ausdruck ohne das Schlüsselwort `return` zurückgibt) kann der Gruppierungsoperator verwendet werden, um ein Objektliteral zurückzugeben, da sonst die linke geschweifte Klammer als Beginn des Funktionskörpers interpretiert würde.

```js
const f = () => ({ a: 1 });
```

Wenn auf ein Zahlenliteral eine Eigenschaft zugegriffen wird, kann der [Eigenschafts-Zugriffs-Operator](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) Punkt `.` mit einem Dezimalpunkt verwechselt werden, es sei denn, die Zahl hat bereits einen Dezimalpunkt. Sie können ganze Zahlenliterale in Klammern setzen, um diese Ambiguität zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- TODO in der Zukunft können wir einen Abschnitt über Dekoratoren hinzufügen -->

### Gruppierungsoperator und automatische Semikolon-Einfügung

Der Gruppierungsoperator kann [automatische Semikolon-Einfügungs](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) Probleme abmildern. Zum Beispiel können das `return`-Schlüsselwort und der zurückgegebene Ausdruck keinen Zeilenumbruch enthalten:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code wird `undefined` zurückgeben, da ein Semikolon direkt nach dem `return`-Schlüsselwort eingefügt wird, was dazu führt, dass die Funktion sofort zurückkehrt, ohne `a + b` auszuwerten. Wenn der zurückgegebene Ausdruck lang ist und Sie ihn gut formatiert halten möchten, können Sie den Gruppierungsoperator verwenden, um anzuzeigen, dass dem `return`-Schlüsselwort ein Ausdruck folgt, und um die Semikolon-Einfügung zu verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Gruppierungen können jedoch auch ASI-Gefahren _einführen_. Wenn eine Zeile mit einer linken Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, fügt der Parser vor dem Zeilenumbruch kein Semikolon ein, da es sich um die Mitte eines Funktionsaufrufs handeln könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde so geparst werden:

```js
const a = 1(1).toString();
```

Was "TypeError: 1 is not a function" auslöst. Wenn Ihr Coding-Stil keine Semikolons verwendet, denken Sie daran, dass Sie, wenn eine Zeile mit einer linken Klammer beginnt, _sie mit einem Semikolon voranstellen_ sollten. Diese Praxis wird von mehreren Formatierern und/oder Stilrichtlinien empfohlen, darunter [Prettier](https://prettier.io/docs/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Weitere Ratschläge zum Umgang mit ASI finden Sie in der [Referenzsektion](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
