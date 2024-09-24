---
title: "Element: ariaPressed-Eigenschaft"
short-title: ariaPressed
slug: Web/API/Element/ariaPressed
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaPressed`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)-Attributs wider, welches den aktuellen "gedrückten" Zustand von Umschaltknöpfen anzeigt.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("input")}}-Element mit `type="button"` oder das {{htmlelement("button")}}-Element, da diese eingebaute Semantik haben und keine ARIA-Attribute benötigen.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist gedrückt.
- `"false"`
  - : Das Element unterstützt das Drücken, ist aber derzeit nicht gedrückt.
- `"mixed"`
  - : Gibt einen Mischmoduswert für einen Drei-Zustands-Umschaltknopf an.
- `"undefined"`
  - : Das Element unterstützt das Drücken nicht.

## Beispiele

In diesem Beispiel ist das `aria-pressed`-Attribut des Elements mit der ID `saveChanges` auf "false" gesetzt, was anzeigt, dass diese Eingabe derzeit nicht gedrückt ist. Mit `ariaPressed` aktualisieren wir den Wert auf "true".

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Speichern</div>
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

- [ARIA: Rollenbeschreibung für Button](/de/docs/Web/Accessibility/ARIA/Roles/button_role)
