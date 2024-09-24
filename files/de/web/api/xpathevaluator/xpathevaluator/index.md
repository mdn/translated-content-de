---
title: "XPathEvaluator: XPathEvaluator()-Konstruktor"
short-title: XPathEvaluator()
slug: Web/API/XPathEvaluator/XPathEvaluator
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef('DOM XPath')}}

Der **`XPathEvaluator()`**-Konstruktor erstellt einen neuen {{domxref("XPathEvaluator")}}.

## Syntax

```js-nolint
new XPathEvaluator()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{domxref("XPathEvaluator")}}-Objekt.

## Beispiele

### Zählen der Anzahl der `<div>`-Elemente

Das folgende Beispiel zeigt die Nutzung der `XPathEvaluator`-Schnittstelle.

#### HTML

```html
<div>XPath-Beispiel</div>
<div>Anzahl der &lt;div&gt;-Elemente: <output></output></div>
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
