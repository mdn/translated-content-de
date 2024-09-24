---
title: "XPathEvaluator: createExpression()-Methode"
short-title: createExpression()
slug: Web/API/XPathEvaluator/createExpression
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{APIRef("DOM XPath")}}

Diese Methode kompiliert ein {{domxref("XPathExpression")}}, das dann zur (wiederholten) Bewertung des {{Glossary("XPath")}}-Ausdrucks verwendet werden kann.

## Syntax

```js-nolint
createExpression(expression)
createExpression(expression, resolver)
```

### Parameter

- `expression`
  - : Ein String, der den zu erstellenden XPath-Ausdruck darstellt.
- `resolver` {{optional_inline}}
  - : Ein {{domxref("Node")}}, `null`, oder ein beliebiges Objekt, das die {{domxref("Node/lookupNamespaceURI", "lookupNamespaceURI")}}-Methode implementiert. Ermöglicht die Übersetzung aller Präfixe, einschließlich des `xml`-Namespace-Präfixes, innerhalb des XPath-Ausdrucks in entsprechende Namespace-URIs.

### Rückgabewert

Ein {{domxref("XPathExpression")}}, das die kompilierte Form des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des `XPathEvaluator` nicht legal ist, wird eine {{domxref("XPathException")}} vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird eine {{domxref("DOMException")}} vom Typ `NAMESPACE_ERROR` ausgelöst.

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
const expression = evaluator.createExpression(xpath);
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

## Siehe auch

- {{DOMxRef("Document.createExpression()")}}
- {{DOMxRef("XPathExpression")}}
