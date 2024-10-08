---
title: "Element: ariaMultiSelectable-Eigenschaft"
short-title: ariaMultiSelectable
slug: Web/API/Element/ariaMultiSelectable
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaMultiSelectable`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)-Attributs wider, welches anzeigt, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachfahren auswählen kann.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML-{{htmlelement("select")}}-Element, da dieses eingebaute Semantik hat und keine ARIA-Attribute benötigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Es können mehrere Elemente gleichzeitig ausgewählt werden.
- `"false"`
  - : Es kann nur ein Element ausgewählt werden.

## Beispiele

In diesem Beispiel ist das `aria-multiselectable`-Attribut des Elements mit der ID `listbox1` auf "true" gesetzt, was darauf hinweist, dass diese Eingabe mehrere ausgewählte Elemente akzeptiert. Mit `ariaMultiSelectable` aktualisieren wir den Wert auf "false".

```html
<div role="listbox" tabindex="0" id="listbox1"
  aria-multiselectable="true" aria-labelledby="listbox1label" aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">Green</div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div<
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

- [ARIA: listbox-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/listbox_role)
