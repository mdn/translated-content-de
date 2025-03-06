---
title: "Element: ariaHidden-Eigenschaft"
short-title: ariaHidden
slug: Web/API/Element/ariaHidden
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaHidden`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attributs wider, das angibt, ob das Element für eine Zugänglichkeits-API sichtbar ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element ist vor der Zugänglichkeits-API verborgen.
- `"false"`
  - : Das Element ist der Zugänglichkeits-API zugänglich, als ob es gerendert wäre.
- `"undefined"`
  - : Der versteckte Status des Elements wird vom Benutzeragenten bestimmt, basierend darauf, ob es gerendert wird oder nicht.

## Beispiele

In diesem Beispiel wird das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut des Elements mit der ID `hidden` auf "true" gesetzt. Mit `ariaHidden` aktualisieren wir den Wert auf "false".

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
