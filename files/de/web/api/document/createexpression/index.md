---
title: "Document: createExpression()-Methode"
short-title: createExpression()
slug: Web/API/Document/createExpression
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}

Diese Methode kompiliert ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), das dann für (wiederholte) Auswertungen verwendet werden kann.

Sie müssen diese Methode auf demselben Dokument aufrufen, auf das Sie den Ausdruck anwenden möchten.

## Syntax

```js-nolint
createExpression(xpathText, namespaceURLMapper)
```

### Parameter

- `xpathText`
  - : Ein String, der den zu kompilierenden XPath-Ausdruck darstellt.
- `namespaceURLMapper`
  - : Eine Funktion, die ein Namensraum-Präfix einer Namensraum-URL zuordnet (oder null, wenn keine benötigt wird).

### Rückgabewert

[`XPathExpression`](/de/docs/Web/API/XPathExpression)

## Beispiele

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // returns an XPathResult object
const nodeContext = document.querySelector("nav");
// Re-using the XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // returns an XPathResult object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
