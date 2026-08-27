---
title: "XPathExpression: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathExpression/evaluate
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("DOM")}}

Die **`evaluate()`**-Methode der [`XPathExpression`](/de/docs/Web/API/XPathExpression)-Schnittstelle führt einen [XPath](/de/docs/Web/XML/XPath)-Ausdruck auf dem angegebenen Knoten oder Dokument aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) zurück.

## Syntax

```js-nolint
evaluate(contextNode)
evaluate(contextNode, type)
evaluate(contextNode, type, result)
```

### Parameter

- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext darstellt, der zur Auswertung des Ausdrucks verwendet wird.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult#Constants) sein.
- `result` {{optional_inline}}
  - : Ermöglicht es Ihnen, ein Ergebnisobjekt zu spezifizieren, das möglicherweise wiederverwendet und von dieser Methode zurückgegeben wird. Wenn dies als `null` angegeben ist oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck nicht legal nach den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namensraum-Präfixe enthält, die nicht vom angegebenen `XPathNSResolver` aufgelöst werden können, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten von einem Dokument stammt, das vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten nicht ein zulässiger Typ als XPath-Kontextknoten ist oder der Anforderungstyp vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht zugelassen ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

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
