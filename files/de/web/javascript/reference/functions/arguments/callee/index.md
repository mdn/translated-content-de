---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) führt zu einem {{jsxref("TypeError")}}. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Function-Expression](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Function-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Daten-Eigenschaft enthält die aktuell ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die aktuell ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> **Hinweis:** `callee` ist eine Daten-Eigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall wird das `arguments`-Objekt ebenfalls [automatisch synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Anderenfalls handelt es sich um eine Accessor-Eigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} auslösen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments`-Objekts. Es kann verwendet werden, um innerhalb des Körpers der Funktion, die gerade ausgeführt wird, auf diese zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, wie beispielsweise innerhalb eines Function-Expressions ohne Namen (auch "anonyme Funktionen" genannt).

(Der Text unten ist größtenteils angepasst aus [einer Stack Overflow-Antwort von olliej](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760))

Frühere Versionen von JavaScript erlaubten keine benannten Function-Expressions, und aus diesem Grund konnte man keinen rekursiven Function-Expression erstellen.

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
  return n <= 1 ? 1 : /* was kommt hier hin? */ (n - 1) * n;
});
```

nicht. Um dies zu umgehen, wurde `arguments.callee` hinzugefügt, sodass Sie Folgendes tun konnten:

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

Jedoch hat das Design von `arguments.callee` mehrere Probleme. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

```js
const global = this;

const sillyFunction = function (recursed) {
  if (this !== global) {
    console.log("Dies ist:", this);
  } else {
    console.log("Dies ist das globale");
  }

  if (!recursed) {
    return arguments.callee(true);
  }
};

sillyFunction();
// Dies ist das globale
// Dies ist: [object Arguments]
```

Zudem machen Verweise auf `arguments.callee` Inlining und Tail-Recursion im Allgemeinen unmöglich. (Man kann es in ausgewählten Fällen durch Tracing erreichen, etc., aber selbst der beste Code ist aufgrund von Checks weniger optimal, die sonst nicht notwendig wären.)

ECMAScript 3 löste diese Probleme, indem benannte Function-Expressions erlaubt wurden. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden
- sie erstellt keine Variable im äußeren Raum ([außer in IE 8 und darunter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- sie hat eine bessere Leistung als der Zugriff auf das arguments-Objekt

Der Strict-Modus hat andere Eigenschaften verboten, die Stack-Informationen durchsickern lassen, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)-Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Call-Stacks eine einzige Hauptauswirkung hat: Es macht eine große Anzahl von Optimierungen unmöglich oder viel schwieriger. Beispielsweise, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, kann `f` nicht inline gebracht werden.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente Zahlen sind, muss er entweder Überprüfungen für alle Argumente einfügen, bevor der inline-Code ausgeführt wird, oder er kann die Funktion nicht inline bringen. Dies bedeutet, dass jede Aufrufstelle, die möglicherweise trivial inlineisiert werden könnte, eine große Anzahl von Schutzmaßnahmen akkumuliert. In diesem speziellen Fall sollte ein intelligenter Interpreter in der Lage sein, die Prüfungen neu zu ordnen, um optimaler zu sein und keine Werte zu überprüfen, die nicht verwendet werden. In vielen Fällen ist dies jedoch nicht möglich und daher wird es unmöglich, die Funktion inline zu bringen.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, sich selbst zu referenzieren. Typischerweise verweist eine Funktion auf sich selbst durch ihren Namen. Eine anonyme Funktion (die durch ein [Function-Expression](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Wenn es daher keine zugängliche Variable gibt, die auf sie verweist, ist die einzige Möglichkeit, wie die Funktion auf sich selbst verweisen kann, `arguments.callee`.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch und es gibt fast keine Anwendungsfälle, in denen dasselbe Ergebnis nicht mit [benannten Funktion-Ausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erzielt werden kann.

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

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie sich nicht selbst referenzieren können, ohne zuerst einer Variablen zugewiesen zu werden. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion erlaubt, sowohl anonym als auch selbstreferentiell zu sein. Die Technik wird als [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) bezeichnet. Hier werden wir nicht erklären, _wie_ es funktioniert, sondern nur, _dass_ es funktioniert.

```js
// Der Y-Kombinator: eine Nutzfunktion!
const Y = (hof) => ((x) => x(x))((x) => hof((y) => x(x)(y)));

console.log(
  [1, 2, 3, 4, 5].map(
    // Die höher geordnete Funktion im Y-Kombinator umschließen
    // "factorial" ist kein Funktionsname: es wird als Parameter eingeführt
    Y((factorial) => (n) => (n <= 1 ? 1 : factorial(n - 1) * n)),
  ),
);
// [ 1, 2, 6, 24, 120 ]
```

> [!NOTE]
> Diese Methode weist bei jeder Iteration eine neue Closure zu, was den Speicherverbrauch erheblich erhöhen kann. Sie ist nur dazu gedacht, die Möglichkeit zu demonstrieren, sollte jedoch in Produktionsumgebungen vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder ein benanntes Function-Expression.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
