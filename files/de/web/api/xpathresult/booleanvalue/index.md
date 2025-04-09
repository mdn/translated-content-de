---
title: "XPathResult: Eigenschaft booleanValue"
short-title: booleanValue
slug: Web/API/XPathResult/booleanValue
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`booleanValue`**-Eigenschaft des
[`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt den Booleschen Wert eines Ergebnisses zurück, wenn
[`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `BOOLEAN_TYPE` ist.

## Wert

Der Rückgabewert ist der Boolesche Wert des `XPathResult`, der von
[`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegeben wird.

### Ausnahmen

#### TYPE_ERR

Falls [`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) nicht `BOOLEAN_TYPE` ist, wird eine
[`DOMException`](/de/docs/Web/API/DOMException) vom Typ `TYPE_ERR` ausgelöst.

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
