---
title: "Element: ariaSelected-Eigenschaft"
short-title: ariaSelected
slug: Web/API/Element/ariaSelected
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaSelected`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attributs wider, das den aktuellen "ausgewählt"-Zustand von Elementen angibt, die einen auswählbaren Zustand haben.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist ausgewählt.
- `"false"`
  - : Das Element ist nicht ausgewählt.
- `"undefined"`
  - : Das Element ist nicht auswählbar.

## Beispiele

In diesem Beispiel wird das `aria-selected`-Attribut des Elements mit der ID `tab-id` auf "true" gesetzt. Mithilfe von `ariaSelected` aktualisieren wir den Wert auf "false".

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

- [ARIA: `tab`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
