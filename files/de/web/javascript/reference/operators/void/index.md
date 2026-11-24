---
title: void-Operator
slug: Web/JavaScript/Reference/Operators/void
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der **`void`**-Operator wertet den angegebenen Ausdruck `expression` aus und gibt anschließend {{jsxref("undefined")}} zurück.

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

### Parameter

- `expression`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 14 (Präfixoperatoren).

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

Mit diesem Operator lassen sich Ausdrücke, die einen Wert erzeugen, an Stellen auswerten, an denen ein Ausdruck benötigt wird, der {{jsxref("undefined")}} ergibt.

Der `void`-Operator wird häufig lediglich verwendet, um den primitiven Wert `undefined` zu erhalten, üblicherweise mit `void(0)` (gleichbedeutend mit `void 0`). In diesen Fällen kann auch die globale Variable {{jsxref("undefined")}} verwendet werden.

Beachten Sie die [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) des `void`-Operators. Klammern können verdeutlichen, wie der Ausdruck nach dem `void`-Operator ausgewertet wird:

```js
void 2 === "2"; // (void 2) === '2', returns false
void (2 === "2"); // void (2 === '2'), returns undefined
```

## Beispiele

### Sofort aufgerufene Funktionsausdrücke

Bei einem {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdruck")}} darf das Schlüsselwort `function` nicht direkt am Anfang der [Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) stehen. Andernfalls würde der Code als [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function) interpretiert, und beim Erreichen der Klammern für den Aufruf entstünde ein Syntaxfehler. Wenn die Funktion keinen Namen hat, führt bereits die Interpretation als Deklaration zu einem Syntaxfehler.

```js-nolint example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

Damit die Funktion als [Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function) interpretiert wird, muss das Schlüsselwort `function` an einer Stelle stehen, an der nur Ausdrücke und keine Anweisungen zulässig sind. Das lässt sich erreichen, indem Sie dem Schlüsselwort einen [unären Operator](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#unary_operators) voranstellen, der nur Ausdrücke als Operanden akzeptiert. Der Funktionsaufruf hat eine höhere [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) als unäre Operatoren und wird daher zuerst ausgeführt. Sein Rückgabewert (der fast immer `undefined` ist) wird an den unären Operator übergeben und anschließend sofort verworfen.

Unter den unären Operatoren eignet sich `void` semantisch am besten, da es deutlich macht, dass der Rückgabewert des Funktionsaufrufs verworfen werden soll.

```js-nolint
void function () {
  console.log("Executed!");
}();

// Logs "Executed!"
```

Dies ist etwas länger, als den Funktionsausdruck in Klammern zu setzen. Klammern bewirken ebenfalls, dass das Schlüsselwort `function` als Beginn eines Ausdrucks und nicht einer Anweisung interpretiert wird.

```js
(function () {
  console.log("Executed!");
})();
```

Beachten Sie, dass dieser Trick nur für IIFEs gilt, die mit dem Schlüsselwort `function` definiert wurden. Wenn Sie versuchen, mit dem `void`-Operator die Klammern bei einer Arrow Function zu vermeiden, entsteht ein Syntaxfehler. Arrow-Function-Ausdrücke müssen beim Aufruf immer in Klammern stehen.

```js example-bad
void () => { console.log("iife!"); }(); // SyntaxError: Malformed arrow function parameter list
```

### JavaScript-URIs

Wenn ein Browser einer [`javascript:`-URI](/de/docs/Web/URI/Reference/Schemes/javascript) folgt, wertet er den Code in der URI aus. Ist der Rückgabewert ein String, ersetzt er anschließend den Seiteninhalt durch diesen Wert. Mit dem `void`-Operator lässt sich {{jsxref("undefined")}} zurückgeben. Zum Beispiel:

```html
<a href="javascript:void(0);">Click here to do nothing</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Click here for green background
</a>
```

> [!NOTE]
> Vom Pseudoprotokoll `javascript:` wird zugunsten anderer Alternativen, etwa unaufdringlicher Event-Handler, abgeraten.

### Arrow Functions ohne unbeabsichtigte Rückgabewerte

Arrow Functions bieten eine Kurzschreibweise ohne geschweifte Klammern, bei der ein Ausdruck zurückgegeben wird. Das kann unbeabsichtigte Nebenwirkungen haben, wenn der Ausdruck ein Funktionsaufruf ist und sich dessen Rückgabewert von `undefined` zu einem anderen Wert ändert.

Wenn beispielsweise `doSomething()` im folgenden Code `false` zurückgibt, ändert sich der Markierungszustand der Checkbox beim Anklicken nicht mehr: Gibt der Handler `false` zurück, wird die Standardaktion unterbunden.

```js example-bad
checkbox.onclick = () => doSomething();
```

Dieses Verhalten ist wahrscheinlich nicht erwünscht! Wenn der Rückgabewert einer Funktion nicht verwendet werden soll, können Sie den Funktionsaufruf vorsichtshalber an den `void`-Operator übergeben. So stellen Sie sicher, dass beispielsweise Änderungen an APIs das Verhalten von Arrow Functions nicht verändern.

```js example-good
checkbox.onclick = () => void doSomething();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("undefined")}}
