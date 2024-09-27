---
title: "XPathEvaluator: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathEvaluator/evaluate
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{APIRef("DOM XPath")}}

Die Methode `evaluate()` der Schnittstelle [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)
führt einen XPath-Ausdruck auf dem angegebenen Knoten oder Dokument aus und gibt ein [`XPathResult`](/de/docs/Web/API/XPathResult) zurück.

## Syntax

```js-nolint
evaluate(expression, contextNode)
evaluate(expression, contextNode, resolver)
evaluate(expression, contextNode, resolver, type)
evaluate(expression, contextNode, resolver, type, result)
```

### Parameter

- `expression`
  - : Ein String, der den zu parsenden und zu evaluierenden XPath-Ausdruck darstellt.
- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext darstellt, der für die Auswertung des Ausdrucks verwendet wird.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null`, oder ein beliebiges Objekt, das die Methode [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) implementiert. Erlaubt die Übersetzung aller Präfixe, einschließlich des `xml` Namensraum-Präfixes, innerhalb des XPath-Ausdrucks in geeignete Namensraum-URIs.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben wird. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult) sein.
- `result` {{optional_inline}}
  - : Ermöglicht es, ein Ergebnisobjekt anzugeben, das von dieser Methode wiederverwendet und zurückgegeben werden kann. Wenn dieses als `null` angegeben ist oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult) Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck nicht legal gemäß den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) ist, wird eine [`XPathException`](/de/docs/Web/API/XPathException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine [`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namensraum-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten von einem Dokument stammt, das nicht vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten kein als XPath-Kontextknoten erlaubter Typ ist oder der angeforderte Typ nicht vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der Methode `evaluate()`.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const evaluator = new XPathEvaluator();
const result = evaluator.evaluate(
  "//div",
  document,
  null,
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
