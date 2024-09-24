---
title: "XPathExpression: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathExpression/evaluate
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{APIRef("DOM XPath")}}

Die **`evaluate()`**-Methode des
{{domxref("XPathExpression")}}-Interfaces führt einen [XPath](/de/docs/Web/XPath)-Ausdruck auf dem angegebenen Knoten oder Dokument aus und
gibt ein {{domxref("XPathResult")}} zurück.

## Syntax

```js-nolint
evaluate(contextNode)
evaluate(contextNode, type)
evaluate(contextNode, type, result)
```

### Parameter

- `contextNode`
  - : Ein {{domxref("Node")}}, der den Kontext darstellt, der zur Auswertung des Ausdrucks verwendet wird.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss
    einer der {{domxref("XPathResult", "XPathResult", "Constants")}} sein.
- `result` {{optional_inline}}
  - : Ermöglicht es, ein Ergebnisobjekt anzugeben, das von dieser Methode wiederverwendet und zurückgegeben werden kann.
    Wenn dies als `null` angegeben wird oder die Implementierung das
    angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein {{domxref("XPathResult")}}-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des
{{domxref("XPathEvaluator")}} unzulässig ist, wird eine {{domxref("XPathException")}} vom Typ
`INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine
{{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Falls der Ausdruck Namespace-Präfixe enthält, die vom angegebenen
`XPathNSResolver` nicht aufgelöst werden können, wird eine {{domxref("DOMException")}} vom Typ
`NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Falls der bereitgestellte Kontextknoten von einem Dokument stammt, das nicht vom
{{domxref("XPathEvaluator")}} unterstützt wird, wird eine {{domxref("DOMException")}} vom Typ
`WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Falls der bereitgestellte Kontextknoten nicht als XPath-Kontextknoten zugelassen ist oder der
angeforderte Typ nicht vom {{domxref("XPathEvaluator")}} zugelassen ist, wird eine
{{domxref("DOMException")}} vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `evaluate()`-Methode.

### HTML

```html
<div>XPath-Beispiel</div>
<div>Anzahl der &lt;div&gt;s: <output></output></div>
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
