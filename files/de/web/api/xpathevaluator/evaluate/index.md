---
title: "XPathEvaluator: evaluate()-Methode"
short-title: evaluate()
slug: Web/API/XPathEvaluator/evaluate
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{APIRef("DOM XPath")}}

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
  - : Ein String, der den XPath-Ausdruck darstellt, der geparst und ausgewertet werden soll.
- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext für die Auswertung des Ausdrucks darstellt.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null` oder ein beliebiges Objekt, das die [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI)-Methode implementiert. Ermöglicht die Übersetzung aller Präfixe, einschließlich des `xml`-Namespace-Präfixes, innerhalb des XPath-Ausdrucks in entsprechende Namespace-URIs.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult) sein.
- `result` {{optional_inline}}
  - : Ermöglicht die Angabe eines Ergebnisobjekts, das möglicherweise wiederverwendet und von dieser Methode zurückgegeben wird. Wenn dies als `null` angegeben wird oder die Implementierung das angegebene Ergebnis nicht wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck gemäß den Regeln des
[`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht legal ist, wird eine [`XPathException`](/de/docs/Web/API/XPathException) des Typs
`INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine
[`XPathException`](/de/docs/Web/API/XPathException) des Typs `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen
`XPathNSResolver` nicht aufgelöst werden können, wird eine [`DOMException`](/de/docs/Web/API/DOMException) des Typs
`NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten von einem Dokument stammt, das vom
[`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine [`DOMException`](/de/docs/Web/API/DOMException) des Typs
`WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten kein zulässiger Typ als XPath-Kontextknoten ist oder der Anforderungstyp vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) des Typs `NOT_SUPPORTED_ERR` ausgelöst.

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
