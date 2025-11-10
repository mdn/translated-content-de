---
title: "XPathEvaluator: Methode evaluate()"
short-title: evaluate()
slug: Web/API/XPathEvaluator/evaluate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die `evaluate()`-Methode des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)-Interfaces
führt einen XPath-Ausdruck auf dem angegebenen Knoten oder Dokument aus und gibt ein
[`XPathResult`](/de/docs/Web/API/XPathResult) zurück.

## Syntax

```js-nolint
evaluate(expression, contextNode)
evaluate(expression, contextNode, resolver)
evaluate(expression, contextNode, resolver, type)
evaluate(expression, contextNode, resolver, type, result)
```

### Parameter

- `expression`
  - : Ein String, der den zu parsenden und
    zu evaluierenden XPath-Ausdruck darstellt.
- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext zur Auswertung des Ausdrucks darstellt.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null` oder jedes Objekt, das die Methode [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) implementiert. Erlaubt die Übersetzung aller Präfixe, einschließlich des `xml`-Namespace-Präfixes, in geeignete Namespace-URIs innerhalb des XPath-Ausdrucks.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Evaluierung des Ausdrucks zurückgegeben wird. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult#Constants) sein.
- `result` {{optional_inline}}
  - : Ermöglicht die Angabe eines Ergebnisobjekts, das möglicherweise von dieser Methode wiederverwendet und zurückgegeben wird. Wenn dies als `null` angegeben ist oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Evaluierung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht legal ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten ein nicht als XPath-Kontextknoten erlaubter Typ ist oder der Anforderungstyp vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht erlaubt ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `evaluate()`-Methode.

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
