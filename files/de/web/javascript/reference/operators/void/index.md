---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **`void`**-Operator wertet den gegebenen `expression` aus und gibt dann {{jsxref("undefined")}} zurück.

{{InteractiveExample("JavaScript Demo: Expressions - void-Operator", "taller")}}

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

Dieser Operator ermöglicht es, Ausdrücke, die einen Wert erzeugen, an Stellen zu evaluieren, an denen ein Ausdruck, der zu {{jsxref("undefined")}} auswertet, benötigt wird.

Der `void`-Operator wird oft verwendet, um den primitiven Wert `undefined` zu erhalten, üblicherweise mit `void(0)` (was äquivalent zu `void 0` ist). In diesen Fällen kann die globale Variable {{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators berücksichtigt werden sollte und dass Klammern helfen können, die Auflösung des Ausdrucks nach dem `void`-Operator zu klären:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofort auszuführende Funktionsausdrücke

Wenn ein {{Glossary("IIFE", "sofort ausgeführter Funktionsausdruck (IIFE)")}} verwendet wird, darf das `function`-Schlüsselwort nicht direkt am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) interpretiert würde und einen Syntaxfehler erzeugen würde, wenn die Klammern, die die Ausführung darstellen, erreicht werden. Wenn die Funktion unbenannt ist, würde dies sofort einen Syntaxfehler darstellen, sofern die Funktion als Deklaration geparst wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) geparst wird, muss das `function`-Schlüsselwort an einer Position erscheinen, die nur Ausdrücke akzeptiert, nicht Anweisungen. Dies kann erreicht werden, indem das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) versehen wird, der nur Ausdrücke als Operanden akzeptiert. Die Funktionsaufrufe haben eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, daher wird sie zuerst ausgeführt. Ihr Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und dann sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Semantik, da es klar signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Einfassen des Funktionsausdrucks in Klammern, was denselben Effekt hat, nämlich das `function`-Schlüsselwort als Ausdruck und nicht als Anweisung zu interpretieren.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur auf IIFEs angewendet werden kann, die mit dem `function`-Schlüsselwort definiert sind. Der Versuch, den `void`-Operator zu verwenden, um bei Arrow-Funktionen auf Klammern zu verzichten, führt zu einem Syntaxfehler. Arrow-Funktionsausdrücke erfordern immer Klammern um sie herum, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser eine [JavaScript-URI](/de/docs/Web/URI/Schemes/javascript) verfolgt, wertet er den Code in der URI aus und ersetzt dann den Inhalt der Seite mit dem zurückgegebenen Wert, es sei denn, der zurückgegebene Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um `undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Note:** Das `javascript:`-Pseudoprotokoll wird gegenüber anderen Alternativen, wie unaufdringlichen Ereignis-Handlern, nicht empfohlen.

### Fehlereinflussfreie Arrow-Funktionen

Arrow-Funktionen führen eine abgekürzte Syntax ohne geschweifte Klammern ein, die einen Ausdruck zurückgibt. Dies kann unbeabsichtigte Nebeneffekte hervorrufen, wenn der Ausdruck einen Funktionsaufruf darstellt, bei dem der zurückgegebene Wert sich von `undefined` zu einem anderen Wert ändert.

Zum Beispiel: Wenn `doSomething()` im unten stehenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr richtig markiert oder entmarkiert, wenn darauf geklickt wird (das Zurückgeben von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich nicht das gewünschte Verhalten! Um sicherzugehen, dass der Rückgabewert einer Funktion nicht verwendet wird, kann er dem `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) ändernde APIs nicht das Verhalten von Arrow-Funktionen beeinflussen.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
