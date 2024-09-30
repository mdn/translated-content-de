---
title: "HTMLSelectElement: selectedIndex-Eigenschaft"
short-title: selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

Die **`selectedIndex`**-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)-Interfaces ist der numerische Index des ersten ausgewählten {{HTMLElement("option")}}-Elements in einem {{HTMLElement("select")}}-Element, falls vorhanden, oder `−1`, wenn kein `<option>` ausgewählt ist. Das Setzen dieser Eigenschaft wählt die Option an diesem Index aus und deselektiert alle anderen Optionen, während das Setzen auf `-1` alle aktuell ausgewählten Optionen deselektiert.

## Wert

Eine Zahl.

## Beispiele

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
const selectElem = document.getElementById("select");
const pElem = document.getElementById("p");

// When a new <option> is selected
selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  // Add that data to the <p>
  pElem.textContent = `selectedIndex: ${index}`;
});
```

{{EmbedLiveSample("Examples", "200px", "120px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
