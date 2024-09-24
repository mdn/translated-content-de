---
title: "Element: ariaHasPopup-Eigenschaft"
short-title: ariaHasPopup
slug: Web/API/Element/ariaHasPopup
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaHasPopup`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle spiegelt den Wert des [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)-Attributs wider, welches die Verfügbarkeit und den Typ eines interaktiven Pop-up-Elements, wie Menü oder Dialog, angibt, das durch ein Element ausgelöst werden kann.

## Wert

Ein String mit einem der folgenden Werte:

- `"false"`
  - : Das Element hat kein Pop-up.
- `"true"`
  - : Das Element hat ein Pop-up, das ein Menü ist.
- `"menu"`
  - : Das Element hat ein Pop-up, das ein Menü ist.
- `"listbox"`
  - : Das Element hat ein Pop-up, das eine Liste ist.
- `"tree"`
  - : Das Element hat ein Pop-up, das ein Baum ist.
- `"grid"`
  - : Das Element hat ein Pop-up, das ein Raster ist.
- `"dialog"`
  - : Das Element hat ein Pop-up, das ein Dialog ist.

> [!WARNING]
> Beachten Sie, dass die Unterstützung für die verschiedenen `aria-haspopup`-Werte je nach Element, für das das Attribut angegeben ist, variieren kann. Stellen Sie sicher, dass beim Verwenden von `aria-haspopup` die Verwendung in Übereinstimmung mit der ARIA-Spezifikation erfolgt und es wie erwartet funktioniert, wenn es mit den notwendigen Browsern und unterstützenden Technologien getestet wird.

## Beispiele

In diesem Beispiel wird das `aria-haspopup`-Attribut auf dem Element mit der ID `animal` auf "`true`" gesetzt. Mithilfe von `ariaHasPopup` aktualisieren wir den Wert auf "`listbox`", was der erwartete Wert für eine Kombinationsbox ist, die ein `listbox`-Pop-up aufruft.

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
