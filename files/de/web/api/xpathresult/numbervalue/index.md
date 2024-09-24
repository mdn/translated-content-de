---
title: "XPathResult: numberValue-Eigenschaft"
short-title: numberValue
slug: Web/API/XPathResult/numberValue
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`numberValue`** der
{{domxref("XPathResult")}}-Schnittstelle gibt den numerischen Wert eines Ergebnisses zurück, dessen
{{domxref("XPathResult.resultType")}} `NUMBER_TYPE` ist.

## Wert

Der Rückgabewert ist der numerische Wert des von
{{domxref("Document.evaluate()")}} zurückgegebenen `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls {{domxref("XPathResult.resultType")}} nicht `NUMBER_TYPE` ist, wird eine
{{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `numberValue`-Eigenschaft.

### HTML

```html
<div>XPath Beispiel</div>
<div>Anzahl der &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
const xpath = "count(//div)";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.NUMBER_TYPE,
  null,
);
document.querySelector("output").textContent = result.numberValue;
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
