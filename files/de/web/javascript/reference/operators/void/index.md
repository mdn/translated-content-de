---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 167a81945e7292ea5e02251538b09a4467237582
---

{{jsSidebar("Operators")}}

Der **`void`**-Operator wertet den gegebenen `expression` aus und gibt anschließend {{jsxref("undefined")}} zurück.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html", "taller")}}

## Syntax

```js-nolint
void expression
```

## Beschreibung

Dieser Operator erlaubt es, Ausdrücke, die einen Wert erzeugen, in Kontexten auszuwerten, in denen ein Ausdruck, der zu {{jsxref("undefined")}} ausgewertet wird, gewünscht ist.

Der `void`-Operator wird oft verwendet, um den primitiven Wert `undefined` zu erhalten, normalerweise mit `void(0)` (was äquivalent zu `void 0` ist). In diesen Fällen kann die globale Variable {{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators berücksichtigt werden sollte und dass Klammern helfen können, die Auflösung des Ausdrucks nach dem `void`-Operator zu klären:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofortige Funktionsausdrücke

Beim Verwenden eines [sofortigen Funktionsausdrucks](/de/docs/Glossary/IIFE) kann das Schlüsselwort `function` nicht am sofortigen Beginn der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) analysiert würde und einen Syntaxfehler erzeugen würde, wenn die Klammern erreicht werden, die die Ausführung darstellen — wenn die Funktion namenlos ist, wäre dies sofort ein Syntaxfehler, wenn die Funktion als Deklaration analysiert wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) analysiert wird, muss das Schlüsselwort `function` an einer Stelle erscheinen, die nur Ausdrücke und keine Anweisungen akzeptiert. Dies kann erreicht werden, indem man das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) versieht, der nur Ausdrücke als Operanden akzeptiert. Die Funktionsausführung hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, daher wird sie zuerst ausgeführt. Ihr Rückgabewert (der fast immer `undefined` ist) wird dem unären Operator übergeben und dann sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Semantik, da es deutlich signalisiert, dass der Rückgabewert der Funktionsausführung verworfen werden sollte.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Einwickeln des Funktionsausdrucks in Klammern, was den gleichen Effekt hat, das `function`-Schlüsselwort als Beginn eines Ausdrucks statt einer Anweisung zu erzwingen.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem Schlüsselwort `function` definiert sind. Der Versuch, den `void`-Operator zu verwenden, um Klammern für einen Pfeilfunktionsausdruck zu vermeiden, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke erfordern immer Klammern um sie, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einem [`javascript:` URI](/de/docs/Web/URI/Schemes/javascript) folgt, wertet er den Code im URI aus und ersetzt dann den Inhalt der Seite durch den zurückgegebenen Wert, es sei denn, der zurückgegebene Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um `undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Note:** Das `javascript:` Pseudo-Protokoll wird gegenüber anderen Alternativen, wie unobtrusiven Ereignishandlern, nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine abgekürzte, klammerlose Syntax ein, die einen Ausdruck zurückgibt. Dies kann unbeabsichtigte Nebeneffekte verursachen, wenn der Ausdruck ein Funktionsaufruf ist, bei dem sich der zurückgegebene Wert von `undefined` zu einem anderen Wert ändert.

Wenn zum Beispiel `doSomething()` im untenstehenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr als markiert oder nicht markiert angezeigt, wenn das Kontrollkästchen angeklickt wird (wenn `false` aus dem Handler zurückgegeben wird, wird die Standardaktion deaktiviert).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich ein nicht gewünschtes Verhalten!
Um auf der sicheren Seite zu sein, wenn der Rückgabewert einer Funktion nicht verwendet werden soll, kann er dem `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs nicht dazu führen, dass sich das Verhalten von Pfeilfunktionen ändert.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
