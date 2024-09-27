---
title: "HTMLOutputElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLOutputElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLOutputElement.labels`** gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die mit dem {{HTMLElement("output")}}-Element verknüpft sind.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die `<label>`-Elemente enthält, die mit dem `<output>`-Element verknüpft sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<output id="test">Output</output>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("test");
  for (const label of output.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
