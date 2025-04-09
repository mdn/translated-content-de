---
title: "XPathEvaluator: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathEvaluator/evaluate
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}}

Die `evaluate()`-Methode des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)-Interfaces
führt einen XPath-Ausdruck auf dem angegebenen Knoten oder Dokument aus und liefert ein
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
  - : Ein String, der den zu analysierenden und auszuwertenden XPath-Ausdruck repräsentiert.
- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext darstellt, der zur Auswertung des Ausdrucks verwendet wird.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null`, oder ein Objekt, das die Methode [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) implementiert. Ermöglicht die Übersetzung aller Präfixe, einschließlich des `xml`-Namespace-Präfixes, innerhalb des XPath-Ausdrucks in geeignete Namespace-URIs.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult#Constants) sein.
- `result` {{optional_inline}}
  - : Ermöglicht es, ein Ergebnisobjekt anzugeben, das wiederverwendet und von dieser Methode zurückgegeben werden kann. Wenn dies als `null` angegeben ist oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks repräsentiert.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) ungültig ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen `XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten nicht als XPath-Kontextknoten zulässig ist oder der Anforderungstyp nicht vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

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
