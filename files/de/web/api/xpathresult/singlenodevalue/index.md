---
title: "XPathResult: singleNodeValue-Eigenschaft"
short-title: singleNodeValue
slug: Web/API/XPathResult/singleNodeValue
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Die schreibgeschützte **`singleNodeValue`**-Eigenschaft der
[`XPathResult`](/de/docs/Web/API/XPathResult)-Schnittstelle gibt einen [`Node`](/de/docs/Web/API/Node)-Wert zurück oder
`null`, falls kein Knoten eines Ergebnisses mit
[`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `ANY_UNORDERED_NODE_TYPE` oder
`FIRST_ORDERED_NODE_TYPE` übereinstimmt.

## Wert

Der Rückgabewert ist der [`Node`](/de/docs/Web/API/Node)-Wert des `XPathResult`,
zurückgegeben von [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate).

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`ANY_UNORDERED_NODE_TYPE` oder `FIRST_ORDERED_NODE_TYPE` ist, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `singleNodeValue`-Eigenschaft.

### HTML

```html
<div>XPath example</div>
<div>
  Tag name of the element having the text content 'XPath example':
  <output></output>
</div>
```

### JavaScript

```js
const xpath = "//*[text()='XPath example']";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);
document.querySelector("output").textContent = result.singleNodeValue.localName;
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
