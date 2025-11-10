---
title: "HTMLInputElement: indeterminate-Eigenschaft"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`indeterminate`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das Kontrollkästchen im _indeterminate_-Zustand ist. Beispielsweise kann ein "Alle auswählen/Alle abwählen"-Kontrollkästchen im indeterminate-Zustand sein, wenn einige, aber nicht alle seiner Untersteuerelemente ausgewählt sind. Der `indeterminate`-Zustand kann nur über JavaScript festgelegt werden und ist nur für [`checkbox`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerelemente relevant.

Er ist nicht mit der [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft verbunden, und ein indeterminiertes Kontrollkästchen kann sowohl ausgewählt als auch nicht ausgewählt sein. Der indeterminate-Zustand beeinflusst nur das Erscheinungsbild des Kontrollkästchens (siehe Beispiel unten) und nicht dessen Vorhandensein beim Absenden (das durch die Markierung gesteuert wird).

## Wert

Ein boolescher Wert.

## Beispiele

```html
<input type="checkbox" id="indeterminate-checkbox" />
<label for="indeterminate-checkbox">Indeterminate checkbox</label>
```

```js
const checkbox = document.getElementById("indeterminate-checkbox");
checkbox.indeterminate = true;
```

{{EmbedLiveSample("examples", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)
- {{HTMLElement("input")}}
- [Indeterminate-Zustand bei Kontrollkästchen](/de/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)
- CSS {{cssxref(":indeterminate")}}-Eigenschaft
