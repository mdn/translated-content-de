---
title: arguments.callee
short-title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt zu einem {{jsxref("TypeError")}}. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Dateneigenschaft enthält die aktuell ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Eine Referenz auf die aktuell ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE] > `callee` ist eine Dateneigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall ist das `arguments` Objekt ebenfalls [automatisch synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Andernfalls ist es eine Accessor-Eigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} werfen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments` Objekts. Es kann verwendet werden, um auf die aktuell ausgeführte Funktion innerhalb des Funktionskörpers dieser Funktion zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, z.B. innerhalb eines Funktionsausdrucks ohne Namen (auch als "anonyme Funktionen" bezeichnet).

(Der folgende Text ist weitgehend angepasst aus [einer Stack Overflow Antwort von olliej](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760))

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

nicht. Um dieses Problem zu umgehen, wurde `arguments.callee` hinzugefügt, sodass Sie

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

tun konnten.

Das Design von `arguments.callee` hat jedoch mehrere Probleme. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

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

Außerdem machen Verweise auf `arguments.callee` das Inlining und die Endrekursion im Allgemeinen unmöglich. (Man kann es in ausgewählten Fällen durch Tracing usw. erreichen, aber selbst der beste Code ist suboptimal aufgrund von Überprüfungen, die sonst nicht notwendig wären.)

ECMAScript 3 hat diese Probleme gelöst, indem sie benannte Funktionsausdrücke erlaubt haben. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden
- sie erstellt keine Variable im äußeren Scope ([mit Ausnahme von IE 8 und niedriger](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- sie hat eine bessere Leistung als der Zugriff auf das `arguments` Objekt

Der Strict-Modus hat andere Eigenschaften verboten, die Stapelinformationen preisgeben, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Aufrufstapels eine große Anzahl von Optimierungen unmöglich oder viel schwieriger macht. Zum Beispiel, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, ist es nicht möglich, `f` zu inline.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente zum Zeitpunkt des Aufrufs Zahlen sind, muss er entweder Überprüfungen für alle Argumente vor dem inlined Code einfügen oder er kann die Funktion nicht inline. Das bedeutet, dass jede Aufrufstelle, die möglicherweise trivial inline wäre, eine große Anzahl von Schutzmaßnahmen akkumuliert. In diesem speziellen Fall sollte ein intelligenter Interpreter in der Lage sein, die Prüfungen umzuordnen, um optimaler zu sein und keine Werte zu überprüfen, die nicht verwendet würden. In vielen Fällen ist das jedoch einfach nicht möglich, und daher wird es unmöglich zu inline.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss sich selbst referenzieren können. Typischerweise bezieht sich eine Funktion auf sich selbst durch ihren Namen. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Daher ist, wenn keine zugängliche Variable auf sie verweist, die einzige Möglichkeit, dass die Funktion sich selbst referenziert, durch `arguments.callee`.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch, und es gibt fast keine Fälle, in denen dasselbe Ergebnis nicht mit [benannten Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erreicht werden kann.

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

Obwohl Funktionsausdrücke nun benannt werden können, bleiben [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet dass sie sich nicht selbst referenzieren können, ohne zuerst einer Variablen zugewiesen zu werden. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion ermöglicht, sowohl anonym als auch selbstreferenziell zu sein. Die Technik wird als [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) bezeichnet. Hier werden wir nicht erklären, _wie_ es funktioniert, sondern nur _dass_ es funktioniert.

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
> Diese Methode allokiert für jede Iteration eine neue Closure, was den Speicherverbrauch erheblich erhöhen kann. Sie ist hier nur, um die Möglichkeit zu demonstrieren, sollte aber in der Produktion vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
