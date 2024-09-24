---
title: "HTMLInputElement: indeterminate-Eigenschaft"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
l10n:
  sourceCommit: a4974693ac80bb2872d52610e13737430d9377a6
---

{{APIRef("HTML DOM")}}

Die **`indeterminate`**-Eigenschaft der {{domxref("HTMLInputElement")}}-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das Kontrollkästchen im _indeterminate_-Zustand ist. Ein Beispiel hierfür ist ein "Alle auswählen/abwählen"-Kontrollkästchen, das im indeterminate-Zustand sein kann, wenn einige, aber nicht alle seiner Unterelemente aktiviert sind. Der `indeterminate`-Zustand kann nur über JavaScript gesetzt werden und ist nur für [`checkbox`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerelemente relevant.

Er steht in keinem Zusammenhang mit der {{domxref("HTMLInputElement.checked")}}-Eigenschaft, und ein indeterminates Kontrollkästchen kann entweder aktiviert oder deaktiviert sein. Der indeterminate-Zustand beeinflusst nur das Erscheinungsbild des Kontrollkästchens (siehe Beispiel unten), nicht seine Anwesenheit beim Absenden (dies wird durch das `checked`-Attribut gesteuert).

## Wert

Ein boolescher Wert.

## Beispiele

```html
<input type="checkbox" id="indeterminate-checkbox" />
<label for="indeterminate-checkbox">Indeterminates Kontrollkästchen</label>
```

```js
const checkbox = document.getElementById("indeterminate-checkbox");
checkbox.indeterminate = true;
```

{{EmbedLiveSample("examples", "", 200)}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.checked")}}
- {{HTMLElement("input")}}
- [Indeterminate-Zustand bei Kontrollkästchen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
- CSS {{cssxref(":indeterminate")}}-Eigenschaft
