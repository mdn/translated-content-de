---
title: "HTMLOptionElement: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/HTMLOptionElement/disabled
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{ APIRef("HTML DOM") }}

Die **`disabled`**-Eigenschaft des {{domxref("HTMLOptionElement")}} ist ein boolescher Wert, der anzeigt, ob das {{htmlelement("option")}}-Element nicht zur Auswahl verfügbar ist. Die Eigenschaft spiegelt den Wert des [`disabled`](/de/docs/Web/HTML/Element/option#disabled)-HTML-Attributs wider.

Die Eigenschaft spiegelt den Wert des `disabled`-Attributs auf dem `<option>`-Element selbst wider. Wenn eine Option deaktiviert ist, weil sie ein Kind eines deaktivierten {{HTMLElement("optgroup")}}-Elements ist, wird das `true` der {{domxref("HTMLOptGroupElement.disabled")}}-Eigenschaft nicht von der Option selbst geerbt.

## Wert

Ein boolescher Wert.

## Beispiele

### HTML

```html
<label for="drink-options">Getränkeauswahl:</label>
<select id="drink-options">
  <option value="water">Wasser</option>
  <option value="lemonade">Limonade</option>
  <option value="beer">Bier</option>
  <option value="whisky" disabled>Whisky</option>
</select>
```

### JavaScript

```js
const drinks = document.querySelectorAll("#drink-options option");
console.log(drinks[0].disabled); // false
console.log(drinks[3].disabled); // true
drinks[1].disabled = true; // deaktiviert die Limonadenoption
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
- {{DOMxRef("HTMLSelectElement.disabled")}}
- {{DOMxRef("HTMLOptGroupElement.disabled")}}
- {{DOMxRef("HTMLOptionElement.selected")}}
- {{DOMxRef("HTMLOptionElement.index")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{cssxref(":disabled")}}
