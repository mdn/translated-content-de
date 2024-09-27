---
title: "Element: ariaHasPopup-Eigenschaft"
short-title: ariaHasPopup
slug: Web/API/Element/ariaHasPopup
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}}

Die **`ariaHasPopup`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Attributs wider, das die Verfügbarkeit und den Typ eines interaktiven Popup-Elements anzeigt, z. B. ein Menü oder Dialog, das durch ein Element ausgelöst werden kann.

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Das Element hat kein Popup.
- `"true"`
  - : Das Element hat ein Popup, das ein Menü ist.
- `"menu"`
  - : Das Element hat ein Popup, das ein Menü ist.
- `"listbox"`
  - : Das Element hat ein Popup, das eine Listbox ist.
- `"tree"`
  - : Das Element hat ein Popup, das ein Baum ist.
- `"grid"`
  - : Das Element hat ein Popup, das ein Raster ist.
- `"dialog"`
  - : Das Element hat ein Popup, das ein Dialog ist.

> [!WARNING]
> Beachten Sie, dass die Unterstützung für die verschiedenen `aria-haspopup`-Werte je nach Element, für das das Attribut angegeben ist, variieren kann. Stellen Sie sicher, dass `aria-haspopup` gemäß der ARIA-Spezifikation verwendet wird und dass es ordnungsgemäß funktioniert, wenn Sie es mit den erforderlichen Browsern und unterstützenden Technologien testen.

## Beispiele

In diesem Beispiel wird das `aria-haspopup`-Attribut des Elements mit der ID `animal` auf `"true"` gesetzt. Mit `ariaHasPopup` aktualisieren wir den Wert auf `"listbox"`, was der erwartete Wert für ein Kombinationsfeld ist, das ein `listbox`-Popup aufruft.

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-controls="animals-listbox"
    aria-activedescendant=""
    aria-expanded="false"
    aria-haspopup="true" />
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaHasPopup); // true
el.ariaHasPopup = "listbox";
console.log(el.ariaHasPopup); // listbox
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
