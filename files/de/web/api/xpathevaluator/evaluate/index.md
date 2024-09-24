---
title: "XPathEvaluator: evaluate() Methode"
short-title: evaluate()
slug: Web/API/XPathEvaluator/evaluate
l10n:
  sourceCommit: effba4cf556afc92d421bf399bbf4b83e3a27104
---

{{APIRef("DOM XPath")}}

Die `evaluate()`-Methode der {{domxref("XPathEvaluator")}}-Schnittstelle
führt einen XPath-Ausdruck auf dem angegebenen Knoten oder Dokument aus und gibt ein
{{domxref("XPathResult")}} zurück.

## Syntax

```js-nolint
evaluate(expression, contextNode)
evaluate(expression, contextNode, resolver)
evaluate(expression, contextNode, resolver, type)
evaluate(expression, contextNode, resolver, type, result)
```

### Parameter

- `expression`
  - : Ein String, der den zu analysierenden und auszuwertenden XPath-Ausdruck darstellt.
- `contextNode`
  - : Ein {{domxref("Node")}}, der den Kontext darstellt, der zur Auswertung des Ausdrucks verwendet wird.
- `resolver` {{optional_inline}}
  - : Ein {{domxref("Node")}}, `null` oder ein beliebiges Objekt, das die Methode {{domxref("Node/lookupNamespaceURI", "lookupNamespaceURI")}} implementiert. Ermöglicht die Übersetzung aller Präfixe, einschließlich des `xml`-Namespace-Präfixes, innerhalb des XPath-Ausdrucks in entsprechende Namespace-URIs.
- `type` {{optional_inline}}
  - : Gibt den Typ des Ergebnisses an, das durch die Auswertung des Ausdrucks zurückgegeben werden soll. Dies muss eine der {{domxref("XPathResult", "XPathResult", "Konstanten")}} sein.
- `result` {{optional_inline}}
  - : Ermöglicht die Angabe eines Ergebnisobjekts, das möglicherweise wiederverwendet und von dieser Methode zurückgegeben wird. Wenn dies als `null` angegeben wird oder die Implementierung nicht das angegebene Ergebnis wiederverwendet, wird ein neues Ergebnisobjekt zurückgegeben.

### Rückgabewert

Ein {{domxref("XPathResult")}}-Objekt, das das Ergebnis der Auswertung des XPath-Ausdrucks darstellt.

### Ausnahmen

#### INVALID_EXPRESSION_ERR

Wenn der Ausdruck nicht legal gemäß den Regeln des {{domxref("XPathEvaluator")}} ist, wird eine {{domxref("XPathException")}} vom Typ `INVALID_EXPRESSION_ERR` ausgelöst.

#### TYPE_ERR

Falls das Ergebnis nicht in den angegebenen Typ konvertiert werden kann, wird eine {{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

#### NAMESPACE_ERR

Wenn der Ausdruck Namespace-Präfixe enthält, die nicht vom angegebenen `XPathNSResolver` aufgelöst werden können, wird eine {{domxref("DOMException")}} vom Typ `NAMESPACE_ERROR` ausgelöst.

#### WRONG_DOCUMENT_ERR

Wenn der bereitgestellte Kontextknoten aus einem Dokument stammt, das vom {{domxref("XPathEvaluator")}} nicht unterstützt wird, wird eine {{domxref("DOMException")}} vom Typ `WRONG_DOCUMENT_ERR` ausgelöst.

#### NOT_SUPPORTED_ERR

Wenn der bereitgestellte Kontextknoten nicht als XPath-Kontextknoten zugelassen ist oder der angeforderte Typ nicht vom {{domxref("XPathEvaluator")}} zugelassen ist, wird eine {{domxref("DOMException")}} vom Typ `NOT_SUPPORTED_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `evaluate()`-Methode.

### HTML

```html
<div>XPath-Beispiel</div>
<div>Anzahl der &lt;div&gt;s: <output></output></div>
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
