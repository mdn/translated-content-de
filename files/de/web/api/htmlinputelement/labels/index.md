---
title: "HTMLInputElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLInputElement/labels
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("DOM")}}

Die **`HTMLInputElement.labels`** schreibgeschützte Eigenschaft gibt eine
{{domxref("NodeList")}} der {{HTMLElement("label")}}-Elemente zurück, die mit dem
{{HTMLElement("input")}}-Element verbunden sind, wenn das Element nicht versteckt ist. Wenn das Element den Typ `hidden` hat, gibt die Eigenschaft `null` zurück.

## Wert

Eine {{domxref("NodeList")}}, die die `<label>`-Elemente enthält, die mit dem `<input>`-Element verbunden sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test" />
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("test");
  for (const label of input.labels) {
    console.log(label.textContent); // "Label 1" and "Label 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}