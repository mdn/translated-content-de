---
title: "Element: ariaSelected Eigenschaft"
short-title: ariaSelected
slug: Web/API/Element/ariaSelected
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaSelected`** Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected)-Attributs wider, das den aktuellen "ausgewählt" Zustand von Elementen angibt, die einen auswählbaren Zustand haben.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"false"`
  - : Das Element ist nicht ausgewählt.
- `"undefined"`
  - : Das Element ist nicht auswählbar.

## Beispiele

In diesem Beispiel wird das `aria-selected`-Attribut des Elements mit der ID `tab-id` auf "true" gesetzt. Mit `ariaSelected` aktualisieren wir den Wert auf "false".

```html
<button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Tab label
</button>
```

```js
let el = document.getElementById("tab-id");
console.log(el.ariaSelected); // true
el.ariaSelected = "false";
console.log(el.ariaSelected); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: tab role](/de/docs/Web/Accessibility/ARIA/Roles/tab_role)
