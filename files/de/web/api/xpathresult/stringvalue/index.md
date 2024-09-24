---
title: "XPathResult: stringValue-Eigenschaft"
short-title: stringValue
slug: Web/API/XPathResult/stringValue
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`stringValue`**-Eigenschaft der
{{domxref("XPathResult")}}-Schnittstelle gibt den String-Wert eines Ergebnisses zurück, bei dem der
{{domxref("XPathResult.resultType")}} `STRING_TYPE` ist.

## Wert

Der Rückgabewert ist der String-Wert des `XPathResult`, das von
{{domxref("Document.evaluate()")}} zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls {{domxref("XPathResult.resultType")}} nicht `STRING_TYPE` ist, wird eine
{{domxref("XPathException")}} vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Nutzung der `stringValue`-Eigenschaft.

### HTML

```html
<div>XPath-Beispiel</div>
<div>Textinhalt des obigen &lt;div&gt;: <output></output></div>
```

### JavaScript

```js
const xpath = "//div/text()";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.STRING_TYPE,
  null,
);
document.querySelector("output").textContent = result.stringValue;
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
