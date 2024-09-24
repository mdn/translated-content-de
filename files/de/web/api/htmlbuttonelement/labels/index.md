---
title: "HTMLButtonElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLButtonElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

Die **`HTMLButtonElement.labels`** schreibgeschützte Eigenschaft gibt eine
{{domxref("NodeList")}} der mit dem {{HTMLElement("button")}}-Element verknüpften {{HTMLElement("label")}}-Elemente zurück.

## Wert

Eine {{domxref("NodeList")}}, die die mit dem `<button>`-Element verknüpften `<label>`-Elemente enthält.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<button id="test">Button</button>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("test");
  for (const label of button.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
