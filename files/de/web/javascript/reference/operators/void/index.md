---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
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

Dieser Operator ermöglicht es, Ausdrücke, die einen Wert erzeugen, an Stellen auszuwerten, an denen ein Ausdruck, der zu {{jsxref("undefined")}} ausgewertet wird, erwünscht ist.

Der `void`-Operator wird oft verwendet, um lediglich den primitiven Wert `undefined` zu erhalten, üblicherweise unter Verwendung von `void(0)` (was gleichbedeutend mit `void 0` ist). In diesen Fällen kann die globale Variable {{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators berücksichtigt werden muss und dass Klammern helfen können, die Auflösung des Ausdrucks nach dem `void`-Operator zu verdeutlichen:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Immediately Invoked Function Expressions

Bei der Verwendung eines {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdrucks")}} (IIFE) kann das Schlüsselwort `function` nicht direkt am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) geparst würde und einen Syntaxfehler erzeugen würde, wenn die Klammern für den Aufruf erreicht werden. Wenn die Funktion namenlos ist, würde dies sofort einen Syntaxfehler verursachen, wenn die Funktion als Deklaration geparst wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) geparst wird, muss das Schlüsselwort `function` an einer Stelle erscheinen, die nur Ausdrücke akzeptiert und keine Anweisungen. Dies kann erreicht werden, indem das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) vorangestellt wird, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat eine höhere [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, daher wird er zuerst ausgeführt. Sein Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und dann sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Semantik, da er eindeutig signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Einschließen des Funktionsausdrucks in Klammern, was denselben Effekt hat, nämlich das `function`-Schlüsselwort als Beginn eines Ausdrucks statt einer Anweisung zu parsen.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem Schlüsselwort `function` definiert sind. Der Versuch, den `void`-Operator zu verwenden, um Klammern für eine Pfeilfunktion zu vermeiden, führt zu einem Syntaxfehler. Pfeil-Funktionsausdrücke erfordern immer Klammern um sie, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einer [`javascript:` URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, wird der Code in der URI ausgewertet und der Inhalt der Seite durch den zurückgegebenen Wert ersetzt, es sei denn, der zurückgegebene Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um `undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Hinweis:** Die Verwendung des `javascript:` Scheme ist im Vergleich zu anderen Alternativen, wie unverfängliche Ereignis-Handler, nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine Kurzsyntax ohne geschweifte Klammern ein, die einen Ausdruck zurückgibt. Dies kann unbeabsichtigte Nebenwirkungen verursachen, wenn der Ausdruck ein Funktionsaufruf ist, bei dem sich der zurückgegebene Wert von `undefined` zu einem anderen Wert ändert.

Beispielsweise: Wenn `doSomething()` in dem folgenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr als aktiviert oder deaktiviert markiert, wenn darauf geklickt wird (eine Rückgabe von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich nicht das gewünschte Verhalten!
Um sicherzugehen, dass der Rückgabewert einer Funktion nicht verwendet wird, kann er dem `void`-Operator übergeben werden, um sicherzustellen, dass sich beispielsweise bei Änderung von APIs das Verhalten von Pfeil-Funktionen nicht ändert.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
