---
title: arguments.callee
short-title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [Strict Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird einen {{jsxref("TypeError")}} auslösen. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Dateneigenschaft enthält die derzeit ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die derzeit ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> `callee` ist eine Dateneigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall synchronisiert sich das `arguments`-Objekt [automatisch](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Andernfalls ist es eine Accessor-Eigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} auslösen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments`-Objekts. Sie kann innerhalb des Funktionskörpers verwendet werden, um auf die derzeit ausgeführte Funktion zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, wie zum Beispiel bei einem Funktionsausdruck ohne Namen (auch "anonyme Funktionen" genannt).

(Der folgende Text ist größtenteils adaptiert von [einer Stack Overflow Antwort von olliej](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760))

Frühe Versionen von JavaScript erlaubten keine benannten Funktionsausdrücke, und aus diesem Grund konnten Sie keinen rekursiven Funktionsausdruck erstellen.

Zum Beispiel funktionierte diese Syntax:

```js
function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

aber:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : /* what goes here? */ (n - 1) * n;
});
```

tat es nicht. Um dies zu umgehen, wurde `arguments.callee` hinzugefügt, sodass Sie dies tun konnten

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

Jedoch hat das Design von `arguments.callee` mehrere Probleme. Das erste Problem besteht darin, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

```js
function sillyFunction(recursed) {
  if (this !== globalThis) {
    console.log("This is:", this);
  } else {
    console.log("This is the global");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
}

sillyFunction();
// This is the global
// This is: [object Arguments]
```

Zusätzlich machen Verweise auf `arguments.callee` in den meisten Fällen das Inlining und die Tail-Rekursion unmöglich. (Sie können es in ausgewählten Fällen durch Tracing usw. erreichen, aber selbst der beste Code ist suboptimal aufgrund von Überprüfungen, die sonst nicht notwendig wären.)

ECMAScript 3 löste diese Probleme, indem benannte Funktionsausdrücke erlaubt wurden. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden
- es erzeugt keine Variable im äußeren Geltungsbereich ([außer bei IE 8 und darunter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- es hat eine bessere Leistung als der Zugriff auf das arguments-Objekt

Strict Mode hat andere Eigenschaften verboten, die Stapelinformationen durchsickern lassen, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Aufrufstapels einen einzigen großen Effekt hat: es macht eine große Anzahl von Optimierungen unmöglich oder viel schwieriger. Zum Beispiel, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, ist es nicht möglich, `f` zu inlinen.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente an dem Punkt, an dem der Aufruf erfolgt, Zahlen sind, muss er entweder Prüfungen für alle Argumente vor dem Inline-Code einfügen, oder er kann die Funktion nicht inlinen. Dies bedeutet, dass jede Aufrufstelle, die trivial inlinerbar gewesen sein könnte, eine große Anzahl von Schutzmaßnahmen ansammelt. In diesem speziellen Fall sollte ein intelligenter Interpreter in der Lage sein, die Prüfungen so umzuordnen, dass sie optimaler sind und keine Werte überprüft, die nicht verwendet würden. In vielen Fällen ist das jedoch einfach nicht möglich und daher wird es unmöglich, inlining durchzuführen.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, auf sich selbst zu verweisen. Normalerweise verweist eine Funktion auf sich selbst durch ihren Namen. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Daher, wenn es keine zugängliche Variable gibt, die auf sie verweist, kann die Funktion nur durch `arguments.callee` auf sich selbst verweisen.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch, und es gibt kaum Fälle, in denen dasselbe Ergebnis nicht mit [benannten Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erreicht werden kann.

```js
function create() {
  return function (n) {
    if (n <= 1) {
      return 1;
    }
    return n * arguments.callee(n - 1);
  };
}

const result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
```

### Rekursion anonymer Funktionen mit einem Y-Kombinator

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie sich nicht selbst referenzieren können, ohne zuerst einer Variablen zugewiesen zu werden. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion ermöglicht, sowohl anonym als auch selbstreferenziell zu sein. Die Technik wird als [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) bezeichnet. Hier werden wir nicht erklären, _wie_ es funktioniert, nur _dass_ es funktioniert.

```js
// The Y-combinator: a utility function!
const Y = (hof) => ((x) => x(x))((x) => hof((y) => x(x)(y)));

console.log(
  [1, 2, 3, 4, 5].map(
    // Wrap the higher-order function in the Y-combinator
    // "factorial" is not a function's name: it's introduced as a parameter
    Y((factorial) => (n) => (n <= 1 ? 1 : factorial(n - 1) * n)),
  ),
);
// [ 1, 2, 6, 24, 120 ]
```

> [!NOTE]
> Diese Methode weist bei jeder Iteration einen neuen Closure zu, was den Speicherverbrauch erheblich erhöhen kann. Es ist nur hier, um die Möglichkeit zu demonstrieren, sollte aber in der Produktion vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
