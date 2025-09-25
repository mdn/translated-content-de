---
title: "XPathEvaluator: XPathEvaluator() Konstruktor"
short-title: XPathEvaluator()
slug: Web/API/XPathEvaluator/XPathEvaluator
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Der **`XPathEvaluator()`** Konstruktor erstellt einen neuen [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator).

## Syntax

```js-nolint
new XPathEvaluator()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)-Objekt.

## Beispiele

### Anzahl der `<div>` Elemente zählen

Das folgende Beispiel zeigt die Verwendung der `XPathEvaluator` Schnittstelle.

#### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt; elements: <output></output></div>
```

#### JavaScript

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

#### Ergebnis

{{EmbedLiveSample("count_the_number_of_div_elements", "100%", "50")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
