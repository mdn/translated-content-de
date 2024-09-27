---
title: "HTMLInputElement: indeterminate-Eigenschaft"
short-title: indeterminate
slug: Web/API/HTMLInputElement/indeterminate
l10n:
  sourceCommit: a4974693ac80bb2872d52610e13737430d9377a6
---

{{APIRef("HTML DOM")}}

Die **`indeterminate`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt einen boolean-Wert zurück, der anzeigt, ob die Checkbox im _unbestimmten_ Zustand ist. Beispielsweise kann eine „Alles auswählen/alles abwählen“-Checkbox im unbestimmten Zustand sein, wenn einige, aber nicht alle ihrer Untersteuerungen aktiviert sind. Der `indeterminate`-Zustand kann nur über JavaScript gesetzt werden und ist nur für [`checkbox`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerelemente relevant.

Er ist nicht verwandt mit der [`HTMLInputElement.checked`](/de/docs/Web/API/HTMLInputElement/checked)-Eigenschaft, und eine unbestimmte Checkbox kann entweder aktiviert oder deaktiviert sein. Im unbestimmten Zustand beeinträchtigt dies nur das Erscheinungsbild der Checkbox (siehe Beispiel unten), nicht deren Vorhandensein bei der Übermittlung (was durch das Aktiviertsein gesteuert wird).

## Wert

Ein boolean.

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
- [Unbestimmte Zustands-Checkboxen](/de/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)
- CSS-{{cssxref(":indeterminate")}}-Eigenschaft
