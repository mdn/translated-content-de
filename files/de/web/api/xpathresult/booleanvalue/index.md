---
title: "XPathResult: booleanValue-Eigenschaft"
short-title: booleanValue
slug: Web/API/XPathResult/booleanValue
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`booleanValue`**-Eigenschaft des [`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt den booleschen Wert eines Ergebnisses zurück, wobei [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `BOOLEAN_TYPE` ist.

## Wert

Der Rückgabewert ist der boolesche Wert des `XPathResult`, das von [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `BOOLEAN_TYPE` ist, wird eine [`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `booleanValue`-Eigenschaft.

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
