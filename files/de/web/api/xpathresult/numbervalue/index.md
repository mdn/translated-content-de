---
title: "XPathResult: numberValue-Eigenschaft"
short-title: numberValue
slug: Web/API/XPathResult/numberValue
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`numberValue`**-Eigenschaft des [`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt den numerischen Wert eines Ergebnisses zurück, wenn [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `NUMBER_TYPE` ist.

## Wert

Der Rückgabewert ist der numerische Wert des von [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegebenen `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Sollte [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `NUMBER_TYPE` sein, wird eine [`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

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
