---
title: "Document: Methode createExpression()"
short-title: createExpression()
slug: Web/API/Document/createExpression
l10n:
  sourceCommit: 3966c40a3917825e6e467f1592bc7f8d59458e74
---

{{APIRef("DOM")}}

Diese Methode kompiliert eine {{DOMxRef("XPathExpression")}}, die dann für (wiederholte) Auswertungen verwendet werden kann.

Sie müssen diese Methode auf dem gleichen Dokument aufrufen, auf dem Sie den Ausdruck ausführen.

## Syntax

```js-nolint
createExpression(xpathText, namespaceURLMapper)
```

### Parameter

- `xpathText`
  - : Ein String, der den zu kompilierenden XPath-Ausdruck darstellt.
- `namespaceURLMapper`
  - : Eine Funktion, die ein Namespace-Präfix auf eine Namespace-URL abbildet (oder null, wenn keine benötigt wird).

### Rückgabewert

{{DOMxRef("XPathExpression")}}

## Beispiele

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // gibt ein XPathResult-Objekt zurück
const nodeContext = document.querySelector("nav");
// Wiederverwendung der XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // gibt ein XPathResult-Objekt zurück
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
