---
title: "Element: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/Element/ariaPressed
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaPressed`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributs wider, welches den aktuellen "gedrückten" Zustand von Umschalter-Buttons angibt.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="button"` oder das {{htmlelement("button")}}-Element, da diese über eingebaute Semantik verfügen und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt das Drücken, ist jedoch derzeit nicht gedrückt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für einen Drei-Zustands-Umschaltknopf an.
- `"undefined"`
  - : Das Element unterstützt das Drücken nicht.

## Beispiele

In diesem Beispiel ist das `aria-pressed`-Attribut des Elements mit der ID `saveChanges` auf "false" gesetzt, was anzeigt, dass dieses Eingabefeld derzeit nicht gedrückt ist. Mit `ariaPressed` aktualisieren wir den Wert auf "true".

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaPressed); // "false"
el.ariaPressed = "true";
console.log(el.ariaPressed); // "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: button role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
