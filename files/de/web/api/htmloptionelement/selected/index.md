---
title: "HTMLOptionElement: selected-Eigenschaft"
short-title: selected
slug: Web/API/HTMLOptionElement/selected
l10n:
  sourceCommit: 59810b5b4a4cdf1151c088ff5165a85f4a96f518
---

{{ APIRef("HTML DOM") }}

Die **`selected`**-Eigenschaft der {{DOMxRef("HTMLOptionElement")}} Schnittstelle gibt an, ob das aktuelle Element ausgewählt ist oder nicht; das heißt, ob das {{HTMLElement("option")}} ausgewählt ist oder nicht.

Das Vorhandensein des HTML-Attributs [`selected`](/de/docs/Web/HTML/Element/option#selected) zeigt an, dass die Option standardmäßig ausgewählt ist. Es zeigt jedoch nicht an, ob diese Option derzeit ausgewählt ist: Wenn sich der Zustand der Option ändert, spiegelt das `selected`-Inhaltsattribut die Änderung nicht wider; nur die `selected` IDL-Eigenschaft des `HTMLOptionElement` wird aktualisiert. Das `selected`-Attribut wird durch die {{domxref("HTMLOptionElement.defaultSelected", "defaultSelected")}}-Eigenschaft widergespiegelt.

## Wert

Ein booleanischer Wert.

## Beispiele

```js
const optionElement = document.getElementById("water");
console.log(optionElement.selected);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- {{DOMxRef("HTMLOptionElement.index")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("HTMLSelectElement.selectedIndex")}}
