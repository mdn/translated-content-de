---
title: "HTMLOptionsCollection: selectedIndex-Eigenschaft"
short-title: selectedIndex
slug: Web/API/HTMLOptionsCollection/selectedIndex
l10n:
  sourceCommit: a5e089d79bf681e27fc6bdb9e4026b2489ffa4d9
---

{{APIRef("HTML DOM")}}

Die **`selectedIndex`**-Eigenschaft der [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)-Schnittstelle ist der numerische Index des ersten ausgewählten {{HTMLElement("option")}}-Elements, falls vorhanden, oder `-1`, wenn kein `<option>` ausgewählt ist. Das Setzen dieser Eigenschaft wählt die Option an diesem Index aus und hebt die Auswahl aller anderen Optionen in dieser Sammlung auf, während das Setzen auf `-1` alle derzeit ausgewählten Elemente deselektiert. Diese Eigenschaft entspricht genau der [`selectedIndex`](/de/docs/Web/API/HTMLSelectElement/selectedIndex)-Eigenschaft des [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement), dem diese Sammlung gehört.

## Wert

Eine Zahl.

## Beispiele

```js
const optionColl = document.getElementById("select").options;
console.log(`selected option: ${optionColl.selectedIndex}`); // the index of the first selected option, or -1 if no option is selected
optionColl.selectedIndex = 0; // selects the first item
optionColl.selectedIndex = -1; // deselects any selected option
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOptionsCollection.length`](/de/docs/Web/API/HTMLOptionsCollection/length)
- [`HTMLOptionsCollection.add()`](/de/docs/Web/API/HTMLOptionsCollection/add)
- [`HTMLOptionsCollection.remove()`](/de/docs/Web/API/HTMLOptionsCollection/remove)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
