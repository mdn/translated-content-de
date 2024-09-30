---
title: "XPathEvaluator: XPathEvaluator() Konstruktor"
short-title: XPathEvaluator()
slug: Web/API/XPathEvaluator/XPathEvaluator
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef('DOM XPath')}}

Der **`XPathEvaluator()`** Konstruktor erstellt einen neuen [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator).

## Syntax

```js-nolint
new XPathEvaluator()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) Objekt.

## Beispiele

### Anzahl der `<div>` Elemente zählen

Das folgende Beispiel zeigt die Verwendung des `XPathEvaluator` Schnittstelle.

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
