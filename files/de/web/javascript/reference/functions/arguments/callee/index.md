---
title: arguments.callee
short-title: callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{jsSidebar("Functions")}}{{Deprecated_Header}}

> [!NOTE]
> Der Zugriff auf `arguments.callee` im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird einen {{jsxref("TypeError")}} auslösen. Wenn eine Funktion auf sich selbst verweisen muss, geben Sie entweder dem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) einen Namen oder verwenden Sie eine [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function).

Die **`arguments.callee`** Daten-Eigenschaft enthält die aktuell ausgeführte Funktion, zu der die Argumente gehören.

## Wert

Ein Verweis auf die aktuell ausgeführte Funktion.

{{js_property_attributes(1, 0, 1)}}

> **Hinweis:** `callee` ist eine Daten-Eigenschaft nur in nicht-strikten Funktionen mit einfachen Parametern (in diesem Fall wird das `arguments` Objekt auch [automatisch synchronisiert](/de/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)). Ansonsten ist es eine Accessor-Eigenschaft, deren Getter und Setter beide einen {{jsxref("TypeError")}} werfen.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments` Objekts. Es kann verwendet werden, um auf die derzeit ausgeführte Funktion innerhalb des Funktionskörpers dieser Funktion zu verweisen. Dies ist nützlich, wenn der Name der Funktion nicht bekannt ist, wie zum Beispiel innerhalb eines unbenannten Funktionsausdrucks (auch als "anonyme Funktionen" bezeichnet).

(Der folgende Text ist weitgehend aus [einer Antwort von olliej auf Stack Overflow](https://stackoverflow.com/questions/103598/why-was-the-arguments-callee-caller-property-deprecated-in-javascript/235760) adaptiert)

In den frühen Versionen von JavaScript waren benannte Funktionsausdrücke nicht erlaubt, und aus diesem Grund konnte man keine rekursiven Funktionsausdrücke erstellen.

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

tat es nicht. Um dies zu umgehen, wurde `arguments.callee` hinzugefügt, sodass man Folgendes tun konnte

```js
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
```

Allerdings hat das Design von `arguments.callee` mehrere Probleme. Das erste Problem ist, dass der rekursive Aufruf einen anderen `this` Wert erhalten wird. Zum Beispiel:

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

Darüber hinaus machen Verweise auf `arguments.callee` das Inlining und Tail-Recursion im Allgemeinen unmöglich. (In bestimmten Fällen kann man es durch Tracing usw. erreichen, aber selbst der beste Code ist suboptimal aufgrund von Überprüfungen, die sonst nicht erforderlich wären.)

ECMAScript 3 hat diese Probleme durch die Erlaubnis benannter Funktionsausdrücke gelöst. Zum Beispiel:

```js
[1, 2, 3, 4, 5].map(function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
});
```

Dies hat zahlreiche Vorteile:

- Die Funktion kann wie jede andere aus Ihrem Code heraus aufgerufen werden
- Es wird keine Variable im äußeren Bereich erstellt ([außer bei IE 8 und darunter](https://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- Es hat eine bessere Leistung als der Zugriff auf das arguments Objekt

Strict Mode hat andere Eigenschaften verboten, die Stack-Informationen preisgeben, wie die [`caller`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) Eigenschaft von Funktionen. Dies liegt daran, dass das Betrachten des Call-Stacks eine einzige große Auswirkung hat: Es macht eine große Anzahl von Optimierungen entweder unmöglich oder deutlich schwieriger. Beispielsweise, wenn Sie nicht garantieren können, dass eine Funktion `f` keine unbekannte Funktion aufruft, ist es nicht möglich, `f` zu inline.

```js
function f(a, b, c, d, e) {
  return a ? b * c : d * e;
}
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle bereitgestellten Argumente an dem Punkt, an dem der Aufruf gemacht wird, Zahlen sind, muss er entweder Überprüfungen für alle Argumente vor dem Inline-Code einfügen, oder er kann die Funktion nicht einfügen. Dies bedeutet, dass jede Aufrufstelle, die möglicherweise einfach inline gemacht werden könnte, eine große Anzahl von Sicherungen anhäuft. In diesem besonderen Fall sollte ein intelligenter Interpreter in der Lage sein, die Überprüfungen so umzustellen, dass sie optimaler sind und keine Werte überprüft, die nicht verwendet würden. Allerdings ist das in vielen Fällen einfach nicht möglich, und deshalb wird es unmöglich, die Funktion zu inline.

## Beispiele

### Verwendung von arguments.callee in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss in der Lage sein, auf sich selbst zu verweisen. Typischerweise verweist eine Funktion durch ihren Namen auf sich selbst. Eine anonyme Funktion (die durch einen [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) oder den [`Function` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) erstellt werden kann) hat jedoch keinen Namen. Daher, wenn es keine zugängliche Variable gibt, die auf sie verweist, ist die einzige Möglichkeit, wie die Funktion auf sich selbst verweisen kann, `arguments.callee`.

Das folgende Beispiel definiert eine Funktion, die wiederum eine Fakultätsfunktion definiert und zurückgibt. Dieses Beispiel ist nicht sehr praktisch, und es gibt nahezu keine Fälle, in denen dasselbe Ergebnis nicht mit [benannten Funktionsausdrücken](/de/docs/Web/JavaScript/Reference/Operators/function) erzielt werden kann.

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

Obwohl Funktionsausdrücke jetzt benannt werden können, bleiben [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) immer anonym, was bedeutet, dass sie nicht auf sich selbst verweisen können, ohne zuerst einer Variablen zugeordnet zu werden. Glücklicherweise gibt es in der Lambda-Kalkulation eine sehr gute Lösung, die es einer Funktion erlaubt, sowohl anonym als auch selbstbezüglich zu sein. Diese Technik wird [Y-Kombinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Y_combinator) genannt. Hier werden wir nicht erklären, _wie_ es funktioniert, nur _dass_ es funktioniert.

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
> Diese Methode erzeugt für jede Iteration eine neue Schließung, was die Speichernutzung erheblich erhöhen kann. Sie wird hier nur gezeigt, um die Möglichkeit zu demonstrieren, sollte aber in der Produktion vermieden werden. Verwenden Sie stattdessen eine temporäre Variable oder einen benannten Funktionsausdruck.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.caller")}}
