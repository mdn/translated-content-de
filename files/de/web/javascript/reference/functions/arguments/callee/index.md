---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) löst einen {{jsxref("TypeError")}} aus. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Daten-Eigenschaft enthält die gerade ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die gerade ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> **Hinweis:** `callee` ist eine Daten-Eigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall wird das `arguments`-Objekt auch [automatisch synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Andernfalls ist es eine Accessor-Eigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} auslösen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments`-Objekts. Es kann verwendet werden, um innerhalb des Funktionskörpers der aktuellen Funktion auf diese zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, z.B. innerhalb eines Funktionsausdrucks ohne Namen (auch "anonyme Funktionen" genannt).

(Der folgende Text ist größtenteils von [einer Antwort auf Stack Overflow von olliej](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760) adaptiert)

Frühe Versionen von JavaScript erlaubten keine benannten Funktionsausdrücke, weshalb man keine rekursiven Funktionsausdrücke erstellen konnte.

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

tat es nicht. Um dieses Problem zu umgehen, wurde `arguments.callee` hinzugefügt, sodass man Folgendes tun konnte:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

Das Design von `arguments.callee` weist jedoch mehrere Probleme auf. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

```js
const global = this;

const sillyFunction = function (recursed) {
  if (this !== global) {
    console.log("This is:", this);
  } else {
    console.log("This is the global");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
};

sillyFunction();
// This is the global
// This is: [object Arguments]
```

Darüber hinaus machen Verweise auf `arguments.callee` Inlining und Tail-Recursion im Allgemeinen unmöglich. (Man kann es in ausgewählten Fällen durch Tracing usw. erreichen, aber selbst der beste Code ist suboptimal aufgrund von Prüfungen, die ansonsten nicht notwendig wären.)

ECMAScript 3 löste diese Probleme, indem benannte Funktionsausdrücke erlaubt wurden. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- Die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden.
- Sie erstellt keine Variable im äußeren Geltungsbereich ([außer bei IE 8 und darunter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope)).
- Sie hat eine bessere Leistung als der Zugriff auf das `arguments`-Objekt.

Der Strict-Modus hat andere Eigenschaften verboten, die Stack-Informationen preisgeben, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Call-Stacks eine einzige große Auswirkung hat: Es macht eine große Anzahl von Optimierungen unmöglich oder erheblich schwieriger. Beispielsweise ist es nicht möglich, `f` inline zu setzen, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente zum Zeitpunkt des Aufrufs Zahlen sind, muss er entweder Prüfungen für alle Argumente vor dem Inline-Code einfügen oder kann die Funktion nicht inline setzen. Dies bedeutet, dass jede Rufstelle, die trivial inline sein könnte, eine große Anzahl von Guards anhäuft. In diesem speziellen Fall sollte ein intelligenter Interpreter in der Lage sein, die Prüfungen so zu optimieren, dass keine Werte überprüft werden, die nicht verwendet werden würden. In vielen Fällen ist das jedoch einfach nicht möglich, und daher wird es unmöglich, inline zu setzen.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, sich selbst zu referenzieren. Typischerweise bezieht sich eine Funktion durch ihren Namen auf sich selbst. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Wenn es keine zugängliche Variable gibt, die auf sie verweist, kann die Funktion nur über `arguments.callee` auf sich selbst verweisen.

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

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie sich ohne Zuweisung an eine Variable nicht selbst referenzieren können. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion ermöglicht, sowohl anonym als auch selbstreferenziell zu sein. Die Technik wird als [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) bezeichnet. Hier wird nicht erklärt, _wie_ es funktioniert, sondern nur _dass_ es funktioniert.

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
> Diese Methode erstellt eine neue Closure für jede Iteration, was den Speicherverbrauch erheblich erhöhen kann. Sie wird hier nur zur Veranschaulichung der Möglichkeit gezeigt, sollte aber in der Produktion vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
