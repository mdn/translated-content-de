---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

Der **`void`**-Operator bewertet den angegebenen
`expression` und gibt dann {{jsxref("undefined")}} zurück.

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

Dieser Operator ermöglicht die Auswertung von Ausdrücken, die einen Wert erzeugen, in Bereichen, in denen ein Ausdruck erwünscht ist, der zu {{jsxref("undefined")}} ausgewertet wird.

Der `void`-Operator wird häufig verwendet, um den
`undefined`-Primitivwert zu erhalten, normalerweise mit `void(0)` (was
gleichbedeutend mit `void 0` ist). In diesen Fällen kann die globale Variable
{{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
des `void`-Operators berücksichtigt werden sollte und dass
Klammern helfen können, die Auflösung des Ausdrucks nach dem
`void`-Operator zu klären:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Unmittelbar aufgerufene Funktionsausdrücke

Beim Verwenden eines {{Glossary("IIFE", "unmittelbar aufgerufenen Funktionsausdrucks")}} kann das Schlüsselwort `function` nicht direkt am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) analysiert würde und einen Syntaxfehler erzeugen würde, wenn die Klammern für den Aufruf erreicht werden — wenn die Funktion unbenannt ist, wäre es sofort ein Syntaxfehler, wenn die Funktion als Deklaration analysiert wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) analysiert wird, muss das Schlüsselwort `function` an einer Position erscheinen, die nur Ausdrücke, nicht jedoch Anweisungen akzeptiert. Dies kann erreicht werden, indem das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) vorangestellt wird, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, sodass er zuerst ausgeführt wird. Sein Rückgabewert (der fast immer `undefined` ist) wird dann an den unären Operator übergeben und sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Semantik, da es klar signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Umwickeln des Funktionsausdrucks mit Klammern, was denselben Effekt hat, nämlich das Erzwingen, dass das Schlüsselwort `function` als Beginn eines Ausdrucks statt einer Anweisung analysiert wird.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem Schlüsselwort `function` definiert wurden. Der Versuch, den `void`-Operator zu verwenden, um Klammern bei einem Pfeilfunktionsaufruf zu vermeiden, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke erfordern immer Klammern, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einem [`javascript:`-URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, wertet er den Code im URI aus
und ersetzt dann den Inhalt der Seite durch den zurückgegebenen Wert, es sei denn, der zurückgegebene
Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um
`undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Note:** Das Pseudo-Protokoll `javascript:` wird gegenüber anderen Alternativen, wie beispielsweise unobtrusiven Event-Handlern, nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine braceless Kurzschreibsyntax ein, die einen Ausdruck zurückgibt.
Dies kann unbeabsichtigte Nebeneffekte verursachen, wenn der Ausdruck ein Funktionsaufruf ist, bei dem sich der zurückgegebene Wert von `undefined` in einen anderen Wert ändert.

Wenn z.B. `doSomething()` im folgenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr als markiert oder nicht markiert gekennzeichnet, wenn das Kontrollkästchen geklickt wird (das Zurückgeben von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich kein gewünschtes Verhalten!
Um sicher zu sein, dass der Rückgabewert einer Funktion nicht verwendet werden soll, kann er an den `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs nicht dazu führen, dass sich das Verhalten von Pfeilfunktionen ändert.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
