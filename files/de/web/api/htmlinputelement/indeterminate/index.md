---
title: "HTMLInputElement: indeterminate-Eigenschaft"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
l10n:
  sourceCommit: a4974693ac80bb2872d52610e13737430d9377a6
---

{{APIRef("HTML DOM")}}

Die **`indeterminate`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob die Checkbox im _unbestimmten_ Zustand ist. Ein Beispiel: Eine "Alle auswählen/Alle abwählen"-Checkbox kann sich im unbestimmten Zustand befinden, wenn einige, aber nicht alle ihrer Unterelemente aktiviert sind. Der `indeterminate`-Zustand kann nur über JavaScript gesetzt werden und ist nur für [`checkbox`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerelemente relevant.

Er steht in keinem Zusammenhang mit der [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft, und eine unbestimmte Checkbox kann sowohl aktiviert als auch deaktiviert sein. Unbestimmt zu sein, beeinflusst nur das Erscheinungsbild des Kontrollkästchens (siehe Beispiel unten) und nicht seine Präsenz bei der Übermittlung (die durch den Checked-Zustand gesteuert wird).

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
- [Unbestimmte Zustand von Kontrollkästchen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
- CSS {{cssxref(":indeterminate")}}-Eigenschaft
