---
title: "HTMLInputElement: checked-Eigenschaft"
short-title: checked
slug: Web/API/HTMLInputElement/checked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

Die **`checked`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}}-Schnittstelle gibt die aktuelle Ausgewähltheit des Elements an; das heißt, ob das Formularelement ausgewählt ist oder nicht.

Die boolesche `checked`-Eigenschaft ist relevant für die Eingabetypen `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)).

Das Vorhandensein des HTML-Attributs [`checked`](/de/docs/Web/HTML/Element/input#checked) zeigt an, dass die Checkbox standardmäßig ausgewählt ist. Es zeigt jedoch nicht an, ob diese Checkbox aktuell ausgewählt ist: Wenn sich der Zustand der Checkbox ändert, spiegelt dies das Inhaltsattribut nicht wider; nur die `checked`-IDL-Eigenschaft des `HTMLInputElement` wird aktualisiert. Das `checked`-Attribut wird durch die {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}-Eigenschaft widergespiegelt.

Wenn die `checked`-Eigenschaft eines Radio-Inputs `true` ist, sind alle anderen Radio-Inputs mit demselben {{DOMxRef("HTMLInputElement.name", "name")}} `false`. Wenn ein Radiobutton in einer Gruppe von Radiobuttons mit demselben Namen als {{DOMxRef("HTMLInputElement.required", "required")}} markiert ist, gilt: Solange ein Button in der Gruppe `checked` ist, ist die schreibgeschützte {{domxref('ValidityState')}}-Eigenschaft {{domxref('ValidityState.valueMissing','valueMissing')}} des Objekts für jeden Radiobutton in der Gruppe `false`.

Der Wert einer Checkbox wird nur dann in den übermittelten Daten bei der Formularübermittlung enthalten sein, wenn `checked` wahr ist. Der Wert der {{DOMxRef("HTMLInputElement.indeterminate")}}-Eigenschaft hat keinen Einfluss auf den `checked`-Wert einer Checkbox.

## Wert

Ein boolean.

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
- {{DOMXref("HTMLInputElement.validity")}}
- {{cssxref(":checked")}} Pseudo-Klasse
