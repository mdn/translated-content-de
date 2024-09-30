---
title: "HTMLInputElement: checked-Eigenschaft"
short-title: checked
slug: Web/API/HTMLInputElement/checked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

Die **`checked`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt an, ob das Element aktuell ausgewählt ist oder nicht; das heißt, ob das Formularsteuerelement aktiviert ist.

Die boolesche `checked`-Eigenschaft ist relevant für die Input-Typen `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)).

Das Vorhandensein des HTML-Attributes [`checked`](/de/docs/Web/HTML/Element/input#checked) zeigt an, dass die Checkbox standardmäßig aktiviert ist. Es gibt jedoch nicht an, ob diese Checkbox momentan aktiviert ist: Wenn der Zustand der Checkbox geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider; nur die `HTMLInputElement`-Eigenschaft `checked` wird aktualisiert. Das `checked`-Attribut wird durch die [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)-Eigenschaft reflektiert.

Wenn eine `radio`-Input-Eigenschaft `checked` `true` ist, sind alle anderen Radio-Inputs mit demselben [`name`](/de/docs/Web/API/HTMLInputElement/name) `false`. Sollte ein Radiobutton in einer gleichnamigen Gruppe von Radiobuttons [`required`](/de/docs/Web/API/HTMLInputElement/required) sein, muss mindestens ein Button in der Gruppe `checked` sein, damit die schreibgeschützte [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts für jeden Radiobutton in der Gruppe `false` ist.

Ein Checkbox-Wert wird nur bei der Formularübermittlung in die übermittelten Daten aufgenommen, wenn `checked` wahr ist. Der Wert der [`HTMLInputElement.indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft hat keinen Einfluss auf den `checked`-Wert einer Checkbox.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const inputElement = document.getElementById("contactMail");
console.log(inputElement.checked);
inputElement.checked = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("input")}}
- [`HTMLInputElement.validity`](/de/docs/Web/API/HTMLInputElement/validity)
- {{cssxref(":checked")}} Pseudo-Klasse
