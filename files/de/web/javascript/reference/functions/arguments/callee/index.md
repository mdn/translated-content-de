---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> Das Zugreifen auf `arguments.callee` im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) wird einen {{jsxref("TypeError")}} auslösen. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Daten-Eigenschaft enthält die derzeit ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die derzeit ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> **Hinweis:** `callee` ist eine Dateneigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall wird das `arguments`-Objekt auch [automatisch synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Andernfalls ist es eine Zugriffseigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} auslösen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments`-Objekts. Es kann verwendet werden, um innerhalb des Funktionskörpers auf die derzeit ausgeführte Funktion zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, beispielsweise innerhalb eines Funktionsausdrucks ohne Namen (auch "anonyme Funktionen" genannt).

(Der folgende Text ist größtenteils adaptiert von [einer Antwort von olliej auf Stack Overflow](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760))

Frühere Versionen von JavaScript erlaubten keine benannten Funktionsausdrücke, und aus diesem Grund konnte man keinen rekursiven Funktionsausdruck erstellen.

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

nicht. Um dies zu umgehen, wurde `arguments.callee` hinzugefügt, sodass Sie folgendes tun konnten:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

Jedoch hat das Design von `arguments.callee` mehrere Probleme. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

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

Zusätzlich machen Verweise auf `arguments.callee` das Inlining und die Endrekursion im allgemeinen Fall unmöglich. (Sie können es in ausgewählten Fällen durch Tracing usw. erreichen, aber selbst der beste Code ist suboptimal aufgrund von Überprüfungen, die sonst nicht notwendig wären.)

ECMAScript 3 hat diese Probleme gelöst, indem benannte Funktionsausdrücke ermöglicht wurden. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Das hat zahlreiche Vorteile:

- die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden
- es wird keine Variable im äußeren Bereich erstellt ([außer in IE 8 und darunter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- es hat eine bessere Leistung als das Zugreifen auf das arguments-Objekt

Strikter Modus hat andere Eigenschaften verboten, die Stack-Informationen preisgeben, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Aufrufstapels eine einzige große Auswirkung hat: Es macht eine große Anzahl von Optimierungen unmöglich oder viel schwieriger. Zum Beispiel, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, ist es nicht möglich, `f` zu inlinen.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente Zahlen sind, zu dem Zeitpunkt, zu dem der Aufruf erfolgt, muss er entweder Überprüfungen für alle Argumente vor dem inlined Code einfügen, oder er kann die Funktion nicht inlinen. Das bedeutet, dass jede Aufrufstelle, die möglicherweise trivial inlinefähig gewesen wäre, eine große Anzahl von Prüfvorgängen anhäuft. Nun sollte es in diesem speziellen Fall einem intelligenten Interpreter möglich sein, die Überprüfungen so umzuordnen, dass sie optimaler sind und keine Werte überprüfen, die nicht verwendet werden würden. In vielen Fällen ist das jedoch einfach nicht möglich und daher wird es unmöglich, inlined Code zu erzeugen.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, auf sich selbst zu verweisen. Typischerweise verweist eine Funktion auf sich selbst durch ihren Namen. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt wird) hat jedoch keinen Namen. Daher, wenn es keine zugängliche Variable gibt, die auf sie verweist, ist der einzige Weg, wie die Funktion auf sich selbst verweisen kann, durch `arguments.callee`.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch, und es gibt fast keine Fälle, in denen dasselbe Ergebnis nicht mit [benannten Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erzielt werden kann.

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

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie sich nicht selbst referenzieren können, ohne zuerst einer Variablen zugewiesen zu werden. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion ermöglicht, sowohl anonym als auch selbstreferenziell zu sein. Die Technik wird als [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) bezeichnet. Hier erklären wir nicht, _wie_ sie funktioniert, sondern nur, _dass_ sie funktioniert.

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
> Diese Methode weist bei jeder Iteration einen neuen Abschluss zu, was den Speicherverbrauch erheblich erhöhen kann. Sie ist hier nur, um die Möglichkeit zu demonstrieren, sollte aber in der Praxis vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
