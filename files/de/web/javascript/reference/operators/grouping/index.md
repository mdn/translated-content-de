---
title: Gruppierungsoperator ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **Gruppierungsoperator `( )`** steuert die Auswertungsreihenfolge in Ausdrücken. In bestimmten syntaktischen Konstruktionen dient er außerdem als Klammerung für beliebige Ausdrücke, wenn andernfalls Mehrdeutigkeiten oder Syntaxfehler auftreten würden.

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
  - : Ein Ausdruck mit beliebiger [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table), einschließlich durch [Kommas verknüpfter](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) Ausdrücke.

### Rückgabewert

Das Ergebnis von `expression`. Die Gruppierung erhält Referenzen, sodass `(obj.method)()` die Methode mit `obj` als `this`-Wert aufruft.

## Beschreibung

Der Gruppierungsoperator besteht aus einem Klammerpaar, das einen Ausdruck umschließt und dessen Inhalt gruppiert. Er setzt die normale [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) außer Kraft. Dadurch können Operatoren mit niedrigerer Priorität – bis hin zum [Kommaoperator](/de/docs/Web/JavaScript/Reference/Operators/Comma_operator) – vor einem Operator mit höherer Priorität ausgewertet werden.

## Beispiele

### Den Gruppierungsoperator verwenden

Addition und Subtraktion vor Multiplikation und Division auswerten:

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

Beachten Sie, dass sich in diesen Beispielen die Reihenfolge ändert, in der die _Operatoren_ ausgewertet werden, nicht aber die Reihenfolge, in der die _Operanden_ ausgewertet werden. Im folgenden Code werden beispielsweise die Funktionsaufrufe `a()`, `b()` und `c()` von links nach rechts ausgewertet (in der normalen Auswertungsreihenfolge), bevor die Reihenfolge der Operatoren berücksichtigt wird.

```js
a() * (b() + c());
```

Die Funktion `a` wird vor der Funktion `b` aufgerufen, die wiederum vor der Funktion `c` aufgerufen wird. Weitere Informationen zur Operatorpriorität finden Sie auf der entsprechenden [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Den Gruppierungsoperator verwenden, um Mehrdeutigkeiten beim Parsen zu beseitigen

Eine [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) kann nicht mit dem Schlüsselwort `function` beginnen, da der Parser dies als Beginn einer [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) interpretieren würde. Daher ist die folgende {{Glossary("IIFE", "IIFE")}}-Syntax ungültig:

```js-nolint example-bad
function () {
  // code
}();
```

Mit dem Gruppierungsoperator lässt sich diese Mehrdeutigkeit beseitigen: Wenn der Parser die öffnende Klammer sieht, weiß er, dass darauf ein Ausdruck und keine Deklaration folgen muss.

```js
(function () {
  // code
})();
```

Sie können auch den Operator [`void`](/de/docs/Web/JavaScript/Reference/Operators/void#immediately_invoked_function_expressions) verwenden, um die Mehrdeutigkeit zu beseitigen.

Im Ausdruckskörper einer [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (die einen Ausdruck direkt ohne das Schlüsselwort `return` zurückgibt) kann der Gruppierungsoperator verwendet werden, um einen Objektliteral-Ausdruck zurückzugeben. Andernfalls würde die öffnende geschweifte Klammer als Beginn des Funktionskörpers interpretiert.

```js
const f = () => ({ a: 1 });
```

Wenn auf eine Eigenschaft eines Zahlenliterals zugegriffen wird, kann der Punkt `.` des [Eigenschaftszugriffs](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) mit einem Dezimalpunkt verwechselt werden, sofern die Zahl nicht bereits einen Dezimalpunkt enthält. Sie können Ganzzahlliterale in Klammern setzen, um diese Mehrdeutigkeit zu beseitigen.

```js
(1).toString(); // "1"
```

<!-- TODO in the future we can add a decorator section -->

### Gruppierungsoperator und automatische Semikoloneinfügung

Mit dem Gruppierungsoperator lassen sich Fallstricke bei der [automatischen Semikoloneinfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) vermeiden. Beispielsweise darf zwischen dem Schlüsselwort `return` und dem zurückgegebenen Ausdruck kein Zeilenumbruch stehen:

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

Dieser Code gibt `undefined` zurück, weil direkt nach dem Schlüsselwort `return` ein Semikolon eingefügt wird. Dadurch kehrt die Funktion sofort zurück, ohne `a + b` auszuwerten. Wenn der zurückgegebene Ausdruck lang ist und Sie ihn übersichtlich formatieren möchten, können Sie mit dem Gruppierungsoperator kennzeichnen, dass auf das Schlüsselwort `return` ein Ausdruck folgt, und so die Einfügung eines Semikolons verhindern:

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

Allerdings kann die Gruppierung auch ASI-Fallstricke _verursachen_. Wenn eine Zeile mit einer öffnenden Klammer beginnt und die vorherige Zeile mit einem Ausdruck endet, fügt der Parser vor dem Zeilenumbruch kein Semikolon ein, da es sich um die Fortsetzung eines Funktionsaufrufs handeln könnte. Zum Beispiel:

```js-nolint example-bad
const a = 1
(1).toString()
```

Dieser Code würde wie folgt geparst:

```js
const a = 1(1).toString();
```

Das führt zu „TypeError: 1 is not a function“. Wenn Ihr Programmierstil auf Semikolons verzichtet, denken Sie daran, einer Zeile, die mit einer öffnenden Klammer beginnt, ein Semikolon _voranzustellen_. Diese Vorgehensweise wird von mehreren Formatierungswerkzeugen und/oder Styleguides empfohlen, darunter [Prettier](https://prettier.io/docs/rationale.html#semicolons) und [standard](https://standardjs.com/rules.html#semicolons).

```js-nolint example-good
const a = 1
;(1).toString()
```

Weitere Hinweise zum Umgang mit ASI finden Sie im entsprechenden [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
