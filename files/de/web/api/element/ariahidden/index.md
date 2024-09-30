---
title: "Element: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/Element/ariaHidden
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaHidden`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attributs wider, das angibt, ob das Element für eine Zugriffs-API sichtbar ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist für die Zugriffs-API verborgen.
- `"false"`
  - : Das Element ist für die Zugriffs-API sichtbar, als ob es gerendert wäre.
- `"undefined"`
  - : Der verborgene Zustand des Elements wird vom Benutzeragenten basierend darauf bestimmt, ob es gerendert ist.

## Beispiele

In diesem Beispiel wird das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)-Attribut des Elements mit der ID `hidden` auf "true" gesetzt. Mit `ariaHidden` aktualisieren wir den Wert auf "false".

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
