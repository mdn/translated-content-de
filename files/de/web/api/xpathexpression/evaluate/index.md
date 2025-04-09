---
title: "XPathExpression: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathExpression/evaluate
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}}

Die **`evaluate()`** Methode der [`XPathExpression`](/de/docs/Web/API/XPathExpression) Schnittstelle führt einen [XPath](/de/docs/Web/XML/XPath) Ausdruck auf dem angegebenen Knoten oder Dokument aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) zurück.

## Syntax

```js-nolint
evaluate(contextNode)
evaluate(contextNode, type)
evaluate(contextNode, type, result)
```

### Parameter

- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext repräsentiert, der zum Auswerten des Ausdrucks verwendet wird.
- `type` {{optional_inline}}
  - : Bestimmt den Typ des Ergebnisses, das bei der Auswertung des Ausdrucks zurückgegeben wird. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult#Constants) sein.
- `result` {{optional_inline}}
  - : Erlaubt das Angeben eines Ergebnisobjekts, das wiederverwendet und von dieser Methode zurückgegeben werden kann. Wenn dies als `null` angegeben ist oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult) Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks repräsentiert.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht zulässig ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namensraum-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten kein zulässiger XPath-Kontextknotentyp ist oder der Anforderungstyp nicht vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) erlaubt ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `evaluate()` Methode.

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
