---
title: "XPathResult: singleNodeValue-Eigenschaft"
short-title: singleNodeValue
slug: Web/API/XPathResult/singleNodeValue
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM XPath")}}

Die schreibgeschützte **`singleNodeValue`**-Eigenschaft der {{domxref("XPathResult")}}-Schnittstelle gibt einen {{domxref("Node")}}-Wert oder `null` zurück, falls kein Knoten eines Ergebnisses mit {{domxref("XPathResult.resultType")}} vom Typ `ANY_UNORDERED_NODE_TYPE` oder `FIRST_ORDERED_NODE_TYPE` übereinstimmte.

## Wert

Der Rückgabewert ist der {{domxref("Node")}}-Wert des `XPathResult`, das von {{domxref("Document.evaluate()")}} zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls {{domxref("XPathResult.resultType")}} nicht `ANY_UNORDERED_NODE_TYPE` oder `FIRST_ORDERED_NODE_TYPE` ist, wird eine {{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

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
