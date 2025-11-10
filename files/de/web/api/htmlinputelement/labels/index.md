---
title: "HTMLInputElement: labels Eigenschaft"
short-title: labels
slug: Web/API/HTMLInputElement/labels
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

Die **`HTMLInputElement.labels`** schreibgeschützte Eigenschaft gibt eine
[`NodeList`](/de/docs/Web/API/NodeList) der {{HTMLElement("label")}}-Elemente zurück, die dem
{{HTMLElement("input")}}-Element zugeordnet sind, falls das Element nicht versteckt ist. Wenn das Element den Typ `hidden` hat, gibt die Eigenschaft `null` zurück.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die `<label>`-Elemente enthält, die dem `<input>`-Element zugeordnet sind.

## Beispiele

### HTML

```html
<label id="label1" for="test">Label 1</label>
<input id="test" />
<label id="label2" for="test">Label 2</label>
```

### JavaScript

```js
const input = document.getElementById("test");
for (const label of input.labels) {
  console.log(label.textContent); // "Label 1" and "Label 2"
}
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
