---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Der **`void`**-Operator wertet den angegebenen `expression` aus und gibt anschließend {{jsxref("undefined")}} zurück.

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

Dieser Operator ermöglicht es, einen Ausdruck, der einen Wert erzeugt, an einer Stelle auszuwerten, an der ein Ausdruck gewünscht ist, dessen Ergebnis {{jsxref("undefined")}} ist.

Der `void`-Operator wird häufig verwendet, um den primitiven Wert `undefined` zu erhalten, üblicherweise mit `void(0)` (gleichbedeutend mit `void 0`). In diesen Fällen kann auch die globale Variable {{jsxref("undefined")}} verwendet werden.

Beachten Sie die [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators. Klammern können verdeutlichen, wie der Ausdruck nach dem `void`-Operator ausgewertet wird:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofort aufgerufene Funktionsausdrücke

Bei einem {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdruck")}} darf das Schlüsselwort `function` nicht unmittelbar am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen. Andernfalls würde es als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) interpretiert, und beim Erreichen der Klammern für den Aufruf entstünde ein Syntaxfehler. Wenn die Funktion keinen Namen hat, führt bereits die Interpretation als Deklaration zu einem Syntaxfehler.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) interpretiert wird, muss das Schlüsselwort `function` an einer Stelle stehen, an der nur Ausdrücke, nicht aber Anweisungen zulässig sind. Dies lässt sich erreichen, indem Sie dem Schlüsselwort einen [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) voranstellen, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat in der [Operatorrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) Vorrang vor unären Operatoren und wird daher zuerst ausgeführt. Sein Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und anschließend sofort verworfen.

Unter den unären Operatoren bringt `void` die beabsichtigte Bedeutung am deutlichsten zum Ausdruck: Der Rückgabewert des Funktionsaufrufs soll verworfen werden.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Das ist etwas länger, als den Funktionsausdruck in Klammern zu setzen. Klammern bewirken ebenfalls, dass das Schlüsselwort `function` als Beginn eines Ausdrucks statt einer Anweisung interpretiert wird.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem Schlüsselwort `function` definiert sind. Der Versuch, bei einer Pfeilfunktion mithilfe des `void`-Operators auf Klammern zu verzichten, führt zu einem Syntaxfehler. Pfeilfunktionsausdrücke müssen beim Aufruf immer in Klammern stehen.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einem [`javascript:`-URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, wertet er den Code im URI aus. Ist der Rückgabewert eine Zeichenfolge, ersetzt er anschließend den Seiteninhalt durch diesen Wert. Mit dem `void`-Operator lässt sich stattdessen {{jsxref("undefined")}} zurückgeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> [!NOTE]
> Von der Verwendung des `javascript:`-Pseudoprotokolls wird zugunsten anderer Alternativen abgeraten, etwa unaufdringlicher Event-Handler.

### Pfeilfunktionen ohne unbeabsichtigten Rückgabewert

Pfeilfunktionen bieten eine Kurzschreibweise ohne geschweifte Klammern, bei der ein Ausdruck zurückgegeben wird. Dies kann unbeabsichtigte Auswirkungen haben, wenn der Ausdruck ein Funktionsaufruf ist, dessen Rückgabewert sich von `undefined` zu einem anderen Wert ändert.

Wenn `doSomething()` im folgenden Code beispielsweise `false` zurückgibt, wird das Kontrollkästchen beim Anklicken nicht mehr aktiviert oder deaktiviert. Der Rückgabewert `false` des Handlers unterbindet die Standardaktion.

```js example-bad
checkbox.onclick = () => doSomething();
```

Dieses Verhalten ist wahrscheinlich nicht beabsichtigt! Wenn der Rückgabewert einer Funktion nicht verwendet werden soll, können Sie den Funktionsaufruf an den `void`-Operator übergeben. So stellen Sie sicher, dass beispielsweise Änderungen an APIs das Verhalten von Pfeilfunktionen nicht verändern.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
