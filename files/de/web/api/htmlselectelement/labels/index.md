---
title: "HTMLSelectElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLSelectElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

Die **`HTMLSelectElement.labels`**-Eigenschaft gibt eine schreibgeschützte
[`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die mit dem
{{HTMLElement("select")}}-Element verknüpft sind.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die `<label>`-Elemente enthält, die mit dem `<select>`-Element verknüpft sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("test");
  for (const label of select.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
