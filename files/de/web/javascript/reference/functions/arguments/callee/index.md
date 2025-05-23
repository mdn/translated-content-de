---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wirft einen {{jsxref("TypeError")}}. Wenn eine Funktion sich selbst referenzieren muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die Daten-Eigenschaft **`arguments.callee`** enthält die aktuell ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die aktuell ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> **Hinweis:** `callee` ist eine Dateneigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall wird das `arguments` Objekt auch [automatisch synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Andernfalls ist es eine Accessor-Eigenschaft, deren Getter und Setter jeweils einen {{jsxref("TypeError")}} werfen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments` Objekts. Sie kann verwendet werden, um innerhalb des Funktionskörpers der aktuell ausgeführten Funktion auf diese Funktion zu verweisen. Dies ist nützlich, wenn der Name der Funktion unbekannt ist, wie z.B. bei einem Funktionsausdruck ohne Namen (auch "anonyme Funktionen" genannt).

(Der folgende Text ist weitgehend übernommen aus [einer Antwort von olliej auf Stack Overflow](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760))

Frühe Versionen von JavaScript erlaubten keine benannten Funktionsausdrücke, daher konnte man keinen rekursiven Funktionsausdruck erstellen.

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

nicht. Um dieses Problem zu umgehen, wurde `arguments.callee` hinzugefügt, so dass man

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

machen konnte.

Allerdings hat das Design von `arguments.callee` mehrere Probleme. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this`-Wert erhält. Zum Beispiel:

```js
const sillyFunction = function (recursed) {
  if (this !== globalThis) {
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

Zusätzlich machen Verweise auf `arguments.callee` das Inlining und die Endrekursion im Allgemeinen unmöglich. (Man kann es in ausgewählten Fällen durch Tracing usw. erreichen, aber selbst der beste Code ist suboptimal wegen Prüfungen, die sonst nicht notwendig wären.)

ECMAScript 3 hat diese Probleme gelöst, indem es benannte Funktionsausdrücke erlaubte. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- Die Funktion kann wie jede andere innerhalb Ihres Codes aufgerufen werden.
- Es wird keine Variable im äußeren Bereich erstellt ([außer in IE 8 und älter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope)).
- Es hat eine bessere Leistung als der Zugriff auf das `arguments` Objekt.

Der Strict-Mode hat andere Eigenschaften verboten, die Stack-Informationen preisgeben, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Call Stacks eine einzige große Auswirkung hat: Es macht eine große Anzahl von Optimierungen unmöglich oder viel schwieriger. Zum Beispiel, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, ist es nicht möglich, `f` inlined zu bekommen.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente zum Zeitpunkt des Aufrufs Zahlen sind, muss er entweder Prüfungen für alle Argumente vor dem inlined Code einfügen, oder er kann die Funktion nicht inlined ausführen. Dies bedeutet, dass jede Anrufstelle, die möglicherweise trivial inline-fähig gewesen wäre, eine große Anzahl von Schutzmaßnahmen anhäuft. In diesem speziellen Fall sollte ein schlauer Interpreter in der Lage sein, die Prüfungen so umzustellen, dass sie optimaler sind und keine Werte geprüft werden, die nicht verwendet würden. In vielen Fällen ist das jedoch einfach nicht möglich und daher wird es unmöglich, inline zu bleiben.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, sich selbst zu referenzieren. Typischerweise verweist eine Funktion durch ihren Namen auf sich selbst. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Daher gibt es keine zugängliche Variable, die auf sie verweist, die einzige Möglichkeit, wie die Funktion sich selbst referenzieren kann, ist durch `arguments.callee`.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch, und es gibt nahezu keine Fälle, in denen das gleiche Ergebnis nicht mit [benannten Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erzielt werden kann.

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

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie sich nicht selbst referenzieren können, ohne zuerst einer Variablen zugewiesen zu werden. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion ermöglicht, sowohl anonym als auch selbstreferenziell zu sein. Die Technik wird [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) genannt. Hier werden wir nicht erklären, _wie_ es funktioniert, sondern nur, _dass_ es funktioniert.

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
> Diese Methode allokiert bei jeder Iteration einen neuen Abschluss, was den Speicherverbrauch erheblich erhöhen kann. Sie ist hier nur zur Demonstration der Möglichkeit und sollte in der Produktion vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
