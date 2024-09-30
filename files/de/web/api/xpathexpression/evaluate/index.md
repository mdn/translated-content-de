---
title: "XPathExpression: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/XPathExpression/evaluate
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{APIRef("DOM XPath")}}

Die **`evaluate()`**-Methode der [`XPathExpression`](/de/docs/Web/API/XPathExpression)-Schnittstelle führt einen [XPath](/de/docs/Web/XPath)-Ausdruck auf dem angegebenen Knoten oder Dokument aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) zurück.

## Syntax

```js-nolint
evaluate(contextNode)
evaluate(contextNode, type)
evaluate(contextNode, type, result)
```

### Parameter

- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext repräsentiert, der zur Auswertung des Ausdrucks verwendet werden soll.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult) sein.
- `result` {{optional_inline}}
  - : Ermöglicht die Angabe eines Ergebnisobjekts, das wiederverwendet und von dieser Methode zurückgegeben werden kann. Wenn es als `null` angegeben wird oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks repräsentiert.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht legal ist, wird eine [`XPathException`](/de/docs/Web/API/XPathException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine [`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten nicht als XPath-Kontextknoten zulässig ist oder der Anforderungstyp vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

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
