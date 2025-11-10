---
title: "Element: ariaInvalid-Eigenschaft"
short-title: ariaInvalid
slug: Web/API/Element/ariaInvalid
l10n:
  sourceCommit: 4578af853ec3e520f4f2038c028c265591cbaa70
---

{{APIRef("DOM")}}

Die **`ariaInvalid`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)-Attributs wider. Relevant für die Rollen [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), [`checkbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`gridcell`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`listbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`radiogroup`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) und [`tree`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role), zeigt sie der Zugriffs-API an, ob der eingegebene Wert nicht dem vom Antrag erwarteten Format entspricht.

Wenn das Attribut nicht vorhanden ist oder auf den leeren String gesetzt ist, wird die assistierende Technologie den Wert so behandeln, als wäre er auf `false` gesetzt. Wenn das Attribut vorhanden ist, aber auf einen anderen Wert als `false`, `grammar`, `spelling` oder den leeren String (`""`) gesetzt ist, behandelt die assistierende Technologie den Wert als `true`. Die Eigenschaft spiegelt den Attributwert wider, wie er gesetzt wurde, nicht so, wie er von assistierender Technologie behandelt wird.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ungültig.
- `"false"` (Standard)
  - : Das Element befindet sich nicht in einem ungültigen Zustand.
- `"grammar"`
  - : Das Element befindet sich in einem ungültigen Zustand, weil ein grammatikalischer Fehler entdeckt wurde.
- `"spelling"`
  - : Das Element befindet sich in einem ungültigen Zustand, weil ein Rechtschreibfehler entdeckt wurde.

## Beispiele

In diesem Beispiel wird das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)-Attribut auf dem Element mit der ID `quote` weggelassen, was `null` zurückgibt und als `false` behandelt wird. Mithilfe von `ariaInvalid` aktualisieren wir den Wert auf `grammar` (weil zwei Fehler vorhanden sind).

```html
<div id="quote" role="textbox" contenteditable>you are your best thing..</div>
```

```html hidden
<hr />
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const el = document.getElementById("quote");
log(`Initial value: ${el.ariaInvalid}`);
el.ariaInvalid = "grammar";
log(`Updated value: ${el.ariaInvalid}`);
```

{{EmbedLiveSample("Examples", "", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
- [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
