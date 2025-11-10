---
title: "XPathResult: iterateNext()-Methode"
short-title: iterateNext()
slug: Web/API/XPathResult/iterateNext
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die **`iterateNext()`**-Methode des [`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces iteriert über ein Knotensatz-Ergebnis und gibt den nächsten Knoten daraus zurück oder `null`, wenn keine weiteren Knoten vorhanden sind.

## Syntax

```js-nolint
iterateNext()
```

### Parameter

Keine.

### Rückgabewert

Der nächste [`Node`](/de/docs/Web/API/Node) innerhalb des Knotensatzes des `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Wenn [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `UNORDERED_NODE_ITERATOR_TYPE` oder `ORDERED_NODE_ITERATOR_TYPE` ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

#### INVALID_STATE_ERR

Wenn das Dokument seit der Rückgabe des Ergebnisses verändert wurde, wird ein [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `INVALID_STATE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `iterateNext()`-Methode.

### HTML

```html
<div>XPath example</div>
<div>Tag names of the matched nodes: <output></output></div>
```

### JavaScript

```js
const xpath = "//div";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
let node = null;
const tagNames = [];
while ((node = result.iterateNext())) {
  tagNames.push(node.localName);
}
document.querySelector("output").textContent = tagNames.join(", ");
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
