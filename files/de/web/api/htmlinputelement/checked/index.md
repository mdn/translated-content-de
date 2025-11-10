---
title: "HTMLInputElement: checked-Eigenschaft"
short-title: checked
slug: Web/API/HTMLInputElement/checked
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`checked`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, ob das Element aktuell ausgewählt ist oder nicht; das heißt, ob das Formularelement markiert ist oder nicht.

Die boolesche `checked`-Eigenschaft ist für die `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)) Eingabetypen relevant.

Die Anwesenheit des HTML-Attributs [`checked`](/de/docs/Web/HTML/Reference/Elements/input#checked) zeigt an, dass das Kontrollkästchen standardmäßig aktiviert ist. Es zeigt nicht an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn der Zustand des Kontrollkästchens geändert wird, spiegelt dieses Inhaltsattribut die Änderung nicht wider; nur die `checked` IDL-Eigenschaft des `HTMLInputElement` wird aktualisiert. Das `checked`-Attribut wird durch die [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)-Eigenschaft widergespiegelt.

Wenn die `checked`-Eigenschaft eines Radioinputs `true` ist, sind alle anderen Radioinputs mit demselben [`name`](/de/docs/Web/API/HTMLInputElement/name) `false`. Wenn irgendein Radiobutton in einer Gruppe von Radiobuttons mit demselben Namen [`required`](/de/docs/Web/API/HTMLInputElement/required) ist, wird solange ein Button in der Gruppe `checked` ist, die schreibgeschützte [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts für jeden Radiobutton in der Gruppe `false` sein.

Der Wert eines Kontrollkästchens wird nur in den übermittelten Daten bei der Formularübermittlung aufgenommen, wenn `checked` wahr ist. Der Wert der [`HTMLInputElement.indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft hat keinen Einfluss auf den `checked`-Wert eines Kontrollkästchens.

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
- {{cssxref(":checked")}} Pseudoklasse
