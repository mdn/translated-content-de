---
title: "HTMLProgressElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLProgressElement/labels
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLProgressElement.labels`** gibt eine {{domxref("NodeList")}} der mit dem {{HTMLElement("progress")}}-Element verbundenen {{HTMLElement("label")}}-Elemente zurück.

## Wert

Eine {{domxref("NodeList")}}, die die mit dem `<progress>`-Element verbundenen `<label>`-Elemente enthält.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("test");
  for (const label of progress.labels) {
    console.log(label.textContent); // "Label 1" und "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
