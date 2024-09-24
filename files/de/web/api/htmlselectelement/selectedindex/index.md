---
title: "HTMLSelectElement: selectedIndex-Eigenschaft"
short-title: selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`HTMLSelectElement.selectedIndex`**-Eigenschaft ist ein
`long`, das den Index des ersten oder letzten ausgewählten
{{HTMLElement("option")}}-Elements widerspiegelt, abhängig vom Wert von `multiple`.
Der Wert `-1` zeigt an, dass kein Element ausgewählt ist.

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

// Wenn eine neue <option> ausgewählt wird
selectElem.addEventListener("change", () => {
  const index = selectElem.selectedIndex;
  // Diese Daten zum <p> hinzufügen
  pElem.textContent = `selectedIndex: ${index}`;
});
```

{{EmbedLiveSample("Examples", "200px", "120px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOptionsCollection")}}
