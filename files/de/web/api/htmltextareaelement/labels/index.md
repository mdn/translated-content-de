---
title: "HTMLTextAreaElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLTextAreaElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLTextAreaElement.labels`** gibt eine [`NodeList`](/de/docs/Web/API/NodeList) der mit dem {{HTMLElement("textArea")}}-Element verbundenen {{HTMLElement("label")}}-Elemente zurück.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die mit dem `<textArea>`-Element verbundenen `<label>`-Elemente enthält.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<textarea id="test">Some text</textarea>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
const textArea = document.getElementById("test");
for (const label of textArea.labels) {
  console.log(label.textContent); // "Label 1" and "Label 2"
}
```

{{EmbedLiveSample("Examples", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
