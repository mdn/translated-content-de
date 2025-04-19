---
title: "ElementInternals: ariaInvalid-Eigenschaft"
short-title: ariaInvalid
slug: Web/API/ElementInternals/ariaInvalid
l10n:
  sourceCommit: 4578af853ec3e520f4f2038c028c265591cbaa70
---

{{APIRef("Web Components")}}

Die **`ariaInvalid`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)-Attributs wider. Relevant für die Rollen [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) und [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), zeigt es der Zugänglichkeits-API an, ob der eingegebene Wert nicht dem erwarteten Format der Anwendung entspricht.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, aber sie stellen sicher, dass Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ungültig.
- `"false"` (Standard)
  - : Das Element befindet sich nicht in einem ungültigen Zustand.
- `"grammar"`
  - : Das Element befindet sich in einem ungültigen Zustand, weil ein grammatikalischer Fehler erkannt wurde.
- `"spelling"`
  - : Das Element befindet sich in einem ungültigen Zustand, weil ein Rechtschreibfehler erkannt wurde.

## Beispiele

In diesem Beispiel definieren und erstellen wir ein `<custom-text>`-Element und rufen dann den Wert von `ariaInvalid` vom ersten `<custom-text>`-Element im Dokument ab.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.ariaInvalid = "false";
  }
  // …
}

window.customElements.define("custom-text", CustomControl);

const element = document.querySelector("custom-text");
console.log(element._internals.ariaInvalid);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ElementInternals.ariaRequired`](/de/docs/Web/API/ElementInternals/ariaRequired)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
