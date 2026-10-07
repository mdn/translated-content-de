---
title: "Element: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/Element/ariaHidden
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("DOM")}}

Die **`ariaHidden`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des Attributs [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) wider. Dieses gibt an, ob das Element für eine Barrierefreiheits-API zugänglich ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist vor der Barrierefreiheits-API verborgen.
- `"false"`
  - : Das Element ist für die Barrierefreiheits-API zugänglich, als ob es gerendert würde.
- `"undefined"`
  - : Der User Agent bestimmt anhand dessen, ob das Element gerendert wird, ob es verborgen ist.

## Beispiele

In diesem Beispiel ist das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) des Elements mit der ID `hidden` auf "true" gesetzt. Mit `ariaHidden` ändern wir den Wert auf "false".

```html
<div id="hidden" aria-hidden="true">Some things are better left unsaid.</div>
```

```js
let el = document.getElementById("hidden");
console.log(el.ariaHidden); // true
el.ariaHidden = "false";
console.log(el.ariaHidden); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
