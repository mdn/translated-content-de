---
title: "XPathResult: numberValue-Eigenschaft"
short-title: numberValue
slug: Web/API/XPathResult/numberValue
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

Die schreibgeschützte **`numberValue`**-Eigenschaft der [`XPathResult`](/de/docs/Web/API/XPathResult)-Schnittstelle gibt den numerischen Wert eines Ergebnisses zurück, wenn [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `NUMBER_TYPE` ist.

## Wert

Der Rückgabewert ist der numerische Wert des durch [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegebenen `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Wenn [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `NUMBER_TYPE` ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

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
