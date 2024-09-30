---
title: "XPathResult: stringValue Eigenschaft"
short-title: stringValue
slug: Web/API/XPathResult/stringValue
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`stringValue`** Eigenschaft der
[`XPathResult`](/de/docs/Web/API/XPathResult) Schnittstelle gibt den Zeichenfolgenwert eines Ergebnisses zurück, wenn
[`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `STRING_TYPE` ist.

## Wert

Der Rückgabewert ist der Zeichenfolgenwert des `XPathResult`, der von
[`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `STRING_TYPE` ist, wird eine
[`XPathException`](/de/docs/Web/API/XPathException) vom Typ `TYPE_ERR` ausgelöst.

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `stringValue` Eigenschaft.

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
