---
title: "HTMLInputElement: checked-Eigenschaft"
short-title: checked
slug: Web/API/HTMLInputElement/checked
l10n:
  sourceCommit: e62f2b210f88e2c3e7270dcb4341e2963f9619cf
---

{{ APIRef("HTML DOM") }}

Die **`checked`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt an, ob das Element derzeit angekreuzt ist; das heißt, ob das Eingabefeld aktiviert ist oder nicht.

Die boolesche `checked`-Eigenschaft ist relevant für die Eingabetypen `radio` ([`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)) und `checkbox` ([`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)).

Das Vorhandensein des HTML-Attributs [`checked`](/de/docs/Web/HTML/Element/input#checked) zeigt an, dass das Kontrollkästchen standardmäßig aktiviert ist. Es gibt nicht an, ob dieses Kontrollkästchen derzeit aktiviert ist: Wenn sich der Zustand des Kontrollkästchens ändert, spiegelt dieses Inhaltsattribut die Änderung nicht wider; nur die IDL-Eigenschaft `checked` des `HTMLInputElement` wird aktualisiert. Das `checked`-Attribut wird durch die [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)-Eigenschaft widergespiegelt.

Wenn die `checked`-Eigenschaft eines Radio-Eingabefelds `true` ist, sind alle anderen Radio-Eingabefelder mit demselben [`name`](/de/docs/Web/API/HTMLInputElement/name) `false`. Wenn irgendein Radiobutton in einer Gruppe von Radiobuttons mit demselben Namen [`required`](/de/docs/Web/API/HTMLInputElement/required) ist, gilt: Solange ein Button in der Gruppe aktiviert ist, wird die nur lesbare [`valueMissing`](/de/docs/Web/API/ValidityState/valueMissing)-Eigenschaft des [`ValidityState`](/de/docs/Web/API/ValidityState)-Objekts für jeden Radiobutton in der Gruppe `false` sein.

Der Wert eines Kontrollkästchens wird nur in die gesendeten Daten aufgenommen, wenn `checked` wahr ist. Der Wert der [`HTMLInputElement.indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)-Eigenschaft hat keinen Einfluss auf den `checked`-Wert eines Kontrollkästchens.

## Wert

Ein Boolescher Wert.

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
