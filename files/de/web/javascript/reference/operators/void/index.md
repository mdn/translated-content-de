---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{jsSidebar("Operators")}}

Der **`void`**-Operator wertet den gegebenen
`expression` aus und gibt dann {{jsxref("undefined")}} zurück.

{{InteractiveExample("JavaScript Demo: void-Operator", "taller")}}

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

Dieser Operator erlaubt es, Ausdrücke, die einen Wert erzeugen, zu evaluieren, an Stellen, an denen ein Ausdruck, der zu {{jsxref("undefined")}} ausgewertet wird, erwünscht ist.

Der `void`-Operator wird oft nur verwendet, um den
`undefined`-Urwert zu erhalten, normalerweise mit `void(0)` (was
äquivalent zu `void 0` ist). In diesen Fällen kann auch die globale Variable
{{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
des `void`-Operators berücksichtigt werden sollte und dass
Klammern dabei helfen können, die Auflösung des Ausdrucks nach dem
`void`-Operator zu verdeutlichen:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofort ausgeführte Funktionsausdrücke

Beim Verwenden eines {{Glossary("IIFE", "sofort ausgeführten Funktionsausdrucks")}} kann das `function`-Schlüsselwort nicht zu Beginn der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) analysiert würde und ein Syntaxfehler erzeugt würde, wenn die Klammern für die Aufrufdarstellung erreicht werden — wenn die Funktion unbenannt ist, wäre es sofort ein Syntaxfehler, wenn die Funktion als Deklaration geparst wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) geparst wird, muss das `function`-Schlüsselwort an einer Stelle erscheinen, die nur Ausdrücke und keine Anweisungen akzeptiert. Dies kann erreicht werden, indem man das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) voranstellt, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, daher wird er zuerst ausgeführt. Sein Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und dann sofort verworfen.

Unter allen unären Operatoren bietet `void` die beste Bedeutung, weil es deutlich signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Einwickeln des Funktionsausdrucks in Klammern, was den gleichen Effekt hat, das `function`-Schlüsselwort als Start eines Ausdrucks anstelle einer Anweisung zu analysieren.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur auf IIFEs anwendbar ist, die mit dem `function`-Schlüsselwort definiert sind. Der Versuch, den `void`-Operator zu verwenden, um Klammern für eine Pfeilfunktion zu vermeiden, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke erfordern immer Klammern um sie herum, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einem [`javascript:` URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, evaluiert er den Code im URI
und ersetzt dann den Inhalt der Seite durch den zurückgegebenen Wert, es sei denn, der zurückgegebene
Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um
`undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Hinweis:** Das `javascript:`-Pseudo-Protokoll wird zugunsten anderer Alternativen, wie zum Beispiel unobtrusive Event-Handler, nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine verkürzte, klammerlose Syntax ein, die einen Ausdruck zurückgibt.
Dies kann unbeabsichtigte Seiteneffekte haben, wenn der Ausdruck ein Funktionsaufruf ist, bei dem sich der zurückgegebene Wert von `undefined` zu einem anderen Wert ändert.

Zum Beispiel, wenn `doSomething()` im folgenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr markiert oder demarkiert, wenn das Kontrollkästchen angeklickt wird (das Zurückgeben von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich nicht das gewünschte Verhalten!
Um sicher zu sein, dass der Rückgabewert einer Funktion nicht verwendet werden soll, kann er an den `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs nicht das Verhalten von Pfeilfunktionen ändern.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
