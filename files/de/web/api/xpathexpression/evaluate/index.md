---
title: "XPathExpression: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathExpression/evaluate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die **`evaluate()`** Methode der
[`XPathExpression`](/de/docs/Web/API/XPathExpression)-Schnittstelle führt einen [XPath](/de/docs/Web/XML/XPath)-Ausdruck auf dem gegebenen Knoten oder Dokument aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) zurück.

## Syntax

```js-nolint
evaluate(contextNode)
evaluate(contextNode, type)
evaluate(contextNode, type, result)
```

### Parameter

- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext zum Auswerten des Ausdrucks darstellt.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult#Constants) sein.
- `result` {{optional_inline}}
  - : Ermöglicht das Angeben eines Ergebnisobjekts, das wiederverwendet und von dieser Methode zurückgegeben werden kann. Wenn dies als `null` angegeben wird oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck nicht gemäß den Regeln des
[`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) legal ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten kein erlaubter Typ als XPath-Kontextknoten ist oder der Anfragetyp vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `evaluate()`-Methode.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const evaluator = new XPathEvaluator();
const expression = evaluator.createExpression("//div");
const result = expression.evaluate(
  document,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
);
document.querySelector("output").textContent = result.snapshotLength;
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
