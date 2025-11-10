---
title: "HTMLSelectElement: options-Eigenschaft"
short-title: options
slug: Web/API/HTMLSelectElement/options
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`HTMLSelectElement.options`** gibt eine [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection) der {{HTMLElement("option")}}-Elemente zurück, die im {{HTMLElement("select")}}-Element enthalten sind.

## Wert

Eine [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection), die die `<option>`-Elemente enthält, die im `<select>`-Element enthalten sind.

## Beispiele

### HTML

```html
<label for="test">Label</label>
<select id="test">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### JavaScript

```js
const select = document.getElementById("test");
for (const option of select.options) {
  console.log(option.label); // "Option 1" and "Option 2"
}
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
