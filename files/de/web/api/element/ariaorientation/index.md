---
title: "Element: ariaOrientation-Eigenschaft"
short-title: ariaOrientation
slug: Web/API/Element/ariaOrientation
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaOrientation`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Attributs wider, das angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"horizontal"`
  - : Das Element ist horizontal.
- `"vertical"`
  - : Das Element ist vertikal.
- `"undefined"`
  - : Die Ausrichtung des Elements ist unbekannt.

## Beispiele

In diesem Beispiel ist das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Attribut auf dem Element mit der ID `handle_zoomSlider` auf "`vertical`" gesetzt. Mit `ariaOrientation` aktualisieren wir den Wert auf "`horizontal`".

```html
<div
  id="handle_zoomSlider"
  role="slider"
  aria-orientation="vertical"
  aria-valuemin="0"
  aria-valuemax="17"
  aria-valuenow="14"
  tabindex="0">
  <span>11</span>
</div>
```

```js
let el = document.getElementById("handle_zoomSlider");
console.log(el.ariaOrientation); // "vertical"
el.ariaOrientation = "horizontal";
console.log(el.ariaOrientation); // "horizontal"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}