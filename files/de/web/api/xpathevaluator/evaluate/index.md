---
title: "XPathEvaluator: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathEvaluator/evaluate
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("DOM")}}

Die `evaluate()`-Methode der [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)-Schnittstelle
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
  - : Ein Zeichenkettenwert, der den XPath-Ausdruck darstellt, der geparst und
    ausgewertet werden soll.
- `contextNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den Kontext darstellt, der zur Auswertung des Ausdrucks verwendet wird.
- `resolver` {{optional_inline}}
  - : Ein [`Node`](/de/docs/Web/API/Node), `null` oder jedes Objekt, das die Methode [`lookupNamespaceURI`](/de/docs/Web/API/Node/lookupNamespaceURI) implementiert. Ermöglicht die Übersetzung aller Präfixe, einschließlich des Präfixes `xml`, innerhalb des XPath-Ausdrucks in entsprechende Namespace-URIs.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss
    einer der [`XPathResult.Constants`](/de/docs/Web/API/XPathResult#Constants) sein.
- `result` {{optional_inline}}
  - : Ermöglicht es, ein Ergebnisobjekt anzugeben, das möglicherweise wiederverwendet und von dieser Methode zurückgegeben wird.
    Wird dieses als `null` angegeben oder wiederverwendet die Implementierung das angegebene Ergebnis nicht,
    wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein [`XPathResult`](/de/docs/Web/API/XPathResult)-Objekt, das das Ergebnis der Auswertung des XPath-
Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck nicht den Regeln des [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) entspricht, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ
`INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird ein
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die vom angegebenen
`XPathNSResolver` nicht aufgelöst werden können, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ
`NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom
[`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ
`WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten kein erlaubter Typ für einen XPath-Kontextknoten ist oder der
angeforderte Typ vom [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) nicht unterstützt wird, wird ein
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

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
