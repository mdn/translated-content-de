---
title: "Element: ariaHasPopup-Eigenschaft"
short-title: ariaHasPopup
slug: Web/API/Element/ariaHasPopup
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaHasPopup`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Attributs wider, welches die Verfügbarkeit und den Typ eines interaktiven Popup-Elements, wie etwa ein Menü oder Dialog, angibt, das von einem Element ausgelöst werden kann.

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
> Bitte beachten Sie, dass die Unterstützung für die verschiedenen `aria-haspopup`-Werte je nach Element, für das das Attribut spezifiziert wird, variieren kann. Stellen Sie sicher, dass bei der Verwendung von `aria-haspopup` dies in Übereinstimmung mit der ARIA-Spezifikation geschieht und es das erwartete Verhalten zeigt, wenn Sie mit den erforderlichen Browsern und unterstützenden Technologien testen.

## Beispiele

In diesem Beispiel wird das `aria-haspopup`-Attribut des Elements mit der ID `animal` auf `"true"` gesetzt. Mit `ariaHasPopup` aktualisieren wir den Wert auf `"listbox"`, was der erwartete Wert für eine Kombinationsbox ist, die ein `listbox`-Popup aufruft.

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
