---
title: void operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 167a81945e7292ea5e02251538b09a4467237582
---

{{jsSidebar("Operators")}}

Der **`void`** Operator wertet den angegebenen `expression` aus und gibt dann {{jsxref("undefined")}} zurück.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html", "taller")}}

## Syntax

```js-nolint
void expression
```

## Beschreibung

Dieser Operator ermöglicht die Auswertung von Ausdrücken, die einen Wert erzeugen, an Stellen, an denen ein Ausdruck, der {{jsxref("undefined")}} ergibt, gewünscht wird.

Der `void` Operator wird oft nur verwendet, um den `undefined` primitiven Wert zu erhalten, normalerweise mit `void(0)` (was äquivalent zu `void 0` ist). In diesen Fällen kann die globale Variable {{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void` Operators berücksichtigt werden sollte und dass Klammern helfen können, die Auflösung des Ausdrucks nach dem `void` Operator zu verdeutlichen:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofort ausgeführte Funktionsausdrücke

Bei der Verwendung eines {{Glossary("IIFE", "sofort ausgeführten Funktionsausdrucks (IIFE)")}} darf das `function` Schlüsselwort nicht am unmittelbaren Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) analysiert würde und beim Erreichen der Klammern, die die Ausführung darstellen, einen Syntaxfehler erzeugen würde – falls die Funktion unbenannt ist, wäre es sofort ein Syntaxfehler, wenn die Funktion als Deklaration analysiert wird.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) analysiert wird, muss das `function` Schlüsselwort an einer Position erscheinen, die nur Ausdrücke, nicht Anweisungen, akzeptiert. Dies kann erreicht werden, indem dem Schlüsselwort ein [unärer Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) vorangestellt wird, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat höhere [Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, daher wird er zuerst ausgeführt. Sein Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und dann sofort verworfen.

Von allen unären Operatoren bietet `void` die beste Semantik, da es deutlich signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden sollte.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger als das Umschließen des Funktionsausdrucks in Klammern, was denselben Effekt hat, das `function` Schlüsselwort als Beginn eines Ausdrucks anstatt einer Anweisung zu erzwingen.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur auf IIFEs zutrifft, die mit dem `function` Schlüsselwort definiert sind. Der Versuch, den `void` Operator zu verwenden, um Klammern für eine Arrow-Funktion zu vermeiden, führt zu einem Syntaxfehler. Arrow-Funktionsausdrücke erfordern immer Klammern, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript URIs

Wenn ein Browser einem [`javascript:` URI](/de/docs/Web/URI/Schemes/javascript) folgt, wertet er den Code im URI aus und ersetzt dann den Inhalt der Seite durch den zurückgegebenen Wert, es sei denn, der zurückgegebene Wert ist {{jsxref("undefined")}}. Der `void` Operator kann verwendet werden, um `undefined` zurückzugeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> **Hinweis:** Das `javascript:` Pseudoprotokoll wird gegenüber anderen Alternativen wie unaufdringlichen Ereignishandlern nicht empfohlen.

### Nicht-leakende Arrow-Funktionen

Arrow-Funktionen führen eine Kurzschreibweise ohne geschweifte Klammern ein, die einen Ausdruck zurückgibt. Dies kann zu unbeabsichtigten Nebeneffekten führen, wenn der Ausdruck ein Funktionsaufruf ist, bei dem sich der zurückgegebene Wert von `undefined` auf einen anderen Wert ändert.

Zum Beispiel, wenn `doSomething()` im untenstehenden Code `false` zurückgibt, wird das Kontrollkästchen beim Klicken nicht mehr als angekreuzt oder nicht angekreuzt markiert (wenn der Handler `false` zurückgibt, wird die Standardaktion deaktiviert).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dieses Verhalten ist wahrscheinlich nicht gewünscht! Um sicher zu gehen, dass der Rückgabewert einer Funktion nicht verwendet werden soll, kann er an den `void` Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs nicht das Verhalten von Arrow-Funktionen verändern.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
