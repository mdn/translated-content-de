---
title: XPathEvaluator
slug: Web/API/XPathEvaluator
l10n:
  sourceCommit: 07dc324530b8b08cef7e5bb7b87612a0eb0d8a8c
---

{{APIRef("DOM XPath")}}

Das `XPathEvaluator`-Interface ermöglicht das Kompilieren und Auswerten von {{Glossary("XPath")}}-Ausdrücken.

## Konstruktor

- {{domxref("XPathEvaluator.XPathEvaluator", "XPathEvaluator()")}}
  - : Erstellt ein neues `XPathEvaluator`-Objekt.

## Instanzmethoden

- {{DOMxRef("XPathEvaluator.createExpression()")}}
  - : Erstellt einen geparsten XPath-Ausdruck mit aufgelösten Namespaces.
- {{DOMxRef("XPathEvaluator.createNSResolver()")}} {{deprecated_inline}}
  - : Gibt die Eingabe unverändert zurück.
- {{DOMxRef("XPathEvaluator.evaluate()")}}
  - : Wertet einen XPath-Ausdrucksstring aus und gibt, wenn möglich, ein Ergebnis des angegebenen Typs zurück.

## Beispiel

### Die Anzahl der `<div>`-Elemente zählen

Das folgende Beispiel zeigt die Verwendung des `XPathEvaluator`-Interfaces.

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

{{EmbedLiveSample("count_the_number_of_div_elements", "100%", "40")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.createExpression()")}}
- {{domxref("XPathExpression")}}
