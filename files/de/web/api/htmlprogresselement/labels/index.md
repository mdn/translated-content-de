---
title: "HTMLProgressElement: labels Eigenschaft"
short-title: labels
slug: Web/API/HTMLProgressElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLProgressElement.labels`** gibt ein [`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die dem {{HTMLElement("progress")}}-Element zugeordnet sind.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die `<label>`-Elemente enthält, die dem `<progress>`-Element zugeordnet sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<progress id="test" value="70" max="100">70%</progress>
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
const progress = document.getElementById("test");
for (const label of progress.labels) {
  console.log(label.textContent); // "Label 1" and "Label 2"
}
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
