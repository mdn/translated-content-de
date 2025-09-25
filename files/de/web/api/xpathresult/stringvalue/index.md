---
title: "XPathResult: stringValue-Eigenschaft"
short-title: stringValue
slug: Web/API/XPathResult/stringValue
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}} {{AvailableInWorkers}}

Die schreibgeschützte **`stringValue`**-Eigenschaft des
[`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt den Zeichenfolgenwert eines Ergebnisses zurück, wenn
[`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `STRING_TYPE` ist.

## Wert

Der Rückgabewert ist der Zeichenfolgenwert des `XPathResult`, das von
[`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `STRING_TYPE` ist, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `stringValue`-Eigenschaft.

### HTML

```html
<div>XPath example</div>
<div>Text content of the &lt;div&gt; above: <output></output></div>
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
