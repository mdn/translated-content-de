---
title: "HTMLOptionElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLOptionElement/disabled
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft des [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement) ist ein boolescher Wert, der angibt, ob das {{htmlelement("option")}}-Element nicht ausgewählt werden kann. Die Eigenschaft spiegelt den Wert des [`disabled`](/de/docs/Web/HTML/Reference/Elements/option#disabled)-HTML-Attributs wider.

Die Eigenschaft reflektiert den Wert des `disabled`-Attributs auf dem `<option>`-Element selbst. Wenn eine Option deaktiviert ist, weil sie ein Kind eines deaktivierten {{HTMLElement("optgroup")}}-Elements ist, wird das `true` der [`HTMLOptGroupElement.disabled`](/de/docs/Web/API/HTMLOptGroupElement/disabled)-Eigenschaft nicht von der Option selbst geerbt.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<label for="drink-options">Drink selection:</label>
<select id="drink-options">
  <option value="water">Water</option>
  <option value="lemonade">Lemonade</option>
  <option value="beer">Beer</option>
  <option value="whisky" disabled>Whisky</option>
</select>
```

### JavaScript

```js
const drinks = document.querySelectorAll("#drink-options option");
console.log(drinks[0].disabled); // false
console.log(drinks[3].disabled); // true
drinks[1].disabled = true; // disables the beer option
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("option")}}
- {{HTMLElement("select")}}
- {{HTMLElement("optgroup")}}
- [`HTMLSelectElement.disabled`](/de/docs/Web/API/HTMLSelectElement/disabled)
- [`HTMLOptGroupElement.disabled`](/de/docs/Web/API/HTMLOptGroupElement/disabled)
- [`HTMLOptionElement.selected`](/de/docs/Web/API/HTMLOptionElement/selected)
- [`HTMLOptionElement.index`](/de/docs/Web/API/HTMLOptionElement/index)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- {{cssxref(":disabled")}}
