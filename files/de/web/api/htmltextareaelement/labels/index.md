---
title: "HTMLTextAreaElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLTextAreaElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

Die **`HTMLTextAreaElement.labels`** schreibgeschützte Eigenschaft gibt ein [`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die mit dem {{HTMLElement("textArea")}}-Element verknüpft sind.

## Wert

Ein [`NodeList`](/de/docs/Web/API/NodeList), das die `<label>`-Elemente enthält, die mit dem `<textArea>`-Element verknüpft sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<textarea id="test">Some text</textarea>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("test");
  for (const label of textArea.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
