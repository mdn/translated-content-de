---
title: "HTMLSelectElement: options-Eigenschaft"
short-title: options
slug: Web/API/HTMLSelectElement/options
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("DOM")}}

Die **`HTMLSelectElement.options`** schreibgeschützte Eigenschaft gibt ein [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection) der {{HTMLElement("option")}}-Elemente zurück, die vom {{HTMLElement("select")}}-Element enthalten werden.

## Wert

Eine [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection), die die `<option>`-Elemente enthält, die vom `<select>`-Element enthalten werden.

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
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("test");
  for (const option of select.options) {
    console.log(option.label); // "Option 1" and "Option 2"
  }
});
```

{{EmbedLiveSample("Examples", "100%", 30)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
