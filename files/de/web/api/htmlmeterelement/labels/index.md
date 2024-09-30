---
title: "HTMLMeterElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLMeterElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

Die **`HTMLMeterElement.labels`** schreibgeschützte Eigenschaft gibt eine
[`NodeList`](/de/docs/Web/API/NodeList) der zugehörigen {{HTMLElement("label")}}-Elemente zurück, die mit dem
{{HTMLElement("meter")}}-Element verbunden sind.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die mit dem `<meter>`-Element verbundenen `<label>`-Elemente enthält.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<meter id="test" min="0" max="100" value="70">70</meter>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const meter = document.getElementById("test");
  for (const label of meter.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Beispiele", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
