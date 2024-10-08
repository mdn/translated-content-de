---
title: "Element: ariaExpanded-Eigenschaft"
short-title: ariaExpanded
slug: Web/API/Element/ariaExpanded
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaExpanded`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attributs wider, welches angibt, ob ein Gruppierungselement, das von diesem Element besessen oder kontrolliert wird, erweitert oder eingeklappt ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Gruppierungselement, das dieses Element besitzt oder kontrolliert, ist erweitert.
- `"false"`
  - : Das Gruppierungselement, das dieses Element besitzt oder kontrolliert, ist eingeklappt.
- `"undefined"`
  - : Das Element besitzt oder kontrolliert kein Gruppierungselement, das erweiterbar ist.

## Beispiele

In diesem Beispiel wird das `aria-expanded`-Attribut beim Element mit der ID `animal` auf "false" gesetzt. Mit `ariaExpanded` aktualisieren wir den Wert auf "true".

```html
<div class="animals-combobox">
  <label for="animal">Animal</label>
  <input
    id="animal"
    type="text"
    role="combobox"
    aria-autocomplete="list"
    aria-expanded="false"
    aria-haspopup="true" />
  <button id="animals-button" tabindex="-1" aria-label="Open">▽</button>
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
```

```js
let el = document.getElementById("animal");
console.log(el.ariaExpanded); // false
el.ariaExpanded = "true";
console.log(el.ariaExpanded); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
