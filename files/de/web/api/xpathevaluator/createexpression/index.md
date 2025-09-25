---
title: "XPathEvaluator: createExpression() Methode"
short-title: createExpression()
slug: Web/API/XPathEvaluator/createExpression
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Diese Methode kompiliert ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), das dann für (wiederholte) Auswertungen des {{Glossary("XPath", "XPath")}}-Ausdrucks verwendet werden kann.

## Syntax

```js-nolint
createExpression(expression)
createExpression(expression, resolver)
```

### Parameter

- `expression`
  - : Ein String, der den zu erstellenden XPath-Ausdruck darstellt.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null` oder jedes Objekt, das die [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode implementiert. Erlaubt die Übersetzung aller Präfixe, einschließlich des `xml`-Namensraumpräfixes, innerhalb des XPath-Ausdrucks in entsprechende Namensraum-URIs.

### Rückgabewert

Ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), das die kompilierte Form des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck nicht den Regeln des `XPathEvaluator` entspricht, wird eine [`DOMException`](/de/docs/Web/API/DOMException) des Typs
`INVALID_EXPRESSION_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namensraumpräfixe enthält, die durch den spezifizierten
`XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) des Typs
`NAMESPACE_ERROR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `evaluate()`-Methode.

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

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
- [`XPathExpression`](/de/docs/Web/API/XPathExpression)
