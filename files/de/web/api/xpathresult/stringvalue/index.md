---
title: "XPathResult: stringValue-Eigenschaft"
short-title: stringValue
slug: Web/API/XPathResult/stringValue
l10n:
  sourceCommit: b8cd964ef488e9691252e02f6ad1ebd3293b8eaa
---

{{APIRef("DOM XPath")}} {{AvailableInWorkers}}

Die schreibgeschützte **`stringValue`**-Eigenschaft des
[`XPathResult`](/de/docs/Web/API/XPathResult)-Interfaces gibt den String-Wert eines Ergebnisses zurück, dessen
[`XPathResult.resultType`](/de/docs/Web/API/XPathResult/resultType) `STRING_TYPE` ist.

## Wert

Der Rückgabewert ist der String-Wert des von
[`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) zurückgegebenen `XPathResult`.

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
