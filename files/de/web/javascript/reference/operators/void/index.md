---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **`void`**-Operator wertet den gegebenen `Ausdruck` aus und gibt anschließend {{jsxref("undefined")}} zurück.

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

Dieser Operator ermöglicht es, Ausdrücke, die einen Wert produzieren, an Stellen zu verwenden, an denen ein Ausdruck gewünscht wird, der zu {{jsxref("undefined")}} ausgewertet wird.

Der `void`-Operator wird oft einfach dazu verwendet, den primitiven Wert `undefined` zu erhalten, üblicherweise mit `void(0)` (was gleichbedeutend ist mit `void 0`). In diesen Fällen kann die globale Variable {{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass die [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators berücksichtigt werden sollte und dass Klammern dazu beitragen können, die Auswertung des Ausdrucks nach dem `void`-Operator zu verdeutlichen:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofort aufgerufene Funktionsausdrücke

Bei der Verwendung eines {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdrucks")}} kann das `function`-Schlüsselwort nicht direkt am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) geparst wird und zu einem Syntaxfehler führt, wenn die Klammern für den Aufruf erreicht werden – wenn die Funktion namenlos ist, würde dies sofort ein Syntaxfehler sein, wenn die Funktion als Deklaration geparst wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) geparst wird, muss das `function`-Schlüsselwort an einer Position erscheinen, die nur Ausdrücke und nicht Anweisungen akzeptiert. Dies kann erreicht werden, indem das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) versehen wird, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, daher wird er zuerst ausgeführt. Sein Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und dann sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Bedeutung, da es deutlich macht, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Einhüllen des Funktionsausdrucks in Klammern, was den gleichen Effekt hat, nämlich das `function`-Schlüsselwort als Beginn eines Ausdrucks statt als Anweisung zu parsen.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur auf IIFEs anwendbar ist, die mit dem `function`-Schlüsselwort definiert sind. Der Versuch, den `void`-Operator zu verwenden, um Klammern bei einem Pfeilfunktionsausdruck zu vermeiden, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke erfordern immer Klammern um sie, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einem [`javascript:` URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, wird der Code im URI ausgewertet und dann der Inhalt der Seite durch den zurückgegebenen Wert ersetzt, es sei denn, der zurückgegebene Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um `undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> [!NOTE]
> Das `javascript:`-Pseudo-Protokoll wird zugunsten anderer Alternativen, wie zum Beispiel unobtrusiver Ereignisbehandler, nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine abgekürzte klammerlose Syntax ein, die einen Ausdruck zurückgibt. Dies kann unbeabsichtigte Nebeneffekte haben, wenn der Ausdruck ein Funktionsaufruf ist, bei dem sich der zurückgegebene Wert von `undefined` zu einem anderen Wert ändert.

Wenn beispielsweise `doSomething()` im untenstehenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr als markiert oder unmarkiert angezeigt, wenn das Kontrollkästchen angeklickt wird (die Rückgabe von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich kein gewünschtes Verhalten! Um sicherzugehen, dass der Rückgabewert einer Funktion nicht verwendet wird, kann er an den `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs nicht dazu führen, dass sich das Verhalten von Pfeilfunktionen ändert.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
