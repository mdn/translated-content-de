---
title: XPathExpression
slug: Web/API/XPathExpression
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

Diese Schnittstelle ist ein kompilierter XPath-Ausdruck, der auf einem Dokument oder einem bestimmten Knoten ausgewertet werden kann, um Informationen von seinem [DOM](/de/docs/Glossary/DOM)-Baum zurückzugeben.

Dies ist nützlich, wenn ein Ausdruck in einer Anwendung wiederverwendet wird, da er nur einmal kompiliert wird und alle Namensraum-Präfixe, die im Ausdruck vorkommen, vorab aufgelöst werden.

Objekte dieses Typs werden durch Aufruf von [`XPathEvaluator.createExpression()`](/de/docs/Web/API/XPathEvaluator/createExpression) erstellt.

## Instanzmethoden

- [`XPathExpression.evaluate()`](/de/docs/Web/API/XPathExpression/evaluate)
  - : Bewertet den XPath-Ausdruck auf dem gegebenen Knoten oder Dokument.

## Beispiel

Das folgende Beispiel zeigt die Verwendung der `XPathExpression`-Schnittstelle.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
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

- [`document.createExpression()`](/de/docs/Web/API/Document/createExpression)
- [`XPathResult`](/de/docs/Web/API/XPathResult)
