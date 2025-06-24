---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Operators")}}

Der **`void`**-Operator wertet den gegebenen `expression` aus und gibt dann {{jsxref("undefined")}} zurück.

{{InteractiveExample("JavaScript Demo: void operator", "taller")}}

```js interactive-example
const output = void 1;
console.log(output);
// Expected output: undefined

void console.log("expression evaluated");
// Expected output: "expression evaluated"

void (function iife() {
  console.log("iife is executed");
})();
// Expected output: "iife is executed"

void function test() {
  console.log("test function executed");
};
try {
  test();
} catch (e) {
  console.log("test function is not defined");
  // Expected output: "test function is not defined"
}
```

## Syntax

```js-nolint
void expression
```

## Beschreibung

Dieser Operator ermöglicht die Auswertung von Ausdrücken, die einen Wert erzeugen, an Stellen, an denen ein Ausdruck gewünscht wird, der zu {{jsxref("undefined")}} ausgewertet wird.

Der `void`-Operator wird oft nur verwendet, um den `undefined`-Primitivwert zu erhalten, häufig durch `void(0)` (was `void 0` entspricht). In diesen Fällen kann die globale Variable {{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass die [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators berücksichtigt werden sollte und dass Klammern helfen können, die Auflösung des Ausdrucks nach dem `void`-Operator zu klären:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Immediately Invoked Function Expressions

Beim Verwenden eines {{Glossary("IIFE", "sofort ausgeführten Funktionsausdrucks")}} kann das `function`-Schlüsselwort nicht direkt am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) geparst wird und einen Syntaxfehler erzeugt, wenn die Klammern, die die Ausführung darstellen, erreicht werden – wenn die Funktion unbenannt ist, würde es sofort einen Syntaxfehler geben, wenn die Funktion als Deklaration geparst wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) geparst wird, muss das `function`-Schlüsselwort an einer Stelle erscheinen, die nur Ausdrücke, nicht Anweisungen akzeptiert. Dies kann erreicht werden, indem man das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) versieht, der nur Ausdrücke als Operanden akzeptiert. Die Funktionsaufruf hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, sodass sie zuerst ausgeführt wird. Ihr Rückgabewert (der fast immer `undefined` ist) wird dann dem unären Operator übergeben und sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Semantik, da es klar signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Einrahmen des Funktionsausdrucks in Klammern, was denselben Effekt hat, das `function`-Schlüsselwort als Beginn eines Ausdrucks statt einer Anweisung zu parsen.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem `function`-Schlüsselwort definiert sind. Der Versuch, den `void`-Operator zu verwenden, um Klammern bei einem Pfeilfunktionsausdruck zu vermeiden, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke erfordern immer Klammern um sie, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einer [`javascript:`-URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, evaluiert er den Code in der URI und ersetzt dann den Inhalt der Seite mit dem zurückgegebenen Wert, es sei denn, der zurückgegebene Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um `undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> [!NOTE]
> Das `javascript:`-Pseudo-Protokoll wird gegenüber anderen Alternativen, wie unaufdringlichen Ereignishandlern, nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine verkürzte syntax ohne Klammern ein, die einen Ausdruck zurückgibt. Dies kann unbeabsichtigte Nebeneffekte verursachen, wenn der Ausdruck ein Funktionsaufruf ist, bei dem der zurückgegebene Wert sich von `undefined` zu einem anderen Wert ändert.

Zum Beispiel, wenn `doSomething()` im folgenden Code `false` zurückgibt, wird das Kontrollkästchen beim Anklicken nicht mehr markiert oder demarkiert (das Zurückgeben von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich nicht das gewünschte Verhalten! Um sicherzugehen, dass der Rückgabewert einer Funktion nicht verwendet werden soll, kann er dem `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs das Verhalten von Pfeilfunktionen nicht ändern.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
