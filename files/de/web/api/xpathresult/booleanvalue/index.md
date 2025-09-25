---
title: "XPathResult: booleanValue Eigenschaft"
short-title: booleanValue
slug: Web/API/XPathResult/booleanValue
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

Die schreibgeschützte **`booleanValue`** Eigenschaft des
[`XPathResult`](/de/docs/Web/API/XPathResult) Interfaces gibt den booleschen Wert eines Ergebnisses zurück, dessen [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `BOOLEAN_TYPE` ist.

## Wert

Der Rückgabewert ist der boolesche Wert des von
[`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegebenen `XPathResult`.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `BOOLEAN_TYPE` ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `booleanValue` Eigenschaft.

### HTML

```html
<div>XPath example</div>
<p>Text is 'XPath example': <output></output></p>
```

### JavaScript

```js
const xpath = "//div/text() = 'XPath example'";
const result = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.BOOLEAN_TYPE,
  null,
);
document.querySelector("output").textContent = result.booleanValue;
```

### Ergebnis

{{EmbedLiveSample('Examples', 400, 70)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
