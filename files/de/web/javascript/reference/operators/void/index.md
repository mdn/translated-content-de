---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 167a81945e7292ea5e02251538b09a4467237582
---

{{jsSidebar("Operators")}}

Der **`void`**-Operator wertet den gegebenen
`expression` aus und gibt dann {{jsxref("undefined")}} zurück.

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html", "taller")}}

## Syntax

```js-nolint
void expression
```

## Beschreibung

Dieser Operator ermöglicht es, Ausdrücke, die einen Wert erzeugen, in Kontexte zu bringen, in denen ein Ausdruck erwünscht ist, der zu {{jsxref("undefined")}} auswertet.

Der `void`-Operator wird oft nur verwendet, um den
`undefined`-Basiswert zu erhalten, üblicherweise mit `void(0)` (gleichwertig zu `void 0`). In diesen Fällen kann die globale Variable
{{jsxref("undefined")}} verwendet werden.

Es sollte beachtet werden, dass [die Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
des `void`-Operators berücksichtigt werden sollte und dass
Klammern helfen können, die Auflösung des Ausdrucks nach dem
`void`-Operator zu verdeutlichen:

```js
void 2 === "2"; // (void 2) === '2', ergibt false
void (2 === "2"); // void (2 === '2'), ergibt undefined
```

## Beispiele

### Sofort aufgerufene Funktionsausdrücke

Wenn ein [sofort aufgerufener Funktionsausdruck](/de/docs/Glossary/IIFE) verwendet wird, kann das `function`-Schlüsselwort nicht am unmittelbaren Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen, da dies als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) geparst würde und einen Syntaxfehler erzeugen würde, wenn die Klammern, die den Aufruf darstellen, erreicht werden — wenn die Funktion unbenannt ist, würde es sofort ein Syntaxfehler sein, wenn die Funktion als Deklaration geparst wird.

```js-nolint example-bad
function iife() {
  console.log("Ausgeführt!");
}(); // SyntaxError: Unerwartetes Token ')'

function () {
  console.log("Ausgeführt!");
}(); // SyntaxError: Funktionsanweisungen erfordern einen Funktionsnamen
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) geparst wird, muss das `function`-Schlüsselwort an einer Stelle erscheinen, die nur Ausdrücke akzeptiert, nicht Anweisungen. Dies kann erreicht werden, indem das Schlüsselwort mit einem [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) vorangestellt wird, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren, sodass er zuerst ausgeführt wird. Sein Rückgabewert (der fast immer `undefined` ist) wird dem unären Operator übergeben und dann sofort verworfen.

Unter allen unären Operatoren bietet `void` die beste Semantik, da es deutlich signalisiert, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Ausgeführt!");
}();

// Protokolliert "Ausgeführt!"
```

Das ist etwas länger als den Funktionsausdruck in Klammern zu setzen, was denselben Effekt hat, das `function`-Schlüsselwort als den Beginn eines Ausdrucks statt einer Anweisung zu erzwingen.

```js
(function () {
  console.log("Ausgeführt!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem `function`-Schlüsselwort definiert sind. Der Versuch, den `void`-Operator zu verwenden, um Klammern für einen Pfeilfunktionsausdruck zu vermeiden, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke erfordern immer Klammern um sie herum, wenn sie aufgerufen werden.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Fehlgebildete Pfeilfunktionsparameterliste
```

### JavaScript-URIs

Wenn ein Browser einer [`javascript:`-URI](/de/docs/Web/URI/Schemes/javascript) folgt, wertet er den Code in der URI aus
und ersetzt dann den Inhalt der Seite mit dem zurückgegebenen Wert, es sei denn, der zurückgegebene
Wert ist {{jsxref("undefined")}}. Der `void`-Operator kann verwendet werden, um
`undefined` zu returnieren. Zum Beispiel:

```html
<a href="javascript:void(0);">Klicken Sie hier, um nichts zu tun</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Klicken Sie hier für einen grünen Hintergrund
</a>
```

> **Note:** Das pseudo Protokoll `javascript:` wird gegenüber
> anderen Alternativen wie unaufdringlichen Ereignishandlern nicht empfohlen.

### Nicht-leckende Pfeilfunktionen

Pfeilfunktionen führen eine Kurzschreibweise ohne Klammern ein, die einen Ausdruck zurückgibt.
Dies kann ungewollte Nebeneffekte verursachen, wenn der Ausdruck ein Funktionsaufruf ist, bei dem der zurückgegebene Wert von `undefined` zu einem anderen Wert wechselt.

Zum Beispiel, wenn `doSomething()` im folgenden Code `false` zurückgibt, wird das Kontrollkästchen nicht mehr als markiert oder nicht markiert dargestellt, wenn das Kontrollkästchen geklickt wird (die Rückgabe von `false` aus dem Handler deaktiviert die Standardaktion).

```js example-bad
checkbox.onclick = () => doSomething();
```

Dies ist wahrscheinlich kein gewünschtes Verhalten!
Um sicherzugehen, dass der Rückgabewert einer Funktion nicht verwendet werden soll, kann er an den `void`-Operator übergeben werden, um sicherzustellen, dass (zum Beispiel) sich ändernde APIs nicht das Verhalten von Pfeilfunktionen ändern.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
