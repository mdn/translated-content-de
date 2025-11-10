---
title: "Element: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/Element/ariaPressed
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaPressed`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle reflektiert den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attributs, welches den aktuellen "gedrückten" Zustand von Umschaltknöpfen anzeigt.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}} Element mit `type="button"` oder das {{htmlelement("button")}} Element, da diese eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt das Drücken, ist aber momentan nicht gedrückt.
- `"mixed"`
  - : Gibt einen gemischten Moduswert für einen Drei-Zustand-Umschaltknopf an.
- `"undefined"`
  - : Das Element unterstützt das Drücken nicht.

## Beispiele

In diesem Beispiel wird das `aria-pressed`-Attribut des Elements mit der ID `saveChanges` auf "false" gesetzt, was anzeigt, dass dieser Eingang derzeit nicht gedrückt ist. Mit `ariaPressed` aktualisieren wir den Wert auf "true".

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

- [ARIA: Button-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
