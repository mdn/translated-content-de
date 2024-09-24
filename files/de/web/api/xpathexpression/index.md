---
title: XPathExpression
slug: Web/API/XPathExpression
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Diese Schnittstelle ist ein kompilierter XPath-Ausdruck, der auf einem Dokument oder einem bestimmten Knoten ausgewertet werden kann, um Informationen aus dessen {{Glossary("DOM")}}-Baum zu erhalten.

Dies ist nützlich, wenn ein Ausdruck in einer Anwendung wiederverwendet wird, da er nur einmal kompiliert wird und alle Namensraumpräfixe, die im Ausdruck vorkommen, vorab aufgelöst werden.

Objekte dieses Typs werden durch den Aufruf von {{domxref("XPathEvaluator.createExpression", "XPathEvaluator.createExpression()")}} erstellt.

## Instanzmethoden

- {{DOMxRef("XPathExpression.evaluate()")}}
  - : Bewertet den XPath-Ausdruck auf dem angegebenen Knoten oder Dokument.

## Beispiel

Das folgende Beispiel zeigt die Verwendung der `XPathExpression`-Schnittstelle.

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

{{EmbedLiveSample('Example', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("document.createExpression()")}}
- {{DOMxRef("XPathResult")}}
