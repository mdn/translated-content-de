---
title: arguments.callee
short-title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Deprecated_Header}}

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) führt zu einem {{jsxref("TypeError")}}. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Daten-Eigenschaft enthält die aktuell ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die aktuell ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> `callee` ist eine Dateneigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall ist das `arguments`-Objekt auch [automatisch synchronisierend](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Andernfalls ist es eine Accessor-Eigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} werfen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments`-Objekts. Sie kann innerhalb des Funktionskörpers verwendet werden, um auf die aktuell ausgeführte Funktion zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, wie bei einem Funktionsausdruck ohne Namen (auch als "anonyme Funktionen" bezeichnet).

(Der folgende Text ist weitgehend aus [einer Stack Overflow-Antwort von olliej](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760) übernommen)

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

nicht. Um dies zu umgehen, wurde `arguments.callee` hinzugefügt, sodass Sie Folgendes tun konnten:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

Das Design von `arguments.callee` weist jedoch mehrere Probleme auf. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

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

Darüber hinaus machen Verweise auf `arguments.callee` das Inlining und die Endrekursion im Allgemeinen unmöglich. (In bestimmten Fällen können Sie dies durch Nachverfolgung usw. erreichen, aber selbst der beste Code ist aufgrund von Überprüfungen, die sonst nicht notwendig wären, suboptimal.)

ECMAScript 3 hat diese Probleme gelöst, indem benannte Funktionsausdrücke erlaubt wurden. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden
- sie erstellt keine Variable im äußeren Bereich ([außer bei IE 8 und darunter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- sie hat eine bessere Performance als der Zugriff auf das arguments-Objekt

Der strict mode hat andere Eigenschaften verboten, die Stapelinformationen durchsickern, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Aufrufstapels einen einzigen großen Effekt hat: Es macht eine große Anzahl von Optimierungen unmöglich oder viel schwieriger. Zum Beispiel, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, ist es nicht möglich, `f` zu inlineen.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle übergebenen Argumente zum Zeitpunkt des Aufrufs Zahlen sind, muss er entweder Überprüfungen für alle Argumente vor dem inlangenen Code einfügen, oder er kann die Funktion nicht inlinen. Dies bedeutet, dass jede Aufrufstelle, die trivial inlinebar gewesen sein könnte, eine große Anzahl an Wachen ansammelt. In diesem speziellen Fall sollte ein intelligenter Interpreter in der Lage sein, die Überprüfungen optimaler umzuordnen und keine Werte zu überprüfen, die nicht verwendet würden. In vielen Fällen ist dies jedoch einfach nicht möglich, und es wird unmöglich, die Funktion zu inlinen.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, sich selbst zu referenzieren. Normalerweise referenziert eine Funktion sich selbst über ihren Namen. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Wenn es daher keine zugängliche Variable gibt, die auf sie verweist, ist `arguments.callee` der einzige Weg, über den die Funktion auf sich selbst verweisen kann.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch, und es gibt nahezu keine Fälle, in denen dasselbe Ergebnis nicht mit [benannten Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erreicht werden kann.

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

### Rekursion von anonymen Funktionen mit einem Y-Kombinator

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie nicht auf sich selbst referenzieren können, ohne zuerst einer Variablen zugewiesen zu werden. Glücklicherweise gibt es im Lambda-Kalkül eine sehr gute Lösung, die es einer Funktion ermöglicht, sowohl anonym als auch selbstreferenziell zu sein. Die Technik wird als [Y-Kombinator](https://de.wikipedia.org/wiki/Fixpunkt-Kombinator#Y-Kombinator) bezeichnet. Hier wird nicht erklärt, _wie_ es funktioniert, sondern nur, _dass_ es funktioniert.

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
> Diese Methode allokiert für jede Iteration einen neuen Abschluss, was den Speicherverbrauch erheblich erhöhen kann. Sie wird hier nur demonstriert, um die Möglichkeit aufzuzeigen, sollte jedoch in der Produktion vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
