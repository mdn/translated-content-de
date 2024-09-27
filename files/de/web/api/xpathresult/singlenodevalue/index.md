---
title: "XPathResult: singleNodeValue-Eigenschaft"
short-title: singleNodeValue
slug: Web/API/XPathResult/singleNodeValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

Die schreibgeschützte **`singleNodeValue`**-Eigenschaft des
[`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt einen [`Node`](/de/docs/Web/API/Node)-Wert oder
`null` zurück, falls kein Knoten eines Ergebnisses mit
[`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType), das auf `ANY_UNORDERED_NODE_TYPE` oder
`FIRST_ORDERED_NODE_TYPE` gesetzt ist, übereinstimmt.

## Wert

Der Rückgabewert ist der [`Node`](/de/docs/Web/API/Node)-Wert des `XPathResult`,
der von [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht
`ANY_UNORDERED_NODE_TYPE` oder `FIRST_ORDERED_NODE_TYPE` ist, wird eine
[`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

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
