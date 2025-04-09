---
title: "XPathEvaluator: createExpression() Methode"
short-title: createExpression()
slug: Web/API/XPathEvaluator/createExpression
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}}

Diese Methode kompiliert einen [`XPathExpression`](/de/docs/Web/API/XPathExpression), der dann für (wiederholte) Auswertungen des {{Glossary("XPath", "XPath")}}-Ausdrucks verwendet werden kann.

## Syntax

```js-nolint
createExpression(expression)
createExpression(expression, resolver)
```

### Parameter

- `expression`
  - : Ein String, der den zu erstellenden XPath-Ausdruck darstellt.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null` oder ein beliebiges Objekt, das die Methode [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) implementiert. Erlaubt die Übersetzung aller Präfixe, einschließlich des Präfixes für den `xml`-Namensraum, im XPath-Ausdruck in geeignete Namensraum-URIs.

### Rückgabewert

Ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), der die kompilierte Form des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des `XPathEvaluator` nicht zulässig ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namensraumpräfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

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
