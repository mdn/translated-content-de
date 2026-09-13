---
title: XPathEvaluator
slug: Web/API/XPathEvaluator
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("DOM")}}

Das `XPathEvaluator` Interface ermöglicht es Ihnen, {{Glossary("XPath", "XPath")}}-Ausdrücke zu kompilieren und auszuwerten.

## Konstruktor

- [`XPathEvaluator()`](/de/docs/Web/API/XPathEvaluator/XPathEvaluator)
  - : Erstellt ein neues `XPathEvaluator`-Objekt.

## Instanzmethoden

- [`XPathEvaluator.createExpression()`](/de/docs/Web/API/XPathEvaluator/createExpression)
  - : Erstellt einen geparsten XPath-Ausdruck mit aufgelösten Namespaces.
- [`XPathEvaluator.createNSResolver()`](/de/docs/Web/API/XPathEvaluator/createNSResolver) {{deprecated_inline}}
  - : Gibt die Eingabe unverändert zurück.
- [`XPathEvaluator.evaluate()`](/de/docs/Web/API/XPathEvaluator/evaluate)
  - : Wertet einen XPath-Ausdrucks-String aus und gibt ein Ergebnis des angegebenen Typs zurück, wenn möglich.

## Beispiel

### Zählen der Anzahl von `<div>`-Elementen

Das folgende Beispiel zeigt die Verwendung des `XPathEvaluator` Interfaces.

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
