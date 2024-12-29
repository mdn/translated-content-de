---
title: "Element: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/Element/ariaMultiSelectable
l10n:
  sourceCommit: ffa1044739d7d809ceb7f213aa252f8f0b3815d8
---

{{APIRef("DOM")}}

Die **`ariaMultiSelectable`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attributs wider, welches angibt, dass der Benutzer mehr als ein Element aus den derzeit auswählbaren Nachkommen auswählen kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("select")}}-Element, da dieses eingebaute Semantik hat und keine ARIA-Attribute benötigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Mehr als ein Element kann gleichzeitig ausgewählt werden.
- `"false"`
  - : Es kann nur ein Element ausgewählt werden.

## Beispiele

In diesem Beispiel wird das `aria-multiselectable`-Attribut auf dem Element mit der ID `listbox1` auf "true" gesetzt, was bedeutet, dass diese Eingabe mehrere ausgewählte Elemente akzeptiert. Mit `ariaMultiSelectable` aktualisieren wir den Wert auf "false".

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

- [ARIA: listbox role](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
