---
title: "HTMLOutputElement: labels-Eigenschaft"
short-title: labels
slug: Web/API/HTMLOutputElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

Die **`HTMLOutputElement.labels`**-Eigenschaft, die nur lesbar ist, gibt eine
[`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die mit dem
{{HTMLElement("output")}}-Element verbunden sind.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die `<label>`-Elemente enthält, die mit dem `<output>`-Element verbunden sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<output id="test">Output</output>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
const output = document.getElementById("test");
for (const label of output.labels) {
  console.log(label.textContent); // "Label 1" and "Label 2"
}
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
