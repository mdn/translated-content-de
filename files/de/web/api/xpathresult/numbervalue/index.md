---
title: "XPathResult: numberValue-Eigenschaft"
short-title: numberValue
slug: Web/API/XPathResult/numberValue
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`numberValue`**-Eigenschaft des [`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt den numerischen Wert eines Ergebnisses zurück, bei dem [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `NUMBER_TYPE` ist.

## Wert

Der Rückgabewert ist der numerische Wert des `XPathResult`, der von [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `NUMBER_TYPE` ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `numberValue`-Eigenschaft.

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
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
