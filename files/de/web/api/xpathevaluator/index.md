---
title: XPathEvaluator
slug: Web/API/XPathEvaluator
l10n:
  sourceCommit: 07dc324530b8b08cef7e5bb7b87612a0eb0d8a8c
---

{{APIRef("DOM XPath")}}

Das `XPathEvaluator`-Interface ermöglicht das Kompilieren und Auswerten von [XPath](/de/docs/Glossary/XPath)-Ausdrücken.

## Konstruktor

- [`XPathEvaluator()`](/de/docs/Web/API/XPathEvaluator/XPathEvaluator)
  - : Erstellt ein neues `XPathEvaluator`-Objekt.

## Instanzmethoden

- [`XPathEvaluator.createExpression()`](/de/docs/Web/API/XPathEvaluator/createExpression)
  - : Erstellt einen geparsten XPath-Ausdruck mit aufgelösten Namensräumen.
- [`XPathEvaluator.createNSResolver()`](/de/docs/Web/API/XPathEvaluator/createNSResolver) {{deprecated_inline}}
  - : Gibt die Eingabe unverändert zurück.
- [`XPathEvaluator.evaluate()`](/de/docs/Web/API/XPathEvaluator/evaluate)
  - : Wertet eine XPath-Ausdruckszeichenkette aus und gibt, wenn möglich, ein Ergebnis des angegebenen Typs zurück.

## Beispiel

### Zählen Sie die Anzahl der `<div>`-Elemente

Das folgende Beispiel zeigt die Verwendung des `XPathEvaluator`-Interfaces.

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

{{EmbedLiveSample("count_the_number_of_div_elements", "100%", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.createExpression()`](/de/docs/Web/API/Document/createExpression)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
