---
title: "Element: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/Element/ariaMultiSelectable
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaMultiSelectable`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)-Attributs wider, welches anzeigt, dass der Benutzer mehr als einen Eintrag aus den aktuell auswählbaren Nachfahren auswählen kann.

> [!NOTE]
> Verwenden Sie, wenn möglich, ein HTML-{{htmlelement("select")}}-Element, da dieses eingebaute Semantiken hat und keine ARIA-Attribute benötigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Mehr als ein Eintrag kann gleichzeitig ausgewählt werden.
- `"false"`
  - : Nur ein Eintrag kann ausgewählt werden.

## Beispiele

In diesem Beispiel wird das `aria-multiselectable`-Attribut auf dem Element mit der ID `listbox1` auf "true" gesetzt, was anzeigt, dass diese Eingabe mehrere ausgewählte Einträge akzeptiert. Mit `ariaMultiSelectable` aktualisieren wir den Wert auf "false".

```html
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-multiselectable="true"
  aria-labelledby="listbox1label"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    Green
  </div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div>
</div>
```

```js
let el = document.getElementById("listbox1");
console.log(el.ariaMultiSelectable); // "true"
el.ariaMultiSelectable = "false";
console.log(el.ariaMultiSelectable); // "false"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: listbox-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)
